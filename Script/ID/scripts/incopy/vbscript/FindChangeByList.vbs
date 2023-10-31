Rem FindChangeByList.vbs
Rem An InCopy VBScript
Rem
Rem Loads a series of tab-delimited strings from a text file, then performs a series
Rem of find/change operations based on the strings read from the file.
Rem
Rem The data file is tab-delimited, with carriage returns separating records.
Rem
Rem The format of each record in the file is:
Rem findType<tab>findProperties<tab>changeProperties<tab>findChangeOptions<tab>description
Rem 
Rem Where:
Rem <tab> is a tab character
Rem findType is "text", "grep", or "glyph" (this sets the type of find/change operation to use).
Rem findProperties is a properties record (as text) of the find preferences.
Rem changeProperties is a properties record (as text) of the change preferences.
Rem findChangeOptions is a properties record (as text) of the find/change options.
Rem description is a description of the find/change operation
Rem 
Rem Very simple example:
Rem text	{findWhat:"--"}	{changeTo:"^_"}	{includeFootnotes:true, includeMasterPages:true, includeHiddenLayers:true, wholeWord:false}	Find all double dashes and replace with an em dash.
Rem 
Rem More complex example:
Rem text	{findWhat:"^9^9.^9^9"}	{appliedCharacterStyle:"price"}	{include footnotes:true, include master pages:true, include hidden layers:true, whole word:false}	Find $10.00 to $99.99 and apply the character style "price".
Rem 
Rem All InCopy search metacharacters are allowed in the "find what" and "change to" properties.
Rem
main
Function main()
	Set myInCopy = CreateObject("InCopy.Application.2024")
	Rem Set the user interaction level to allow the display of dialog boxes and alerts.
	myInCopy.ScriptPreferences.UserInteractionLevel = idUserInteractionLevels.idInteractWithAll
	If myInCopy.Documents.Count > 0 Then
	    If myInCopy.Documents.Item(1).Stories.Count > 0 Then
	        If myInCopy.Selection.Count > 0 Then
	            Select Case TypeName(myInCopy.Selection.Item(1))
	                Case "InsertionPoint", "Character", "Word", "TextStyleRange", "Line", "Paragraph", "TextColumn", "Text", "Cell", "Table", "Row", "Column"
	                    myDisplayDialog(myInCopy)
	                Case Else:
	                    myFindChangeByList myInCopy, myInCopy.Documents.Item(1)
	            End Select
	     	Else
	            myFindChangeByList myInCopy, myInCopy.Documents.Item(1)
	        End If
	    Else
	        MsgBox ("The current document contains no text. Please open a document containing text and try again.")
	    End If
	Else
	    MsgBox ("No documents are open. Please open a document and try again.")
	End If
End Function
Function myDisplayDialog(myInCopy)
    myObject = "None"
    Set myDialog = myInCopy.Dialogs.Add
    myDialog.Name = "FindChangeByList"
    With myDialog.DialogColumns.Add
        With .DialogRows.Add
            With .DialogColumns.Add
                With .StaticTexts.Add
                    .StaticLabel = "Search Range"
                End With
            End With
            With .DialogColumns.Add
                Set myRangeButtons = .RadiobuttonGroups.Add
                With myRangeButtons
                    With .RadiobuttonControls.Add
                        .StaticLabel = "Document"
                        .CheckedState = True
                    End With
                    With .RadiobuttonControls.Add
                        .StaticLabel = "Selected Story"
                    End With
                    If myInCopy.Selection.Item(1).Contents <> "" Then
                        With .RadiobuttonControls.Add
                            .StaticLabel = "Selection"
	                        .CheckedState = True
                        End With
                    End If
                End With
            End With
        End With
    End With
    myResult = myDialog.Show
    If myResult = True Then
        Select Case myRangeButtons.SelectedButton
            Case 0:
                Set myObject = myInCopy.Documents.Item(1)
            Case 1:
                Select Case TypeName(myInCopy.Selection.Item(1))
                    Case "InsertionPoint", "Character", "Word", "TextStyleRange", "Line", "Paragraph", "TextColumn", "Text"
                        Set myObject = myInCopy.Selection.Item(1).ParentStory
                        myFindChangeByList
                End Select
            Case 2:
                Select Case TypeName(myInCopy.Selection.Item(1))
                    Case "Character", "Word", "TextStyleRange", "Line", "Paragraph", "TextColumn", "Text"
                        If myInCopy.Selection.Item(1).Contents <> "" Then
                            Set myObject = myInCopy.Selection.Item(1).Texts.Item(1)
						Else
							Set myObject = myInCopy.Selection.Item(1).ParentStory
						End If
                Case Else:
                    Set myObject = Nothing
            End Select
        End Select
		myFindChangeByList myInCopy, myObject
    Else
        myDialog.Destroy
    End If
End Function
Function myFindChangeByList(myInCopy, myObject)
    myFileName = myFindFile(myInCopy, "\FindChangeSupport\FindChangeList.txt")
    If myFileName <> "" Then
        Set myFileSystemObject = CreateObject("Scripting.FileSystemObject")
        Set myFindChangeFile = myFileSystemObject.OpenTextFile(myFileName)
        Rem Loop through the find/change operations.
        Do While Not myFindChangeFile.AtEndOfStream
            myLine = myFindChangeFile.ReadLine
            Rem Ignore empty lines.
            If (Left(myLine, 4) = "text")Or(Left(myLine, 4) = "grep")Or(Left(myLine, 5) = "glyph") Then
                myFindChangeArray = Split(myLine, vbTab)
                Rem The first field in the line is the FindType string.
				myFindType = myFindChangeArray(0)
                Rem The second field in the line is the FindPreferences string.
                myFindPreferences = myFindChangeArray(1)
                Rem The third field in the line is the ChangePreferences string.
                myChangePreferences = myFindChangeArray(2)
                Rem The fourth field in the line can be either "once" or "all".
                Rem If it's "all", keep on searching until no instances of the
                Rem search text are found, if it's "once," search just once.
                myFindChangeOptions = myFindChangeArray(3)
                Select Case myFindType
                	Case "text"
                		myFindText myInCopy, myObject, myFindPreferences, myChangePreferences, myFindChangeOptions
                	Case "grep"
                		myFindGrep myInCopy, myObject, myFindPreferences, myChangePreferences, myFindChangeOptions
                	Case "glyph"
                		myFindGlyph myInCopy, myObject, myFindPreferences, myChangePreferences, myFindChangeOptions
                End Select
            End If
        Loop
        myFindChangeFile.Close
    End If
End Function
Function myFindText(myInCopy, myObject, myFindPreferences, myChangePreferences, myFindChangeOptions)
	Rem Clear the FindText/ChangeText Preferences before each find/change operation.
	myInCopy.FindTextPreferences = idNothingEnum.idNothing
	myInCopy.ChangeTextPreferences = idNothingEnum.idNothing
	myScript = "app.findTextPreferences.properties = " & myFindPreferences & ";" & vbCr
	myScript = myScript & "app.changeTextPreferences.properties = " & myChangePreferences & ";" & vbCr
	myScript = myScript & "app.findChangeTextOptions.properties = " & myFindChangeOptions & ";" & vbCr
    myInCopy.DoScript myScript, idScriptLanguage.idJavascript
	Set myFoundItems = myObject.ChangeText
	Rem Clear the FindText/ChangeText Preferences after each find/change operation.
	myInCopy.FindTextPreferences = idNothingEnum.idNothing
	myInCopy.ChangeTextPreferences = idNothingEnum.idNothing
End Function
Function myFindGrep(myInCopy, myObject, myFindPreferences, myChangePreferences, myFindChangeOptions)
	Rem Clear the FindGrep/ChangeGrep Preferences before each find/change operation.
	myInCopy.FindGrepPreferences = idNothingEnum.idNothing
	myInCopy.ChangeGrepPreferences = idNothingEnum.idNothing
	myScript = "app.findGrepPreferences.properties = " & myFindPreferences & ";" & vbCr
	myScript = myScript & "app.changeGrepPreferences.properties = " & myChangePreferences & ";" & vbCr
	myScript = myScript & "app.findChangeGrepOptions.properties = " & myFindChangeOptions & ";" & vbCr
    myInCopy.DoScript myScript, idScriptLanguage.idJavascript
	Set myFoundItems = myObject.ChangeGrep
	Rem Clear the FindGrep/ChangeGrep Preferences after each find/change operation.
	myInCopy.FindGrepPreferences = idNothingEnum.idNothing
	myInCopy.ChangeGrepPreferences = idNothingEnum.idNothing
End Function
Function myFindGlyph(myInCopy, myObject, myFindPreferences, myChangePreferences, myFindChangeOptions)
	Rem Clear the FindGlyph/ChangeGlyph Preferences before each find/change operation.
	myInCopy.FindGlyphPreferences = idNothingEnum.idNothing
	myInCopy.ChangeGlyphPreferences = idNothingEnum.idNothing
	myScript = "app.findGlyphPreferences.properties = " & myFindPreferences & ";" & vbCr
	myScript = myScript & "app.changeGlyphPreferences.properties = " & myChangePreferences & ";" & vbCr
	myScript = myScript & "app.findChangeGlyphOptions.properties = " & myFindChangeOptions & ";" & vbCr
    myInCopy.DoScript myScript, idScriptLanguage.idJavascript
	Set myFoundItems = myObject.ChangeGlyph
	Rem Clear the FindGlyph/ChangeGlyph Preferences after each find/change operation.
	myInCopy.FindGlyphPreferences = idNothingEnum.idNothing
	myInCopy.ChangeGlyphPreferences = idNothingEnum.idNothing
End Function 
Function myFindFile(myInCopy, myRelativePath)
	myFilePath = myInCopy.ActiveScript
	Set myFileSystemObject = CreateObject("Scripting.FileSystemObject")
	myFolderPath = myFileSystemObject.GetFile(myFilePath).ParentFolder.Path
	myFilePath = myFolderPath & myRelativePath
	If myFileSystemObject.FileExists(myFilePath) = True Then
		myFile = myFilePath
	Else
		myFile = myGetFileName(myFolderPath)
	End If
	myFindFile = myFile
End Function
Function myGetFileName(myFolder)
	Set myDialog = CreateObject("UserAccounts.CommonDialog")
	myDialog.Filter = "VBScript files|*.vbs"
	myDialog.InitialDir = myFolder
	myResult = myDialog.ShowOpen	 
	If myResult = 0 Then
	    myFileName = ""
	Else
		myFileName = myDialog.FileName
	End If
	myGetFileName = myFileName
End Function
Rem AfterNew.vbs
Rem An InCopy VBScript
Rem
Rem Adds an event listener to the afterNew event. Calls
Rem a script on disk to set up basic document parameters
Rem and XMP metadata. To remove the event listener,
Rem either quit and restart InCopy or run the 
Rem RemoveAfterNew.vbs script.
main
Function main()
	Set myInCopy = CreateObject("InCopy.Application.2024")
	mySetup myInCopy
	mySnippet myInCopy
	myTeardown myInCopy
End Function
Function mySetup(myInCopy)
End Function
Function mySnippet(myInCopy)
	Rem <fragment>
	Rem Define the handler as a file named "AfterNewHandler.vbs" stored
	Rem in the same folder as this script.
	myFileName = myFindFile(myInCopy, "\AfterNewHandler.vbs")
	If myFileName <> "" Then
		Set myEventListener = myInCopy.EventListeners.Add("afterNew", myFileName, False)
	End If
	Rem </fragment>
End Function
Function myTeardown(myInCopy)
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
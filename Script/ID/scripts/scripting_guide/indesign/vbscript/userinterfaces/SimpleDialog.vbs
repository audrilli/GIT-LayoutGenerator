Rem SimpleDialog.vbs
Rem An InDesign VBScript
Rem
Rem Creates a simple dialog box.
main
Function main()
	Set myInDesign = CreateObject("InDesign.Application.2024")
	mySetup myInDesign
	mySnippet myInDesign
	myTeardown myInDesign
End Function
Function mySetup(myInDesign)
End Function
Function mySnippet(myInDesign)
	Rem ![Simple dialog.]
	Set myInDesign = CreateObject("InDesign.Application.2024")
	Set myDialog = myInDesign.Dialogs.Add
	Rem Add a dialog column.
	With myDialog.DialogColumns.Add
		With .StaticTexts.Add
			.StaticLabel = "This is a very simple dialog box."
		End With
	End With
	Rem Show the dialog box.
	myResult = myDialog.Show
	Rem If the user clicked OK, display one message;
	Rem if they clicked Cancel, display a different message.
	If myResult = True Then
		MsgBox("You clicked the OK button!")
	Else
		MsgBox("You clicked the Cancel button!")
	End If
	Rem Remove the dialog from memory.
	myDialog.Destroy
	Rem ![Simple dialog.]
End Function
Function myTeardown(myInDesign)
End Function
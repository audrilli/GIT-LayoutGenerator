Rem LayerName.vbs
Rem An InDesign VBScript
Rem 
Rem Shows how to get a reference to a layer by name.
main
Function main()
	Set myInDesign = CreateObject("InDesign.Application.2024")
	mySetup myInDesign
	mySnippet myInDesign
	myTeardown myInDesign
End Function
Function mySetup(myInDesign)
	Set myDocument = myInDesign.documents.add
	With myDocument.layers.add
		.name = "Text Layer"
	End With
End Function
Function mySnippet(myInDesign)
	Set myDocument = myInDesign.documents.item(1)
	Rem ![Layer name.]
	Rem Given a document "myDocument"...
	Set myLayer = myDocument.Layers.Item("Text Layer")
	Rem ![Layer name.]
	MsgBox "Text Layer ID: " & CStr(myLayer.id)
End Function
Function myTeardown(myInDesign)
End Function
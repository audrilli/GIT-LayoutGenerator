Rem XMLPreferences.vbs
Rem An InDesign VBScript.
Rem
Rem Sets tagging preset options.
main
Function main()
	Set myInDesign = CreateObject("InDesign.Application.2024")
	mySetup myInDesign
	mySnippet myInDesign
	myTeardown myInDesign
End Function
Function mySetup(myInDesign)
	Set myDocument = myInDesign.Documents.Add
End Function
Function mySnippet(myInDesign)
	Rem ![XML preferences.]
	Set myDocument = myInDesign.Documents.Item(1)
	Set myXMLPreferences = myDocument.XMLPreferences
	myXMLPreferences.DefaultCellTagColor = idUIColors.idBlue
	myXMLPreferences.DefaultCellTagName = "cell"
	myXMLPreferences.DefaultImageTagColor = idUIColors.idBrickRed
	myXMLPreferences.DefaultImageTagName = "image"
	myXMLPreferences.DefaultStoryTagColor = idUIColors.idCharcoal
	myXMLPreferences.DefaultStoryTagName = "text"
	myXMLPreferences.DefaultTableTagColor = idUIColors.idCuteTeal
	myXMLPreferences.DefaultTableTagName = "table"
	Rem ![XML preferences.]
End Function
Function myTeardown(myInDesign)
End Function


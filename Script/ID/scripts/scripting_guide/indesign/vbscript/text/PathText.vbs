Rem PathText.vbs
Rem An InDesign VBScript
Rem
Rem Shows how to add text to a path.
main
Function main()
	Set myInDesign = CreateObject("InDesign.Application.2024")
	mySetup myInDesign
	mySnippet myInDesign
	myTeardown myInDesign
End Function
Function mySetup(myInDesign)
	Set myDocument = myInDesign.Documents.Add
	myDocument.ViewPreferences.HorizontalMeasurementUnits = idMeasurementUnits.idPoints
	myDocument.ViewPreferences.VerticalMeasurementUnits = idMeasurementUnits.idPoints
End Function
Function mySnippet(myInDesign)
	Rem ![Path text.]
	Set myDocument = myInDesign.Documents.Item(1)
	Set myPage = myDocument.Pages.Item(1)
	Rem Create a rectangle on the first page.
	Set myTextFrame = myPage.TextFrames.Add
	myTextFrame.geometricBounds = Array(72, 72, 288, 288)
	Set myTextPath = myTextFrame.TextPaths.Add
	myTextPath.Contents = "This is path text."
	Rem ![Path text.]
End Function
Function myTeardown(myInDesign)
End Function
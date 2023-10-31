Rem MakeRectangleWithProperties.vbs
Rem An InDesign VBScript
Rem 
Rem Shows how to create a rectangle on a page.
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
	Set myDocument = myInDesign.Documents.Item(1)
	Set myPage = myDocument.Pages.Item(1)
	Rem ![Make rectangle with properties.]
	Rem Given a page "myPage", create a new rectangle of a specific size...
	Set myRectangle = myPage.Rectangles.Add
	myRectangle.GeometricBounds = Array(72, 72, 144, 144)
	Rem ![Make rectangle with properties.]
End Function
Function myTeardown(myInDesign)
End Function
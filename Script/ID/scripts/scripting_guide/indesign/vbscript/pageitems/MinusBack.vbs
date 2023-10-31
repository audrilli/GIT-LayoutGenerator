Rem MinusBack.vbs
Rem An InDesign VBScript
Rem 
Rem Shows how to use the minus back method.
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
	myDocument.ViewPreferences.RulerOrigin = idRulerOrigin.idPageOrigin
	Set myPage = myDocument.Pages.Item(1)
	Set myRectangle = myPage.Rectangles.Add
	myRectangle.GeometricBounds = Array(72, 72, 144, 144)
	Set myOval = myPage.Ovals.Add
	myOval.GeometricBounds = Array(108, 108, 180, 180)
	myRectangle.FillColor = myDocument.Colors.Item("Black")
	myOval.FillColor = myDocument.Colors.Item("Black")
End Function
Function mySnippet(myInDesign)
	Set myRectangle = myInDesign.Documents.Item(1).Pages.Item(1).Rectangles.Item(1)	
	Set myOval = myInDesign.Documents.Item(1).Pages.Item(1).Ovals.Item(1)
	Rem ![Minus back.]
	Rem Given a rectangle "myRectangle" and an Oval "myOval"...
	myRectangle.MinusBack myOval
	Rem ![Minus back.]
End Function
Function myTeardown(myInDesign)
End Function
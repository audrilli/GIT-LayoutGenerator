Rem ImportXML.vbs
Rem An InDesign VBScript
Rem
Rem Imports an XML file.
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
	Set myDocument = myInDesign.Documents.Item(1)
	Set myPage = myDocument.Pages.Item(1)
	Rem You'll have to fill in your own file path.
	Rem ![Import XML.]
	myDocument.ImportXML "c:\test.xml"
	Rem ![Import XML.]
	Set myRootXMLElement = myDocument.XMLElements.Item(1)
	Set myTextFrame = myPage.TextFrames.Add
	myTextFrame.GeometricBounds = myGetBounds(myDocument, myPage)
	myRootXMLElement.PlaceXML myTextFrame
End Function
Function myTeardown(myInDesign)
End Function
Function myGetBounds(myDocument, myPage)
	myPageWidth = myDocument.DocumentPreferences.PageWidth
	myPageHeight = myDocument.DocumentPreferences.PageHeight
	If myPage.Side = idPageSideOptions.idLeftHand Then
		myX2 = myPage.MarginPreferences.Left
		myX1 = myPage.MarginPreferences.Right
	Else
		myX1 = myPage.MarginPreferences.Left
		myX2 = myPage.MarginPreferences.Right
	End If
	myY1 = myPage.marginPreferences.Top
	myX2 = myPageWidth - myX2
	myY2 = myPageHeight - myPage.MarginPreferences.Bottom
	myGetBounds = Array(myY1, myX1, myY2, myX2)
End Function
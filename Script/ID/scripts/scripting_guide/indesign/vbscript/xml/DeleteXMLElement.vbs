Rem DeleteXMLElement.vbs
Rem An InDesign VBScript
Rem
Rem Shows how to delete an XML element.
main
Function main()
	Set myInDesign = CreateObject("InDesign.Application.2024")
	mySetup myInDesign
	mySnippet myInDesign
	myTeardown myInDesign
End Function
Function mySetup(myInDesign)
	Set myDocument = myInDesign.documents.add()
	Set myRootXMLElement = myDocument.xmlElements.item(1)
	Set myXMLTag = myDocument.xmlTags.add("xml_element")
	Set myXMLElementA = myRootXMLElement.xmlElements.add(myXMLTag)
	myXMLElementA.contents = "A"
	Set myXMLElementB = myRootXMLElement.xmlElements.add(myXMLTag)
	myXMLElementB.contents = "B"
	Set myXMLElementC = myRootXMLElement.xmlElements.add(myXMLTag)
	myXMLElementC.contents = "C"
	Set myXMLElementD = myRootXMLElement.xmlElements.add(myXMLTag)
	myXMLElementD.contents = "D"
End Function
Function mySnippet(myInDesign)
	Set myDocument = myInDesign.Documents.Item(1)
	Set myRootXMLElement = myDocument.xmlElements.item(1)
	Rem ![Delete XML element.]
	Rem Delete the XML element containing "A"
	myRootXMLElement.xmlElements.item(1).Delete
	Rem ![Delete XML element.]
End Function
Function myTeardown(myInDesign)
End Function


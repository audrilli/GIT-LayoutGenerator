﻿//MoveXMLElement.jsx
//An InCopy JavaScript
//
//Shows how to move an XML element in the XML hierarchy.
main();
function main(){
	mySetup();
	mySnippet();
	myTeardown();
}
function mySetup(){
	var myDocument = app.documents.add();
	var myRootXMLElement = myDocument.xmlElements.item(0);
	var myXMLTag = myDocument.xmlTags.add("xml_element");
	var myXMLElementA = myRootXMLElement.xmlElements.add(myXMLTag);
	myXMLElementA.contents = "A";
	var myXMLElementB = myRootXMLElement.xmlElements.add(myXMLTag);
	myXMLElementB.contents = "B";
	var myXMLElementC = myRootXMLElement.xmlElements.add(myXMLTag);
	myXMLElementC.contents = "C";
	var myXMLElementD = myRootXMLElement.xmlElements.add(myXMLTag);
	myXMLElementD.contents = "D";
}
function mySnippet(){
	var myDocument = app.documents.item(0);
	var myRootXMLElement = myDocument.xmlElements.item(0);
	//Move the XML element containing "A" to after the XML element cotnainign "C"
	var myXMLElementA = myRootXMLElement.xmlElements.item(0);
	myXMLElementA.move(LocationOptions.after, myRootXMLElement.xmlElements.item(2));
	//Move the XML element containing "D" to the beginning of its parent.
	myRootXMLElement.xmlElements.item(-1).move(LocationOptions.atBeginning);
	//Place the XML structure so that you can see the result.
	myDocument.stories.item(0).placeXML(myRootXMLElement);
}
function myTeardown(){
}
﻿//ExportSelectedXMLElement.jsx
//An InCopy JavaScript
//
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
	myDocument.select(myDocument.xmlElements.item(0).xmlElements.item(1));
	myDocument.xmlExportPreferences.exportFromSelected = true;
	myDocument.exportFile("XML", File(Folder.desktop + "/selectedXMLElement.xml"));
	myDocument.xmlExportPreferences.exportFromSelected = false;
	myDocument.stories.item(0).placeXML(myDocument.xmlElements.item(0));
}
function myTeardown(){
}
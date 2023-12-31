﻿//MapStylesToTags.jsx
//An InCopy JavaScript
//
//Demonstrates style to tag mapping.
main();
function main(){
	mySetup();
	mySnippet();
	myTeardown();
}
function mySetup(){
	var myDocument = app.documents.add();
	myDocument.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.points;
	myDocument.viewPreferences.verticalMeasurementUnits = MeasurementUnits.points;
	//Create a series of XML tags.
	var myHeading1XMLTag = myDocument.xmlTags.add("heading_1");
	var myHeading2XMLTag = myDocument.xmlTags.add("heading_2");
	var myPara1XMLTag = myDocument.xmlTags.add("para_1");
	var myBodyTextXMLTag = myDocument.xmlTags.add("body_text");
	//Create a series of paragraph styles.
	var myHeading1Style = myDocument.paragraphStyles.add();
	myHeading1Style.name = "heading 1";
	myHeading1Style.pointSize = 24;
	var myHeading2Style = myDocument.paragraphStyles.add();
	myHeading2Style.name = "heading 2";
	myHeading2Style.pointSize = 14;
	myHeading2Style.spaceBefore = 12;
	var myPara1Style = myDocument.paragraphStyles.add();
	myPara1Style.name = "para 1";
	myPara1Style.pointSize = 12;
	myPara1Style.firstLineIndent = 0;
	var myBodyTextStyle = myDocument.paragraphStyles.add();
	myBodyTextStyle.name = "body text";
	myBodyTextStyle.pointSize = 12;
	myBodyTextStyle.firstLineIndent = 24;
	// Add text elements.
	var myStory = myDocument.stories.item(0);
	myStory.insertionPoints.item(-1).contents = "Heading 1\r";
	myStory.paragraphs.item(-1).applyParagraphStyle(myHeading1Style, true);
	myStory.insertionPoints.item(-1).contents = "This is the first paragraph in the article.\r";
	myStory.paragraphs.item(-1).applyParagraphStyle(myPara1Style, true);
	myStory.insertionPoints.item(-1).contents = "This is the second paragraph in the article.\r";
	myStory.paragraphs.item(-1).applyParagraphStyle(myBodyTextStyle, true);
	myStory.insertionPoints.item(-1).contents = "Heading 2\r";
	myStory.paragraphs.item(-1).applyParagraphStyle(myHeading2Style, true);
	myStory.insertionPoints.item(-1).contents = "This is the first paragraph following the subhead.\r";
	myStory.paragraphs.item(-1).applyParagraphStyle(myPara1Style, true);
	myStory.insertionPoints.item(-1).contents = "This is the second paragraph following the subhead.\r";
	myStory.paragraphs.item(-1).applyParagraphStyle(myBodyTextStyle, true);
}
function mySnippet(){
	var myDocument = app.documents.item(0);
	//Create a style to tag mapping.
	myDocument.xmlExportMaps.add(myDocument.paragraphStyles.item("heading 1"), myDocument.xmlTags.item("heading_1"));
	myDocument.xmlExportMaps.add(myDocument.paragraphStyles.item("heading 2"), myDocument.xmlTags.item("heading_2"));
	myDocument.xmlExportMaps.add(myDocument.paragraphStyles.item("para 1"), myDocument.xmlTags.item("para_1"));
	myDocument.xmlExportMaps.add(myDocument.paragraphStyles.item("body text"), myDocument.xmlTags.item("body_text"));
	//Apply the style to tag mapping.
	myDocument.mapStylesToXMLTags();
}
function myTeardown(){
}
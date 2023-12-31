﻿//CreateCharacterStyle.jsx
//An InCopy JavaScript
//
//This script creates a complete character style based on the formatting attributes of the text selection. Note that this differs
//from creating a character style based on example text using the user interface--when you do that, only the formatting attributes
//that differ from the document's default text formatting are recorded by the style.
//To use the script, select some text and run the script. Enter a name for your character style, then click OK to create the style.
//
main();
function main(){
	//Make certain that user interaction (display of dialogs, etc.) is turned on.
	app.scriptPreferences.userInteractionLevel = UserInteractionLevels.interactWithAll;	
	if (app.documents.length != 0){
		if (app.selection.length == 1){
			switch (app.selection[0].constructor.name){
				case "Text":
				case "InsertionPoint":
				case "Character":
				case "Word":
				case "Line":
				case "TextStyleRange":
				case "Paragraph":
				case "TextColumn":
					myDisplayDialog();
					break;
				default:
					alert("The selected object is not a text object. Select some text and try again.");
					break;
			}
		}
		else{
			alert("Please select some text and try again.");
		}
	}
	else{
		alert("No documents are open. Please open a document, select some text, and try again.");
	}
}
function myDisplayDialog(){
	var myDialog = app.dialogs.add({name:"CreateCharacterStyle"});
	with (myDialog.dialogColumns.add()){
		staticTexts.add({staticLabel:"Character Style Name:"});
	}
        with (myDialog.dialogColumns.add()){
		var myCharacterStyleNameField = textEditboxes.add({editContents:"myNewCharacterStyle"});
        }
	var myResult = myDialog.show();
	if (myResult == true){
		var myCharacterStyleName = myCharacterStyleNameField.editContents;
		myDialog.destroy();
		myDefineCharacterStyle(myCharacterStyleName);
	}
	else{
		myDialog.destroy;
	}
}
function myDefineCharacterStyle(myCharacterStyleName){
	var myCharacterStyle;
	var myDocument = app.activeDocument;
	//Create the character style if it does not already exist.
	myCharacterStyle = myDocument.characterStyles.item(myCharacterStyleName);
	try{
		myCharacterStyle.name;
	}
	catch (myError){
		myCharacterStyle = myDocument.characterStyles.add({name:myCharacterStyleName});
	}
	var mySourceText = app.selection[0];
	myCharacterStyle.appliedFont = mySourceText.appliedFont;
	myCharacterStyle.fontStyle = mySourceText.fontStyle;
	myCharacterStyle.pointSize = mySourceText.pointSize;
	myCharacterStyle.leading = mySourceText.leading;
	myCharacterStyle.appliedLanguage = mySourceText.appliedLanguage;
	myCharacterStyle.kerningMethod = mySourceText.kerningMethod;
	myCharacterStyle.tracking = mySourceText.tracking;
	myCharacterStyle.capitalization = mySourceText.capitalization;
	myCharacterStyle.position = mySourceText.position;
	myCharacterStyle.ligatures = mySourceText.ligatures;
	myCharacterStyle.noBreak = mySourceText.noBreak;
	myCharacterStyle.horizontalScale = mySourceText.horizontalScale;
	myCharacterStyle.verticalScale = mySourceText.verticalScale;
	myCharacterStyle.baselineShift = mySourceText.baselineShift;
	myCharacterStyle.skew = mySourceText.skew;
	myCharacterStyle.fillColor = mySourceText.fillColor;
	myCharacterStyle.fillTint = mySourceText.fillTint;
	myCharacterStyle.strokeTint = mySourceText.strokeTint;
	myCharacterStyle.strokeWeight = mySourceText.strokeWeight;
	myCharacterStyle.overprintStroke = mySourceText.overprintStroke;
	myCharacterStyle.overprintFill = mySourceText.overprintFill;
	myCharacterStyle.otfFigureStyle = mySourceText.otfFigureStyle;
	myCharacterStyle.otfOrdinal = mySourceText.otfOrdinal;
	myCharacterStyle.otfFraction = mySourceText.otfFraction;
	myCharacterStyle.otfDiscretionaryLigature = mySourceText.otfDiscretionaryLigature;
	myCharacterStyle.otfTitling = mySourceText.otfTitling;
	myCharacterStyle.otfContextualAlternate = mySourceText.otfContextualAlternate;
	myCharacterStyle.otfSwash = mySourceText.otfSwash;
	myCharacterStyle.otfSlashedZero = mySourceText.otfSlashedZero;
	myCharacterStyle.otfHistorical = mySourceText.otfHistorical;
	myCharacterStyle.otfStylisticSets = mySourceText.otfStylisticSets;
	myCharacterStyle.strikeThru = mySourceText.strikeThru;
	if(mySourceText.strikeThru == true){
		myCharacterStyle.strikeThroughColor = mySourceText.strikeThroughColor;
		myCharacterStyle.strikeThroughGapColor = mySourceText.strikeThroughGapColor;
		myCharacterStyle.strikeThroughGapOverprint = mySourceText.strikeThroughGapOverprint;
		myCharacterStyle.strikeThroughGapTint = mySourceText.strikeThroughGapTint;
		myCharacterStyle.strikeThroughOffset = mySourceText.strikeThroughOffset;
		myCharacterStyle.strikeThroughOverprint = mySourceText.strikeThroughOverprint;
		myCharacterStyle.strikeThroughTint = mySourceText.strikeThroughTint;
		myCharacterStyle.strikeThroughType = mySourceText.strikeThroughType;
		myCharacterStyle.strikeThroughWeight = mySourceText.strikeThroughWeight;
	}
	myCharacterStyle.strokeColor = mySourceText.strokeColor;
	myCharacterStyle.strokeTint = mySourceText.strokeTint;
	myCharacterStyle.strokeWeight = mySourceText.strokeWeight;
	myCharacterStyle.tracking = mySourceText.tracking;
	myCharacterStyle.underline = mySourceText.underline;
	if(mySourceText.underline == true){
		myCharacterStyle.underlineColor = mySourceText.underlineColor;
		myCharacterStyle.underlineGapColor = mySourceText.underlineGapColor;
		myCharacterStyle.underlineGapOverprint = mySourceText.underlineGapOverprint;
		myCharacterStyle.underlineGapTint = mySourceText.underlineGapTint;
	        myCharacterStyle.underlineOffset = mySourceText.underlineOffset;
		myCharacterStyle.underlineOverprint = mySourceText.underlineOverprint;
		myCharacterStyle.underlineTint = mySourceText.underlineTint;
		myCharacterStyle.underlineType = mySourceText.underlineType;
		myCharacterStyle.underlineWeight = mySourceText.underlineWeight;
	}
	myCharacterStyle.verticalScale = mySourceText.verticalScale;
}

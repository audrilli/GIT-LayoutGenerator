﻿//RemoveStyle.jsx
//An InCopy JavaScript
//
//Shows how to remove a paragraph style.
main();
function main(){
	mySetup();
	mySnippet();
	myTeardown();
}
function mySetup(){
	var myParagraphStyleA, myParagraphStyleB, myName, myColor;
	//Create an example document.
	var myDocument = app.documents.add();
	var myStory = myDocument.stories.item(0);
	var myTextFrame = myStory.textContainers[0];
	//Fill the text frame with placeholder text.
	myTextFrame.contents = TextFrameContents.placeholderText;
	//Add a color.
	try{
		myColor = myDocument.colors.item("Red");
		//If the paragraph style does not exist, trying to get its name will generate an error.
		myName = myColor.name;
	}
	catch (myError){
		//The paragraph style did not exist, so create it.
		myColor = myDocument.colors.add({name:"Red", colorMode:ColorModel.process, colorValue:[0,100,100,0]});
	}
	//Create a paragraph style named "myParagraphStyleA" if no 
	//style by that name already exists.
	try{
		myParagraphStyleA = myDocument.paragraphStyles.item("myParagraphStyleA");
		//If the paragraph style does not exist, trying to get its name will generate an error.
		myName = myParagraphStyleA.name;
	}
	catch (myError){
		//The paragraph style did not exist, so create it.
		myParagraphStyleA = myDocument.paragraphStyles.add({name:"myParagraphStyleA"});
	}
	//At this point, the variable myParagraphStyle contains a reference to a paragraph 
	//style object, which you can now use to specify formatting.
	//Create another paragraph style.
	try{
		myParagraphStyleB = myDocument.paragraphStyles.item("myParagraphStyleB");
		//If the paragraph style does not exist, trying to get its name will generate an error.
		myName = myParagraphStyleB.name;
	}
	catch (myError){
		//The paragraph style did not exist, so create it.
		myParagraphStyleB = myDocument.paragraphStyles.add({name:"myParagraphStyleB"});
	}
	//Apply myParagraphStyleA to random paragraphs in the story (using the anyItem method).
	for(var myCounter = 0; myCounter < 6; myCounter ++){
		myTextFrame.parentStory.paragraphs.anyItem().applyParagraphStyle(myParagraphStyleA, true);
	}
	myParagraphStyleB.fillColor = myColor;
}
function mySnippet(){
	//<fragment>
	var myDocument = app.documents.item(0);
	var myParagraphStyleA = myDocument.paragraphStyles.item("myParagraphStyleA");
	//Remove the paragraph style myParagraphStyleA and replace with myParagraphStyleB.
	myParagraphStyleA.remove(myDocument.paragraphStyles.item("myParagraphStyleB"));
	//</fragment>
}
function myTeardown(){
}
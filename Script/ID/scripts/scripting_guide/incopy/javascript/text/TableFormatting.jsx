﻿//TableFormatting.jsx
//An InCopy JavaScript
//
//Shows how to format table cells.
//
main();
function main(){
	mySetup();
	mySnippet();
	myTeardown();
}
function mySetup(){
	var myDocument = app.documents.add();
	//Add colors.
	myAddColor(myDocument, "DGC1_446a", ColorModel.process, [0, 100, 0, 50]);
	myAddColor(myDocument, "DGC1_446b", ColorModel.process, [100, 0, 50, 0]);
	//Create a text frame on page 1.
	var myStory = myDocument.stories.item(0);
	var myString = "Head 1\tHead 2\tHead 3\r1a\t1b\t1c\r2a\t2b\t2c\r3a\t3b\t3c";
	myStory.contents = myString;
	myStory.texts.item(0).convertToTable();
}
function mySnippet(){
	//<fragment>
	var myDocument = app.documents.item(0);
	var myTable = myDocument.stories.item(0).tables.item(0);
	//Convert the first row to a header row.
	myTable.rows.item(0).rowType = RowTypes.headerRow;
	//Use a reference to a swatch, rather than to a color.
	myTable.rows.item(0).fillColor = myDocument.swatches.item("DGC1_446b");
	myTable.rows.item(0).fillTint = 40;
	myTable.rows.item(1).fillColor = myDocument.swatches.item("DGC1_446a");
	myTable.rows.item(1).fillTint = 40;
	myTable.rows.item(2).fillColor = myDocument.swatches.item("DGC1_446a");
	myTable.rows.item(2).fillTint = 20;
	myTable.rows.item(3).fillColor = myDocument.swatches.item("DGC1_446a");
	myTable.rows.item(3).fillTint = 40;
	//Use everyItem to set the formatting of multiple cells at once.
	myTable.cells.everyItem().topEdgeStrokeColor = myDocument.swatches.item("DGC1_446b");
	myTable.cells.everyItem().topEdgeStrokeWeight = 1;
	myTable.cells.everyItem().bottomEdgeStrokeColor = myDocument.swatches.item("DGC1_446b");
	myTable.cells.everyItem().bottomEdgeStrokeWeight = 1;
	//When you set a cell stroke to a swatch, make certain that you also set the stroke weight.
	myTable.cells.everyItem().leftEdgeStrokeColor = myDocument.swatches.item("None");
	myTable.cells.everyItem().leftEdgeStrokeWeight = 0;
	myTable.cells.everyItem().rightEdgeStrokeColor = myDocument.swatches.item("None");
	myTable.cells.everyItem().rightEdgeStrokeWeight = 0;
	//</fragment>
}
function myTeardown(){
}
function myAddColor(myDocument, myColorName, myColorModel, myColorValue){
	try{
		myColor = myDocument.colors.item(myColorName);
		myName = myColor.name;
	}
	catch (myError){
		myColor = myDocument.colors.add();
	}
	myColor.properties = {name:myColorName, model:myColorModel, colorValue:myColorValue};
}
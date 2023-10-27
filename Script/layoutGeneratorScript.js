// Check if there is an active document

if (app.documents.length > 0) {
  var doc = app.activeDocument;
  var diameter = 10;

  // Loop through all the pages in the document
  for (var i = 0; i < doc.pages.length; i++) {

    var page = doc.pages[i];
//Diameter
    
   

    // Calculate the middle of the page
    var middleX = page.bounds[1] + (page.bounds[3] - page.bounds[1]) / 2;
    var middleY = page.bounds[0] + (page.bounds[2] - page.bounds[0]) / 2;

  

  // Add a circle to the middle of the page
  var circle = page.ovals.add(undefined, undefined);
  circle.geometricBounds = [
    middleY - diameter / 2,
    middleX - diameter / 2,
    middleY + diameter / 2,
    middleX + diameter / 2,
  ];
  diameter += 1;
  
	doc.pages.item(i).guides.add({location:middleY, orientation:HorizontalOrVertical.horizontal});
  doc.pages.item(i).guides.add({location:(middleY-(diameter)/2), orientation:HorizontalOrVertical.horizontal});
	

    
    // Add a guide at the middle of the page
    var guideX = page.guides.add(undefined,undefined);
    guideX.location = middleX;

    
  }
} else {
  alert(
    "No open document found. Please open a document before running this script."
  );
}

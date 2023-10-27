// Check if there is an active document

if (app.documents.length > 0) {
  var doc = app.activeDocument;
  var diameter = 10;
  var pathHeight = 0.25;

  // Loop through all the pages in the document
  for (var i = 0; i < doc.pages.length; i++) {
    var page = doc.pages[i];

    // Calculate the middle of the page
    var middleX = page.bounds[1] + (page.bounds[3] - page.bounds[1]) / 2;
    var middleY = page.bounds[0] + (page.bounds[2] - page.bounds[0]) / 2;

   doc.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.points;
	doc.viewPreferences.verticalMeasurementUnits = MeasurementUnits.points;
	doc.pages.item(i).guides.add({location:middleY, orientation:HorizontalOrVertical.horizontal});
	

    // Add a circle to the middle of the page
    var circle = page.ovals.add(undefined, undefined);
    circle.geometricBounds = [
      middleY - diameter / 2,
      middleX - diameter / 2,
      middleY + diameter / 2,
      middleX + diameter / 2,
    ];

    // Add a guide at the middle of the page
    var guideX = page.guides.add(undefined,undefined);
    guideX.location = middleX;

    // Add a horizontal guide to the middle of the page
    // var path = page.textFrames.add();
    // path.geometricBounds = [middleY - pathHeight / 2, 0, middleY + pathHeight / 2, page.bounds[3]];
    // path.fillColor = "Black"; // Change this to set the path's color
  
    // alert(middleY);
    // alert(middleX);

    // Increase the diameter for the next page
    diameter += 1;
  }
} else {
  alert(
    "No open document found. Please open a document before running this script."
  );
}

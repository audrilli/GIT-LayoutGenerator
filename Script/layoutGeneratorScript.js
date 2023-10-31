// Check if there is an active document

if (app.documents.length > 0) {
  var doc = app.activeDocument;
  var diameter = 10;

  // Loop through all the pages in the document
  for (var i = 0; i < doc.pages.length; i++) {
    var page = doc.pages[i];

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

    //horizontal guides
    doc.pages.item(i).guides.add({
      location: middleY,
      orientation: HorizontalOrVertical.horizontal,
    });
    doc.pages.item(i).guides.add({
      location: middleY - diameter / 2,
      orientation: HorizontalOrVertical.horizontal,
    });
    doc.pages.item(i).guides.add({
      location: middleY + diameter / 2,
      orientation: HorizontalOrVertical.horizontal,
    });

    //vertical guides
    doc.pages.item(i).guides.add({
      location: middleX,
      orientation: HorizontalOrVertical.vertical,
    });
    doc.pages.item(i).guides.add({
      location: middleX - diameter / 2,
      orientation: HorizontalOrVertical.vertical,
    });
    doc.pages.item(i).guides.add({
      location: middleX + diameter / 2,
      orientation: HorizontalOrVertical.vertical,
    });

    // Grid
    MyGrid();
  }
} else {
  alert(
    "No open document found. Please open a document before running this script."
  );
}
function MyGrid() {
  //calculate the marigns of the page
  var gutterWidth = diameter;

  var leftMargin = page.marginPreferences.left;
  var rightMargin = page.marginPreferences.right;

  var topMargin = page.marginPreferences.top;
  var bottomMargin = page.marginPreferences.bottom;
  

  // Calculate the number of guides based on the gutter width
  var numberOfGuides = Math.floor(
    (page.bounds[3] - leftMargin - rightMargin) / gutterWidth
  );
  var numHorizontalGuides = Math.floor(
    (page.bounds[2] - topMargin - bottomMargin) / gutterWidth
  );
  // alert(numHorizontalGuides);
  

  // Calculate the starting position for the first guide
  var startX = page.bounds[1] + leftMargin;
  +(gutterWidth / 2);
  var startY = page.bounds[0] + topMargin + gutterWidth / 2;
  // alert(startY);

  // Add vertical guides with the specified gutter
  for (var j = 0; j < numberOfGuides; j++) {
    doc.pages.item(i).guides.add({
      location: startX + j * gutterWidth,
      orientation: HorizontalOrVertical.vertical,
    });
  }
  //Add horizontal guides with specified gutter
  for (var k = 0; k < numHorizontalGuides; k++) {
    doc.pages.item(i).guides.add({
      location: startY + k * gutterWidth,
      orientation: HorizontalOrVertical.horizontal,
    });
  }
}


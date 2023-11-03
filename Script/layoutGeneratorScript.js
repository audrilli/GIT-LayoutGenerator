// Check if there is an active document

if (app.documents.length > 0) {
  var doc = app.activeDocument;
  var diameter = 10;

  // Define the CMYK fill color values for the squares
  var initialCmykColor = [0, 0, 0, 0]; // Black color in CMYK
  var finalCmykColor = [0, 0, 0, 100];    // White color in CMYK

  // Create color swatches for the colors
  var initialFillColor = doc.colors.add();
  initialFillColor.model = ColorModel.process;
  initialFillColor.space = ColorSpace.CMYK;
  initialFillColor.colorValue = initialCmykColor;

  // Loop through all the pages in the document
  for (var i = 0; i < doc.pages.length; i++) {
    var page = doc.pages[i];

    // Calculate the middle of the page
    var middleX = page.bounds[1] + (page.bounds[3] - page.bounds[1]) / 2;
    var middleY = page.bounds[0] + (page.bounds[2] - page.bounds[0]) / 2;

    // Calculate the fill color by interpolating between initial and final colors
    var interpolationFactor = i / (doc.pages.length - 1);
    var cmykColor = [];
    for (var j = 0; j < 4; j++) {
      cmykColor[j] = initialCmykColor[j] + (finalCmykColor[j] - initialCmykColor[j]) * interpolationFactor;
    }

    // Create a color swatch for the calculated color
    var fillColor = doc.colors.add();
    fillColor.model = ColorModel.process;
    fillColor.space = ColorSpace.CMYK;
    fillColor.colorValue = cmykColor;

    // Add a circle to the middle of the page
    var circle = page.ovals.add(undefined, undefined);
    circle.geometricBounds = [
      middleY - diameter / 2,
      middleX - diameter / 2,
      middleY + diameter / 2,
      middleX + diameter / 2,
    ];
    circle.fillColor = fillColor;
    circle.strokeWeight = 0;
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

  // var topMargin = page.marginPreferences.top;
  // var bottomMargin = page.marginPreferences.bottom;
  

  // Calculate the number of guides based on the gutter width
  var numberOfGuides = Math.floor((page.bounds[3] - leftMargin - rightMargin) / gutterWidth);

  // var numHorizontalGuides = Math.floor(
  //   (page.bounds[2] - topMargin - bottomMargin) / gutterWidth
  // );
  // alert(numHorizontalGuides);
  

  // Calculate the starting position for the first guide
  var startX = page.bounds[1] + leftMargin;
  var endX = page.bounds[1] + page.bounds[3] - rightMargin;
  // var startY = page.bounds[0] + topMargin + gutterWidth / 2;
  // alert(startY);

  // Add the first guide on the margin
  var firstGuide = page.guides.add(undefined, undefined);
  firstGuide.location = startX;

  // Add the last guide on the margin
  var lastGuide = page.guides.add(undefined, undefined);
  lastGuide.location = endX;

  // Calculate the spacing between the remaining guides
  var spacing = (endX - startX) / (numberOfGuides - 1);

  // Add vertical guides with the specified gutter
  for (var j = 1; j < numberOfGuides - 1; j++) {
    var guide = page.guides.add(undefined, undefined);
    guide.location = startX + j * spacing;
  }
  //Add horizontal guides with specified gutter
  // for (var k = 0; k < numHorizontalGuides; k++) {
  //   doc.pages.item(i).guides.add({
  //     location: startY + k * gutterWidth,
  //     orientation: HorizontalOrVertical.horizontal,
  //   });
  // }
}


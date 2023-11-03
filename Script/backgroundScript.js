// // Check if there is an active document
// if (app.documents.length > 0) {
//   var doc = app.activeDocument;

//   // Define the square's size (same as the page size)
//   var squareWidth = doc.documentPreferences.pageWidth + (doc.documentPreferences.documentBleedInsideOrLeftOffset);
//   var squareHeight = doc.documentPreferences.pageHeight + (2 * doc.documentPreferences.documentBleedTopOffset);

//    // Define the square's fill color (cmyk input)
//    var cmykColor = [80,70,70,100];
//    var fillColor = doc.colors.add();
//    fillColor.model = ColorModel.process;
//    fillColor.space = ColorSpace.CMYK;
//    fillColor.colorValue = cmykColor;



//   // Loop through all the pages in the document
//   for (var i = 0; i < doc.pages.length; i++) {
//     var page = doc.pages[i];

     

//     // Add a rectangle (square) to the back of the page
//     var square = page.rectangles.add();
//     square.geometricBounds = [0-doc.documentPreferences.documentBleedInsideOrLeftOffset, 0-doc.documentPreferences.documentBleedTopOffset, squareHeight, squareWidth];
//     square.fillColor = fillColor;
//     square.fillTint = 100-(300-i); // Solid fill

//     // Send the square to the back of the stacking order
//     // square.move(LocationOptions.AT_END);
//   }
// } else {
//   alert("No open document found. Please open a document before running this script.");
//}

if (app.documents.length > 0) {
    var doc = app.activeDocument;
  
    // Define the square sizes (including the bleed)
    var evenPageSquareWidth = doc.documentPreferences.pageWidth + (1 * doc.documentPreferences.documentBleedInsideOrLeftOffset);
    var evenPageSquareHeight = doc.documentPreferences.pageHeight + (1 * doc.documentPreferences.documentBleedTopOffset);
  
    var oddPageSquareWidth = doc.documentPreferences.pageWidth ;
    var oddPageSquareHeight = doc.documentPreferences.pageHeight + (1 * doc.documentPreferences.documentBleedTopOffset);
  
    // Define the CMYK fill color values for the squares
    var initialCmykColor = [0, 0, 0, 100]; // Black color in CMYK
    var finalCmykColor = [0, 0, 0, 0];    // White color in CMYK
  
    // Create color swatches for the colors
    var initialFillColor = doc.colors.add();
    initialFillColor.model = ColorModel.process;
    initialFillColor.space = ColorSpace.CMYK;
    initialFillColor.colorValue = initialCmykColor;
  
  
    // var fillColorOdd = doc.colors.add();
    // fillColorOdd.model = ColorModel.process;
    // fillColorOdd.space = ColorSpace.CMYK;
    // fillColorOdd.colorValue = cmykColorOdd;
  
    // Loop through all the pages in the document
    for (var i = 0; i < doc.pages.length; i++) {
      var page = doc.pages[i];

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
  
      // Create a rectangle based on whether the page number is even or odd
      var square = page.rectangles.add();
      if (i % 2 === 0) {
        // odd page, use evenPageSquareSize and evenPageFillColor
        square.geometricBounds = [0-doc.documentPreferences.documentBleedTopOffset,0, evenPageSquareHeight, evenPageSquareWidth];
        square.fillColor = fillColor;
        square.strokeWeight = 0; // No stroke
      } else {
        // even page, use oddPageSquareSize and oddPageFillColor
        square.geometricBounds = [0-doc.documentPreferences.documentBleedInsideOrLeftOffset, 0-doc.documentPreferences.documentBleedTopOffset, oddPageSquareHeight, oddPageSquareWidth];
        square.fillColor = fillColor;
        square.strokeWeight = 0; // No stroke
      }
      square.fillTint = 100 // Solid fill
  
      // Send the square to the back of the stacking order
    //   square.move(LocationOptions.atBeginning);
    }
  } else {
    alert("No open document found. Please open a document before running this script.");
  }
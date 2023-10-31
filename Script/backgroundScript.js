// Check if there is an active document
if (app.documents.length > 0) {
  var doc = app.activeDocument;

  // Define the square's size (same as the page size)
  var squareSize = [doc.documentPreferences.pageWidth, doc.documentPreferences.pageHeight];

  // Define the square's fill color
  var fillColor = "Black"; // Change this value to set the square's fill color

  // Loop through all the pages in the document
  for (var i = 0; i < doc.pages.length; i++) {
    var page = doc.pages[i];

    // Add a rectangle (square) to the back of the page
    var square = page.rectangles.add();
    square.geometricBounds = [0, 0, squareSize[1], squareSize[0]]; // Swap the dimensions to match the page size
    square.fillColor = doc.colors.item(fillColor);
    square.fillTint = 100; // Solid fill

    // Send the square to the back of the stacking order
    // square.move(LocationOptions.AT_END);
  }
} else {
  alert("No open document found. Please open a document before running this script.");
}
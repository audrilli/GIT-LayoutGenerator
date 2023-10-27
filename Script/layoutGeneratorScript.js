// Check if there is an active document
if (app.documents.length > 0) {
  var doc = app.activeDocument;

  // Loop through all the pages in the document
  for (var i = 0; i < doc.pages.length; i++) {
    var page = doc.pages[i];

    // Calculate the middle of the page
    var middleX = page.bounds[1] + (page.bounds[3] - page.bounds[1]) / 2;

    // Add a guide at the middle of the page
    var guide = page.guides.add(undefined, undefined);
    guide.location = middleX;
  }
} else {
  alert("No open document found. Please open a document before running this script.");
}
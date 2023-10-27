// Check if there is an active document
if (app.documents.length > 0) {
    var doc = app.activeDocument;
  
    // Loop through all the pages in the document
    for (var i = 0; i < doc.pages.length; i++) {
      var page = doc.pages[i];
  
      // Calculate the middle of the page
      var middleX = page.bounds[1] + (page.bounds[3] - page.bounds[1]) / 2;
      var middleY = page.bounds[0] + (page.bounds[2] - page.bounds[0]) / 2;
  
      // Add a horizontal guide to the middle of the page
      var horizontalGuide = page.guides.add();
      horizontalGuide.location = middleY;
  
      // Add a vertical guide to the middle of the page
      var rulerGuide = doc.pages.item(i).rulerGuides.add(undefined);
    rulerGuide.location = middleY;
    }
  } else {
    alert("No open document found. Please open a document before running this script.");
  }
﻿//MakeDocumentWithParameters.jsx//An InDesign JavaScript////Creates a new document without showing the document window.main();function main(){    mySetup();    mySnippet();    myTeardown();}//<setup>function mySetup(){}//</setup>//<snippet>function mySnippet(){    //![Create a document with parameters.]    //Creates a new document without showing the document window.    //The parameter (showingWindow) controls the visibility of the document.    //Hidden documents are not minimized, and will not appear until you add    //a new window to the document.    var myDocument = app.documents.add(false);    //To show the window:    //var myLayoutWindow = myDocument.windows.add();    //![Create a document with parameters.]}//</snippet>//<teardown>function myTeardown(){}//</teardown>
﻿#targetengine "session"
//MultipleEventListeners,jsx
//An InCopy JavaScript
//
//Shows that an event can have multiple event listeners associated with it.
#targetengine "session"
main();
function main(){
    mySetup();
    mySnippet();
    myTeardown();
}
function mySetup(){
    var myDocument = app.documents.add();
}
function mySnippet(){
    //<fragment>
	var myApplicationEventListener = app.eventListeners.add("beforeImport", myEventInfo, false);
	var myDocumentEventListener = app.documents.item(0).eventListeners.add("beforeImport", myEventInfo, false);
    //</fragment>
}
function myTeardown(){
}
//<fragment>
function myEventInfo(myEvent){
	var myString = "Current Target: " + myEvent.currentTarget.name;
	alert(myString);
}
//</fragment>
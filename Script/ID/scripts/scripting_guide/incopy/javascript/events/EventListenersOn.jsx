﻿//EventListenersOn.jsx
//An InCopy JavaScript
//
//Installs event listeners for all supported events; displays a
//message when each event occurs.
#targetengine "session"
main();
function main(){
    mySetup();
    mySnippet();
    myTeardown();
}
function mySetup(){
}
function mySnippet(){
    //<fragment>
	app.scriptPreferences.version = 6.0;
	var myEventNames = [
		"beforeQuit", "afterQuit",
		"beforeNew", "afterNew",
		"beforeOpen", "afterOpen",
		"beforeClose", "afterClose",
		"beforeSave", "afterSave",
		"beforeSaveAs", "afterSaveAs",
		"beforeSaveACopy", "afterSaveACopy",
		"beforeRevert", "afterRevert",
		"beforePrint", "afterPrint",
		"beforeExport", "afterExport",
		"beforeImport", "afterImport"
	] ;
	for (var myCounter = 0; myCounter < myEventNames.length; myCounter ++){
		app.addEventListener(myEventNames[myCounter], myEventInfo, false);
	}
    //</fragment>
}
function myTeardown(){
}
//<fragment>
function myEventInfo(myEvent){
	var myString = "Handling Event: " +myEvent.eventType;
	myString += "\r\rTarget: " + myEvent.target + " " +myEvent.target.name;
	myString += "\rCurrent: " +myEvent.currentTarget + " " + myEvent.currentTarget.name;
	myString += "\r\rPhase: " + myGetPhaseName(myEvent.eventPhase );
	myString += "\rCaptures: " +myEvent.captures;
	myString += "\rBubbles: " + myEvent.bubbles;
	myString += "\r\rCancelable: " +myEvent.cancelable;
	myString += "\rStopped: " +myEvent.propagationStopped;
	myString += "\rCanceled: " +myEvent.defaultPrevented;
	myString += "\r\rTime: " +myEvent.timeStamp;
	alert(myString);
	function myGetPhaseName(myPhase){
		switch(myPhase){
			case EventPhases.atTarget:
				myPhaseName = "At Target";
				break;
			case EventPhases.bubblingPhase:
				myPhaseName = "Bubbling";
				break;
			case EventPhases.capturingPhase:
				myPhaseName = "Capturing";
				break;
			case EventPhases.done:
				myPhaseName = "Done";
				break;
			case EventPhases.notDispatching:
				myPhaseName = "Not Dispatching";
				break;			
		}
		return myPhaseName;
	}
}
//</fragment>
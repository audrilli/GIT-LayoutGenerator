﻿//AddEventListener.jsx//An InDesign JavaScript////Creates a simple event listener.#targetengine "session"main();function main(){    mySetup();    mySnippet();    myTeardown();}function mySetup(){}function mySnippet(){    //![Add event listener.]	var myEventListener = app.addEventListener("afterNew", myDisplayEventType);    //![Add event listener.]}function myTeardown(){}//![Add event listener - functions.]function myDisplayEventType(myEvent){	alert("This event is the " + myEvent.eventType + " event.");}//![Add event listener - functions.]
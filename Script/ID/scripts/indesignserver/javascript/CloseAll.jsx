﻿//CloseAll.jsx
//An InDesign Server JavaScript
//Closes all open documents without saving.
for(var myCounter = app.documents.length; myCounter > 0; myCounter--){
	app.documents.item(myCounter-1).close(SaveOptions.no);
}
Rem ResetMeasurementUnits.vbs
Rem An InDesign VBScript
Rem
Rem Shows how to change, then reset a document's measurement units.
main
Function main()
	Set myInDesign = CreateObject("InDesign.Application.2024")
	mySetup myInDesign
	mySnippet myInDesign
	myTeardown myInDesign
End Function
Function mySetup(myInDesign)
	myInDesign.Documents.Add
End Function
Function mySnippet(myInDesign)
	Rem ![Reset measurement units.]
	Set myDocument = myInDesign.Documents.Item(1)
	With myDocument.ViewPreferences
		myOldXUnits = .HorizontalMeasurementUnits
		myOldYUnits = .VerticalMeasurementUnits
		.HorizontalMeasurementUnits = idMeasurementUnits.idPoints
		.VerticalMeasurementUnits = idMeasurementUnits.idPoints
	End With
	Rem At this point, you can perform any series of script actions that 
	Rem depend on the measurement units you've set. At the end of the 
	Rem script, reset the units to their original state.
	With myDocument.ViewPreferences
		.HorizontalMeasurementUnits = myOldXUnits
		.VerticalMeasurementUnits = myOldYUnits
	End With
	Rem ![Reset measurement units.]
End Function
Function myTeardown(myInDesign)
End Function
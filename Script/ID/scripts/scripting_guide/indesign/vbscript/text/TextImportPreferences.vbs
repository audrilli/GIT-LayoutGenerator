Rem TextImportPreferences.vbs
Rem An InDesign VBScript
Rem
Rem Sets the text import filter preferences.
main
Function main()
	Set myInDesign = CreateObject("InDesign.Application.2024")
	mySetup myInDesign
	mySnippet myInDesign
	myTeardown myInDesign
End Function
Function mySetup(myInDesign)
End Function
Function mySnippet(myInDesign)
	Rem ![Text import preferences.]
	With myInDesign.TextImportPreferences
		Rem Options for characterSet: idTextImportCharacterSet
		.CharacterSet = idTextImportCharacterSet.idUTF8
		.ConvertSpacesIntoTabs = True
		.SpacesIntoTabsCount = 3
		Rem Dictionary can take many values, such as French, Italian.
		.Dictionary = "English: USA"
		Rem platform options: idImportPlatform
		.Platform = idImportPlatform.idPC
		.StripReturnsBetweenLines = True
		.StripReturnsBetweenParagraphs = True
		.UseTypographersQuotes = True
	End With
	Rem ![Text import preferences.]
End Function
Function myTeardown(myInDesign)
End Function
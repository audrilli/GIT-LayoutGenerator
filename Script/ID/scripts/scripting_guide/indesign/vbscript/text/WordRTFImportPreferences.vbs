Rem WordRTFImportPreferences.vbs
Rem An InDesign VBScript
Rem
Rem Sets the Word/RTF import filter preferences.
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
	Set myInDesign = CreateObject("InDesign.Application.2024")
	Rem ![Word and RTF import preferences.]
	With myInDesign.WordRTFImportPreferences
		Rem convertPageBreaks property can be:
		Rem idConvertPageBreaks.idColumnBreak
		Rem idConvertPageBreaks.idNone
		Rem idConvertPageBreaks.idPageBreak
		.ConvertPageBreaks = idConvertPageBreaks.idNone
		Rem convertTablesTo property can be:
		Rem idConvertTablesOptions.idUnformattedTabbedText
		Rem idConvertTablesOptions.idUnformattedTable
		.ConvertTablesTo = idConvertTablesOptions.idUnformattedTable
		.ImportEndnotes = True
		.ImportFootnotes = True
		.ImportIndex = True
		.ImportTOC = True
		.ImportUnusedStyles = False
		.PreserveGraphics = False
		.PreserveLocalOverrides = False
		.PreserveTrackChanges = False
		.RemoveFormatting = False
		Rem resolveCharacterStyleClash and resolveParagraphStyleClash properties can be:
		Rem idResolveStyleClash.idResolveClashAutoRename
		Rem idResolveStyleClash.iduseExisting
		Rem idResolveStyleClash.iduseNew
		.ResolveCharacterStyleClash = idResolveStyleClash.idResolveClashUseExisting 
		.ResolveParagraphStyleClash = idResolveStyleClash.idResolveClashUseExisting 
		.UseTypographersQuotes = True
	End With
	Rem ![Word and RTF import preferences.]
End Function
Function myTeardown(myInDesign)
End Function
--ExportPDFWithPreset.applescript
--An InDesign AppleScript
--
--Shows how to set PDF export options before exporting.
main()
on main()
	mySetup()
	mySnippet()
	myTeardown()
end main
on mySetup()
	--Creates a new document.
	tell application "Adobe InDesign 2024"
		set myDocument to make document
		set myDesktopFolder to path to desktop as string
		set myFile to myDesktopFolder & "ExportPDFWithPreset.indd"
		tell myDocument
			set pages per document of document preferences to 6
			set facing pages of document preferences to false
			set myPageHeight to page height of document preferences
			set myPageWidth to page width of document preferences
			--Create a single-page master spread.
			tell master spread 1
				repeat while (count of pages) > 1
					delete page -1
				end repeat
				tell page 1
					set myTextFrame to make text frame with properties {geometric bounds:{0, 0, myPageHeight, myPageWidth}, contents:auto page number}
				end tell
				set vertical justification of text frame preferences of myTextFrame to center align
				set justification of paragraph 1 of myTextFrame to center align
				set point size of character 1 of myTextFrame to 72
			end tell
			set myDocument to save to myFile
		end tell
	end tell
end mySetup
on mySnippet()
	tell application "Adobe InDesign 2024"
		set myDocument to document 1
		--![Export PDF with preset.]
		--Given a document "myDocument," export a PDF to the desktop.
		set myDesktopFolder to path to desktop as string
		set myFile to myDesktopFolder & "ExportPDFWithPreset.pdf"
		set myPreset to "[High Quality Print]"
		tell myDocument
			export format PDF type to myFile using myPreset without showing options
		end tell
		--![Export PDF with preset.]
	end tell
end mySnippet
on myTeardown()
end myTeardown

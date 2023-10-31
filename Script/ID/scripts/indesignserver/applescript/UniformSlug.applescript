--UniformSlug.applescript
--An InDesign Server AppleScript
--Shows how to use the uniform size property of the document slug.
tell application "InDesignServer"
	--Create a new document.
	set myDocument to make document
	--The bleed properties belong to the document preferences object.
	tell document preferences of myDocument
		--Slug
		set slug top offset to "3p"
		set document slug uniform size to true
	end tell
	--Save the file (fill in a valid file path on your system).
	tell application "Finder"
		set myFile to (startup disk as string) & "ServerTestFiles:myTestDocument.indd"
	end tell
	save document 1 to myFile
	--Close the document
	close document 1
end tell

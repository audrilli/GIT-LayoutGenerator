--Markup.applescript
--An InDesign AppleScript
--
--Shows how to associate an existing text object with an XML element.
main()
on main()
	mySetup()
	mySnippet()
	myTeardown()
end main
on mySetup()
	tell application "Adobe InDesign 2024"
		set myDocument to make document
		tell myDocument
			set myXMLTag to make XML tag with properties {name:"myXMLElement"}
			set myRootXMLElement to XML element 1
			set myPage to page 1
			tell myPage
				set myTextFrame to make text frame with properties {geometric bounds:my myGetBounds(myDocument, myPage)}
			end tell
			--Place the XML root element so that you can see the result in the Structure panel.
			tell story 1
				place XML using myRootXMLElement
				set myString to "This is the first paragraph in the story." & return
				set myString to myString & "This is the second paragraph in the story." & return
				set myString to myString & "This is the third paragraph in the story." & return
				set myString to myString & "This is the fourth paragraph in the story." & return
				set contents to myString
			end tell
			tell myRootXMLElement
				set myXMLElement to make XML element with properties {markup tag:myXMLTag}
			end tell
		end tell
	end tell
end mySetup
on mySnippet()
	tell application "Adobe InDesign 2024"
		set myDocument to active document
		--![Markup.]
		tell myDocument
			set myRootXMLElement to XML element 1
			set myXMLElement to XML element 1 of myRootXMLElement
			tell paragraph 3 of story 1
				markup using myXMLElement
			end tell
		end tell
		--![Markup.]
	end tell
end mySnippet
on myTeardown()
end myTeardown
on myGetBounds(myDocument, myPage)
	tell application "Adobe InDesign 2024"
		tell document preferences of myDocument
			set myPageWidth to page width
			set myPageHeight to page height
		end tell
		tell margin preferences of myPage
			if side of myPage is left hand then
				set myX2 to left
				set myX1 to right
			else
				set myX1 to left
				set myX2 to right
			end if
			set myY1 to top
			set myY2 to bottom
		end tell
		set myX2 to myPageWidth - myX2
		set myY2 to myPageHeight - myY2
		return {myY1, myX1, myY2, myX2}
	end tell
end myGetBounds

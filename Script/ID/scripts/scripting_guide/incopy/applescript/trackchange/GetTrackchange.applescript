--GetTrackchange.applescript
--An InCopy AppleScript
--
--Get GetTrackchange from story.

main()
on main()
	mySetup()
	mySnippet()
	myTeardown()
end main
on mySetup()
end mySetup
on mySnippet()
	tell application "Adobe InCopy 2024"
		--<fragment>
		set myDocument to document 1
		tell myDocument
			set myStory to story 1
			tell myStory
				if (track changes) is true then
					set myChangeCounter to count
					set myChange to change 1
				end if
				
			end tell
		end tell
		--</fragment>
	end tell
end mySnippet
on myTeardown()
end myTeardown

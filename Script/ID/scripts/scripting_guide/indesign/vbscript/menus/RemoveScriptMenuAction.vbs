Rem RemoveScriptMenuAction.vbs
Rem An InDesign VBScript
Rem 
Rem Removes the script menu action created by the MakeScriptMenuAction.vbs
Rem script and its associated menu item.
Rem You might have to force InDesign to redraw the menu (by switching
Rem out of the application and back again) to make the menu item disappear.
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
	Rem ![Remove script menu action.]
	On Error Resume Next
	myInDesign.ScriptMenuActions.Item("Display Alert").Delete
	myInDesign.Menus.Item("$ID/Main").Submenus.Item("Script Menu Action").Delete
	On Error Goto 0
	Rem ![Remove script menu action.]
End Function
Function myTeardown(myInDesign)
End Function
Rem CustomizeMenu.vbs
Rem An InDesign VBScript
Rem
Rem Adds a custom menu to the main menu bar. To remove this menu,
Rem run the RemoveCustomMenu.vbs script.
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
	Rem ![Customize menu.]
	Set myMainMenu = myInDesign.Menus.Item("Main")
	Set myTypeMenu = myMainMenu.MenuElements.Item("Type")
	Set myFontMenu = myTypeMenu.MenuElements.Item("Font")
	Set myKozukaMenu = myFontMenu.Submenus.Item("Kozuka Mincho Pro ")
	Set mySpecialFontMenu = myMainMenu.Submenus.Add("Kozuka Mincho Pro")
	For myCounter = 1 To myKozukaMenu.MenuItems.Count
	Set myAssociatedMenuAction = myKozukaMenu.MenuItems.Item(myCounter).AssociatedMenuAction
	mySpecialFontMenu.MenuItems.Add myAssociatedMenuAction
	Next
	Rem ![Customize menu.]
End Function
Function myTeardown(myInDesign)
End Function
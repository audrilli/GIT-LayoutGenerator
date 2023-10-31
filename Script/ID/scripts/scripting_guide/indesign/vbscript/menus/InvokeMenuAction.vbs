Rem InvokeMenuAction.vbs
Rem An InDesign VBScript
Rem
Rem Runs a menu action.
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
   Rem ![Invoke menu action.]
   Rem Get a reference to a menu action.
   Set myMenuAction = myInDesign.MenuActions.Item("$ID/Convert to Note")  
   Rem Run the menu action. The example action will fail if you do not
   Rem have text selected.
   myMenuAction.Invoke
   Rem ![Invoke menu action.]
End Function
Function myTeardown(myInDesign)
End Function
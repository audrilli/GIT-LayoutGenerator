Rem DeletePreflightProfile.vbs
Rem An InDesign VBScript
Rem
Rem Shows how to delete an InDesign preflight profile.

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
	removeProfile myInDesign, "Test"
End Function

Function myTeardown(myInDesign)
End Function

Rem ![Delete preflight profile.]
Function removeProfile(myInDesign, profileName)
	Set myProfiles= myInDesign.PreflightProfiles
	profileCount = myProfiles.Count
	For i = 1 To profileCount
		If (myProfiles.Item(i).Name = profileName) Then
			myProfiles.Item(i).Delete()
		End If
	Next
End Function
Rem ![Delete preflight profile.]

Rem Interpretation.vbs
Rem An InDesign VBScript
Rem 
Rem Set the preferred scripting object model used for the interpretation of results.
Set myInDesign = CreateObject("InDesign.Application.2024")
Rem <fragment>
Rem Set to the 5.0 (CS3) scripting object model
myInDesign.ScriptPreferences.Version = 5.0
Rem </fragment>

﻿//SetTextProperties.jsx
//An InCopy JavaScript
//
//Shows how to set all read/write properties of a text object.
main();
function main(){
	mySetup();
	mySnippet();
	myTeardown();
}
function mySetup(){
}
function mySnippet(){
	//<fragment>
	var myDocument = app.documents.add();
	var myStory = myDocument.stories.item(0);
	myStory.contents = "x";
	var myTextObject = myStory.characters.item(0);
	myTextObject.alignToBaseline = false;
	myTextObject.appliedCharacterStyle = myDocument.characterStyles.item("[None]");
	myTextObject.appliedFont = app.fonts.item("Minion Pro	Regular");
	myTextObject.appliedLanguage = app.languagesWithVendors.item("English: USA");
	myTextObject.appliedNumberingList = myDocument.numberingLists.item("[Default]");
	myTextObject.appliedParagraphStyle = myDocument.paragraphStyles.item("[No Paragraph Style]");
	myTextObject.autoLeading = 120;
	myTextObject.balanceRaggedLines = BalanceLinesStyle.noBalancing;
	myTextObject.baselineShift = 0;
	myTextObject.bulletsAlignment = ListAlignment.leftAlign;
	myTextObject.bulletsAndNumberingListType = ListType.noList;
	myTextObject.bulletsCharacterStyle = myDocument.characterStyles.item("[None]");
	myTextObject.bulletsTextAfter = "^t";
	myTextObject.capitalization = Capitalization.normal;
	myTextObject.composer = "Adobe Paragraph Composer";
	myTextObject.desiredGlyphScaling = 100;
	myTextObject.desiredLetterSpacing = 0;
	myTextObject.desiredWordSpacing = 100;
	myTextObject.dropCapCharacters = 0;
	myTextObject.dropCapLines = 0;
	myTextObject.dropCapStyle = myDocument.characterStyles.item("[None]");
	myTextObject.dropcapDetail = 0;
	myTextObject.fillColor = myDocument.colors.item("Black");
	myTextObject.fillTint = -1;
	myTextObject.firstLineIndent = 0;
	myTextObject.fontStyle = "Regular";
	myTextObject.gradientFillAngle = 0;
	myTextObject.gradientFillLength = -1;
	myTextObject.gradientFillStart = [0,0];
	myTextObject.gradientStrokeAngle = 0;
	myTextObject.gradientStrokeLength = -1;
	myTextObject.gradientStrokeStart = [0,0];
	myTextObject.gridAlignFirstLineOnly = false;
	myTextObject.horizontalScale = 100;
	myTextObject.hyphenWeight = 5;
	myTextObject.hyphenateAcrossColumns = true;
	myTextObject.hyphenateAfterFirst = 2;
	myTextObject.hyphenateBeforeLast = 2;
	myTextObject.hyphenateCapitalizedWords = true;
	myTextObject.hyphenateLadderLimit = 3;
	myTextObject.hyphenateLastWord = true;
	myTextObject.hyphenateWordsLongerThan = 5;
	myTextObject.hyphenation = true;
	myTextObject.hyphenationZone = 3;
	myTextObject.ignoreEdgeAlignment = false;
	myTextObject.justification = Justification.leftAlign;
	myTextObject.keepAllLinesTogether = false;
	myTextObject.keepFirstLines = 2;
	myTextObject.keepLastLines = 2;
	myTextObject.keepLinesTogether = false;
	myTextObject.keepRuleAboveInFrame = false;
	myTextObject.keepWithNext = 0;
	myTextObject.kerningMethod = "Optical";
	//myTextObject.kerningValue = error;
	myTextObject.lastLineIndent = 0;
	myTextObject.leading = 12;
	myTextObject.leftIndent = 0;
	myTextObject.ligatures = true;
	myTextObject.maximumGlyphScaling = 100;
	myTextObject.maximumLetterSpacing = 0;
	myTextObject.maximumWordSpacing = 133;
	myTextObject.minimumGlyphScaling = 100;
	myTextObject.minimumLetterSpacing = 0;
	myTextObject.minimumWordSpacing = 80;
	myTextObject.noBreak = false;
	myTextObject.numberingAlignment = ListAlignment.leftAlign;
	myTextObject.numberingApplyRestartPolicy = true;
	myTextObject.numberingCharacterStyle = myDocument.characterStyles.item("[None]");
	myTextObject.numberingContinue = true;
	myTextObject.numberingExpression = "^#.^t";
	myTextObject.numberingFormat = "1, 2, 3, 4...";
	myTextObject.numberingLevel = 1;
	myTextObject.numberingStartAt = 1;
	myTextObject.otfContextualAlternate = true;
	myTextObject.otfDiscretionaryLigature = false;
	myTextObject.otfFigureStyle = OTFFigureStyle.proportionalLining;
	myTextObject.otfFraction = false;
	myTextObject.otfHistorical = false;
	myTextObject.otfLocale = true;
	myTextObject.otfMark = true;
	myTextObject.otfOrdinal = false;
	myTextObject.otfSlashedZero = false;
	myTextObject.otfStylisticSets = 0;
	myTextObject.otfSwash = false;
	myTextObject.otfTitling = false;
	myTextObject.overprintFill = false;
	myTextObject.overprintStroke = false;
	myTextObject.pointSize = 12;
	myTextObject.position = Position.normal;
	myTextObject.positionalForm = PositionalForms.none;
	myTextObject.rightIndent = 0;
	myTextObject.ruleAbove = false;
	myTextObject.ruleAboveColor = "Text Color";
	myTextObject.ruleAboveGapColor = myDocument.swatches.item("None");
	myTextObject.ruleAboveGapOverprint = false;
	myTextObject.ruleAboveGapTint = -1;
	myTextObject.ruleAboveLeftIndent = 0;
	myTextObject.ruleAboveLineWeight = 1;
	myTextObject.ruleAboveOffset = 0;
	myTextObject.ruleAboveOverprint = false;
	myTextObject.ruleAboveRightIndent = 0;
	myTextObject.ruleAboveTint = -1;
	myTextObject.ruleAboveType = myDocument.strokeStyles.item("Solid");
	myTextObject.ruleAboveWidth = RuleWidth.columnWidth;
	myTextObject.ruleBelow = false;
	myTextObject.ruleBelowColor = "Text Color";
	myTextObject.ruleBelowGapColor = myDocument.swatches.item("None");
	myTextObject.ruleBelowGapOverprint = false;
	myTextObject.ruleBelowGapTint = -1;
	myTextObject.ruleBelowLeftIndent = 0;
	myTextObject.ruleBelowLineWeight = 1;
	myTextObject.ruleBelowOffset = 0;
	myTextObject.ruleBelowOverprint = false;
	myTextObject.ruleBelowRightIndent = 0;
	myTextObject.ruleBelowTint = -1;
	myTextObject.ruleBelowType = myDocument.strokeStyles.item("Solid");
	myTextObject.ruleBelowWidth = RuleWidth.columnWidth;
	myTextObject.singleWordJustification = 1718971500;
	myTextObject.skew = 0;
	myTextObject.spaceAfter = 0;
	myTextObject.spaceBefore = 0;
	myTextObject.startParagraph = 1851945579;
	myTextObject.strikeThroughColor = "Text Color";
	myTextObject.strikeThroughGapColor = myDocument.swatches.item("None");
	myTextObject.strikeThroughGapOverprint = false;
	myTextObject.strikeThroughGapTint = -1;
	myTextObject.strikeThroughOffset = -9999;
	myTextObject.strikeThroughOverprint = false;
	myTextObject.strikeThroughTint = -1;
	myTextObject.strikeThroughType = myDocument.strokeStyles.item("Solid");
	myTextObject.strikeThroughWeight = -9999;
	myTextObject.strikeThru = false;
	myTextObject.strokeColor = myDocument.swatches.item("None");
	myTextObject.strokeTint = -1;
	myTextObject.strokeWeight = 1;
	myTextObject.tracking = 0;
	myTextObject.underline = false;
	myTextObject.underlineColor = "Text Color";
	myTextObject.underlineGapColor = myDocument.swatches.item("None");
	myTextObject.underlineGapOverprint = false;
	myTextObject.underlineGapTint = -1;
	myTextObject.underlineOffset = -9999;
	myTextObject.underlineOverprint = false;
	myTextObject.underlineTint = -1;
	myTextObject.underlineType = myDocument.strokeStyles.item("Solid");
	myTextObject.underlineWeight = -9999;
	myTextObject.verticalScale = 100;
	//</fragment>
}
function myTeardown(){
}
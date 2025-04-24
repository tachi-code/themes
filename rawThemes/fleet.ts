const colors = {
  comment: "#909194",
  strikeThrough: "#A3A5A7",

  black: "#000000",
  blue: "#87C3FF",
  blueLight: "#ADD1DE",
  coral: "#CC7C8A",
  cyan: "#82D2CE",
  cyanDark: "#779E9E",
  lime: "#A8CC7C",
  orange: "#E09B70",
  pink: "#E394DC",
  violet: "#AF9CFF",
  yellow: "#EBC88D",
  white: "#FFFFFF",
  transparent: "#FFFFFF00",

  blue120: "#71A3EF",
  blue110: "#4B8DEC",
  blue100: "#2A7DEB",
  blue90: "#0870E4",
  blue80: "#1868CB",
  blue70: "#1D61BA",
  blue60: "#225090",
  green120: "#69B090",
  green110: "#409D78",
  green90: "#14835E",
  red120: "#F87C88",
  red110: "#EC5D6F",
  red100: "#E1465E",
  red90: "#D73251",
  yellow120: "#CD984D",
  yellow110: "#BD8128",
  yellow90: "#9F680C",

  lightUntint30: "#555558",
  lightTint20: "#E0E1E433",
  lightTint15: "#E0E1E426",
  lightTint10: "#E0E1E41A",
  lightTint8: "#E0E1E414",

  // miniscule color variance is required since style attributes seem to be
  // associated with the color value rather than the individual rules
  neutral140Bold: "#E0E1E3",
  neutral140Italic: "#E0E1E2",
  neutral140: "#E0E1E4",
  neutral110: "#898E94",
  neutral90: "#6E747B",
  neutral70: "#5D636B",
  neutral60: "#4C5157",
  neutral50: "#3E4147",
  neutral40: "#323438",
  neutral30: "#252629",
  neutral20: "#18191B",
  neutral10: "#090909",

  greenTint50: "#14835E80",
  greenTint40: "#14835E66",
  greenTint30: "#14835E50",
  greenTint20: "#14835E33",
  greenTint10: "#14835E1A",
  redTint50: "#D7325180",
  redTint40: "#D7325166",
  redTint30: "#D7325150",
  redTint20: "#D7325133",
  redTint10: "#D732511A",
  blueTint50: "#0870E480",
  blueTint40: "#0870E466",
  blueTint20: "#0870E433",
  blueTint15: "#0870E426",
  blueTint10: "#0870E41A",
  yellowTint50: "#9F680C80",
} as const;

export default {
  $schema: "vscode://schemas/color-theme",
  name: "fleet",
  displayName: "Fleet",
  type: "dark",
  version: "1.0.0",
  colors: {
    "actionBar.toggledBackground": colors.lightTint20,
    "activityBar.activeBackground": colors.neutral30,
    "activityBar.background": "#181818",
    "activityBar.border": colors.neutral40,
    "activityBar.foreground": "#e3e1e3",
    "activityBar.inactiveForeground": "#999899",
    "activityBarBadge.background": colors.blue90,
    "activityBarBadge.foreground": colors.neutral140,
    "badge.background": colors.blue90,
    "badge.foreground": colors.neutral140,
    "breadcrumb.activeSelectionForeground": colors.neutral140,
    "breadcrumb.background": "#181818",
    "breadcrumb.focusForeground": colors.neutral140,
    "breadcrumb.foreground": "#676767",
    "button.background": colors.blue90,
    "button.foreground": colors.neutral140,
    "button.hoverBackground": colors.blue80,
    "button.secondaryBackground": colors.lightTint15,
    "button.secondaryForeground": colors.neutral140,
    "button.secondaryHoverBackground": "#E0E1E42B",
    "checkbox.background": colors.neutral30,
    "checkbox.border": "#4f4f4f",
    "checkbox.foreground": colors.neutral140,
    "commandCenter.activeBackground": colors.neutral30,
    "commandCenter.background": colors.neutral30,
    "commandCenter.foreground": colors.neutral140,
    "commandCenter.border": "#00000000",
    "commandCenter.activeBorder": "#E0E1E41F",
    //"commandCenter.activeForeground": colors.neutral140,
    "debugExceptionWidget.background": colors.neutral30,
    "debugExceptionWidget.border": "#313131",
    "debugToolBar.background": "#343334",
    "debugToolBar.border": "#313131",
    "diffEditor.border": colors.neutral40,
    "diffEditor.moveActive.border": colors.neutral60,
    "diffEditor.move.border": colors.yellow110,
    "diffEditor.insertedTextBackground": colors.greenTint10,
    // "diffEditor.insertedTextBorder": colors.green90,
    "diffEditor.removedTextBackground": colors.redTint10,
    // "diffEditor.removedTextBorder": colors.red90,
    "diffEditor.diagonalFill": colors.neutral30,
    "diffEditor.insertedLineBackground": colors.greenTint10,
    "diffEditor.removedLineBackground": colors.redTint10,
    "diffEditorGutter.insertedLineBackground": colors.greenTint20,
    "diffEditorGutter.removedLineBackground": colors.redTint20,
    "diffEditorOverview.insertedForeground": colors.greenTint20,
    "diffEditorOverview.removedForeground": colors.redTint20,
    "dropdown.background": colors.neutral30,
    "dropdown.border": colors.neutral40,
    "dropdown.foreground": colors.neutral140,
    "editor.background": colors.neutral20,
    "editor.findMatchBackground": "#15ac9170",
    "editor.findMatchBorder": colors.transparent,
    "editor.findMatchHighlightBackground": "#7e999250",
    "editor.findMatchHighlightBorder": "#d7d7dd02",
    "editor.findRangeHighlightBackground": colors.neutral30,
    "editor.findRangeHighlightBorder": colors.transparent,
    "editor.foldBackground": colors.neutral30,
    "editor.foreground": colors.neutral140,
    "editor.hoverHighlightBackground": "#29292970",
    "editor.inactiveSelectionBackground": colors.neutral60,
    "editor.lineHighlightBackground": colors.blueTint15,
    "editor.lineHighlightBorder": colors.transparent,
    "editor.rangeHighlightBackground": colors.neutral30,
    "editor.rangeHighlightBorder": "#31313100",
    "editor.selectionBackground": colors.blue60,
    "editor.selectionHighlightBackground": "#194176",
    "editor.selectionHighlightBorder": colors.transparent,
    "editor.wordHighlightBackground": "#ff000000",
    "editor.wordHighlightBorder": colors.transparent,
    "editor.wordHighlightStrongBackground": "#19417670",
    "editor.wordHighlightStrongBorder": colors.transparent,
    "editorBracketMatch.background": "#194176",
    "editorBracketMatch.border": colors.transparent,
    "editorCodeLens.foreground": colors.neutral140,
    "editorCursor.background": "#0c0c0c",
    "editorCursor.foreground": colors.neutral140,
    "editorError.background": colors.transparent,
    // "editorError.border": colors.red110,
    "editorError.foreground": colors.red110,
    "editorGroup.border": "#313131",
    "editorGroup.emptyBackground": "#0c0c0c",
    "editorGroupHeader.border": colors.transparent,
    "editorGroupHeader.tabsBackground": colors.neutral10,
    "editorGroupHeader.tabsBorder": colors.transparent,
    "editorGutter.addedBackground": colors.green90,
    "editorGutter.background": colors.neutral20,
    "editorGutter.commentRangeForeground": colors.neutral30,
    "editorGutter.deletedBackground": colors.red90,
    "editorGutter.foldingControlForeground": colors.neutral140,
    "editorGutter.modifiedBackground": colors.yellow90,
    "editorHoverWidget.background": colors.neutral30,
    "editorHoverWidget.border": colors.neutral40,
    "editorHoverWidget.foreground": colors.neutral140,
    "editorIndentGuide.activeBackground": "#737377",
    "editorIndentGuide.background": "#313131",
    "editorInfo.background": colors.transparent,
    "editorInfo.border": colors.transparent,
    "editorInfo.foreground": colors.blue90,
    "editorInlayHint.background": "#2b2b2b",
    "editorInlayHint.foreground": "#838383",
    "editorLineNumber.activeForeground": colors.neutral140,
    "editorLineNumber.foreground": colors.neutral90,
    "editorLink.activeForeground": colors.blue110,
    "editorMarkerNavigation.background": "#2d2d30",
    "editorMarkerNavigationError.background": colors.red100,
    "editorMarkerNavigationInfo.background": "#4c9df3",
    "editorMarkerNavigationWarning.background": "#e5b95c",
    "editorOverviewRuler.background": "#25252500",
    "editorOverviewRuler.border": "#7f7f7f4d",
    "editorRuler.foreground": "#313131",
    "editorSuggestWidget.background": colors.neutral30,
    "editorSuggestWidget.border": "#313131",
    "editorSuggestWidget.foreground": colors.neutral140,
    "editorSuggestWidget.highlightForeground": colors.neutral140,
    "editorSuggestWidget.selectedBackground": "#194176",
    "editorWarning.background": "#a9904000",
    "editorWarning.border": colors.transparent,
    "editorWarning.foreground": "#ea7620",
    "editorWhitespace.foreground": "#737373",
    "editorWidget.background": "#1f1e1f",
    "editorWidget.foreground": colors.neutral140,
    // "editorWidget.resizeBorder": "#ea7620",
    focusBorder: colors.blue90,
    foreground: colors.neutral140,
    "gitDecoration.addedResourceForeground": "#5a964d",
    "gitDecoration.conflictingResourceForeground": "#AF9CFF",
    "gitDecoration.deletedResourceForeground": colors.red100,
    "gitDecoration.ignoredResourceForeground": "#666666",
    "gitDecoration.modifiedResourceForeground": "#6897bb",
    "gitDecoration.stageDeletedResourceForeground": colors.red100,
    "gitDecoration.stageModifiedResourceForeground": "#6897bb",
    "gitDecoration.submoduleResourceForeground": "#4d9ef5",
    "gitDecoration.untrackedResourceForeground": "#d1675a",
    "icon.foreground": colors.neutral140,
    "input.background": colors.neutral40,
    "input.foreground": colors.neutral140,
    "input.border": colors.neutral50,
    "input.placeholderForeground": colors.neutral110,
    "inputOption.activeBackground": colors.blueTint40,
    "inputOption.activeBorder": colors.transparent,
    "inputOption.activeForeground": colors.blue120,
    "inputOption.background": colors.neutral30,
    "list.activeSelectionBackground": "#0870E44D",
    "list.activeSelectionForeground": colors.neutral140,
    "list.dropBackground": colors.transparent,
    "list.focusBackground": colors.neutral30,
    "list.focusForeground": colors.neutral140,
    "list.highlightForeground": colors.neutral140,
    "list.hoverBackground": colors.neutral40,
    "list.hoverForeground": colors.neutral140,
    "list.inactiveSelectionBackground": "#3c3b3c",
    "list.inactiveSelectionForeground": colors.neutral140,
    "listFilterWidget.background": colors.neutral30,
    "listFilterWidget.noMatchesOutline": colors.red100,
    "listFilterWidget.outline": "#00000000",
    "menu.background": colors.neutral30,
    "menu.border": colors.neutral40,
    "menu.foreground": colors.neutral140,
    "menu.selectionBackground": colors.lightTint10,
    "submenu.selectionBackground": colors.blueTint40,
    "menu.selectionBorder": "#00000000",
    "menu.selectionForeground": colors.neutral140,
    "menu.separatorBackground": "#464646",
    "menubar.selectionBackground": colors.lightTint10,
    "menubar.selectionBorder": "#00000000",
    "menubar.selectionForeground": colors.neutral140,
    "merge.commonContentBackground": colors.neutral30,
    "merge.commonHeaderBackground": "#323232",
    "merge.currentContentBackground": "#1a493d",
    "merge.currentHeaderBackground": "#82D2CE95",
    "merge.incomingContentBackground": "#28384b",
    "merge.incomingHeaderBackground": "#395f8f",
    "minimap.background": colors.neutral20,
    "minimap.errorHighlight": colors.red100,
    "minimap.findMatchHighlight": "#15ac9170",
    "minimap.selectionHighlight": colors.neutral40,
    "minimap.warningHighlight": "#ea7620",
    "minimapGutter.addedBackground": "#15ac91",
    "minimapGutter.deletedBackground": colors.red100,
    "minimapGutter.modifiedBackground": "#e5b95c",
    "notificationCenter.border": "#2c2c2c",
    "notificationCenterHeader.background": "#2c2c2c",
    "notificationCenterHeader.foreground": colors.neutral140,
    "notificationToast.border": "#313131",
    "notifications.background": colors.neutral30,
    "notifications.border": "#2c2c2c",
    "notifications.foreground": colors.neutral140,
    "notificationsErrorIcon.foreground": colors.red100,
    "notificationsInfoIcon.foreground": colors.blue90,
    "notificationsWarningIcon.foreground": "#ea7620",
    "panel.background": "#181818",
    "panel.border": colors.neutral40,
    "panelSection.border": "#313131",
    "panelTitle.activeBorder": colors.blueTint40,
    "panelTitle.activeForeground": colors.neutral140,
    "panelTitle.inactiveForeground": colors.neutral140,
    "peekView.border": "#313131",
    "peekViewEditor.background": "#001f33",
    "peekViewEditor.matchHighlightBackground": "#ea762070",
    "peekViewEditor.matchHighlightBorder": colors.transparent,
    "peekViewEditorGutter.background": "#001f33",
    "peekViewResult.background": colors.neutral30,
    "peekViewResult.fileForeground": colors.neutral140,
    "peekViewResult.lineForeground": colors.neutral140,
    "peekViewResult.matchHighlightBackground": "#ea762070",
    "peekViewResult.selectionBackground": colors.neutral40,
    "peekViewResult.selectionForeground": colors.neutral140,
    "peekViewTitle.background": colors.neutral30,
    "peekViewTitleDescription.foreground": colors.neutral140,
    "peekViewTitleLabel.foreground": colors.neutral140,
    "pickerGroup.border": "#313131",
    "pickerGroup.foreground": colors.neutral140,
    "progressBar.background": colors.blue90,
    "scrollbar.shadow": colors.neutral20,
    "scrollbarSlider.activeBackground": "#676767",
    "scrollbarSlider.background": "#67676750",
    "scrollbarSlider.hoverBackground": "#676767",
    "selection.background": "#194176",
    "settings.focusedRowBackground": "#E0E1E407",
    "settings.headerForeground": colors.neutral140,
    "sideBar.background": "#181818",
    "sideBar.border": colors.neutral40,
    "sideBar.dropBackground": colors.transparent,
    "sideBar.foreground": colors.neutral140,
    "sideBarSectionHeader.background": "#181818",
    "sideBarSectionHeader.border": "#2a2a2a",
    "sideBarSectionHeader.foreground": colors.neutral140,
    "sideBarTitle.foreground": colors.neutral140,
    "statusBar.background": "#181818",
    "statusBar.border": colors.neutral40,
    "statusBar.debuggingBackground": "#181818",
    "statusBar.debuggingBorder": colors.neutral40,
    "statusBar.debuggingForeground": "#e7e7e7",
    "statusBar.foreground": colors.neutral140,
    "statusBar.noFolderBackground": "#181818",
    "statusBar.noFolderBorder": colors.neutral40,
    "statusBar.noFolderForeground": "#6b6b6b",
    "statusBarItem.activeBackground": "#E0E1E425",
    "statusBarItem.hoverBackground": "#E0E1E420",
    "statusBarItem.remoteBackground": "#181818",
    "statusBarItem.remoteForeground": colors.neutral140,
    "tab.activeBackground": "#0870e440",
    "tab.activeBorder": "#0870e480",
    // "tab.activeBorderTop": "#0870e480",
    "tab.activeForeground": "#ffffff",
    "tab.border": colors.transparent,
    "tab.hoverBorder": "#6d6d7071",
    "tab.hoverForeground": colors.neutral140,
    "tab.hoverBackground": "#28292B",
    "tab.inactiveBackground": colors.transparent,
    "tab.inactiveForeground": colors.neutral140,
    "tab.inactiveBorder": "#E0E1E414",
    "tab.unfocusedActiveBorder": "#37383A",
    "tab.unfocusedActiveForeground": colors.neutral140,
    "tab.unfocusedActiveBackground": "#28292B",
    "terminal.ansiBlack": "#676767",
    "terminal.ansiBlue": "#4c9df3",
    "terminal.ansiBrightBlack": "#676767",
    "terminal.ansiBrightBlue": "#4c9df3",
    "terminal.ansiBrightCyan": "#75d3ba",
    "terminal.ansiBrightGreen": "#15ac91",
    "terminal.ansiBrightMagenta": "#e567dc",
    "terminal.ansiBrightRed": colors.red100,
    "terminal.ansiBrightWhite": colors.neutral140,
    "terminal.ansiBrightYellow": "#e5b95c",
    "terminal.ansiCyan": "#75d3ba",
    "terminal.ansiGreen": "#15ac91",
    "terminal.ansiMagenta": "#e567dc",
    "terminal.ansiRed": colors.red100,
    "terminal.ansiWhite": colors.neutral140,
    "terminal.ansiYellow": "#e5b95c",
    "terminal.background": "#181818",
    "terminal.border": "#313131",
    "terminal.foreground": colors.neutral140,
    "terminal.selectionBackground": "#636262fd",
    "terminalCursor.background": colors.neutral30,
    "terminalCursor.foreground": colors.neutral140,
    "textLink.foreground": colors.blue110,
    "titleBar.activeBackground": colors.neutral10,
    "titleBar.activeForeground": "#f4f4f4",
    "titleBar.border": colors.neutral10,
    "titleBar.inactiveBackground": colors.neutral10,
    "titleBar.inactiveForeground": "#cccccc99",
    "tree.indentGuidesStroke": colors.transparent,
    "walkThrough.embeddedEditorBackground": "#00000050",
    "widget.shadow": colors.neutral10,
    "widget.border": colors.neutral50,
    "quickInput.background": colors.neutral30,
    "quickInput.foreground": colors.neutral140,
    "quickInputList.focusBackground": colors.blueTint40,
    "quickInputList.focusForeground": colors.neutral140,
    "quickInputTitle.background": colors.neutral30,
    "window.inactiveBorder": colors.neutral40,
    //"activityBar.activeBorder": "#e3e1e3",
    //"activityBar.dropBorder": "#e3e1e3",
    //"activityBarItem.settingsProfilesBackground": colors.neutral40,
    //"activityBarItem.settingsProfilesForeground": "#999899",
    //"activityBarItem.settingsProfilesHoverForeground": "#e3e1e3",
    //"banner.background": "#194176",
    //"banner.foreground": colors.neutral140,
    //"banner.iconForeground": colors.blue90,
    //"breadcrumbPicker.background": "#1f1e1f",
    //"button.separator": "#E0E1E466",
    //"charts.blue": colors.blue90,
    //"charts.foreground": colors.neutral140,
    //"charts.green": "#89d185",
    //"charts.lines": "#E0E1E480",
    //"charts.orange": "#15ac9170",
    //"charts.purple": "#b180d7",
    //"charts.red": colors.red100,
    //"charts.yellow": "#ea7620",
    //"dart.closingLabels": colors.neutral140,
    //"dart.flutterUiGuides": "#a3a3a3",
    //"debugConsole.errorForeground": "#f48771",
    //"debugConsole.infoForeground": colors.blue90,
    //"debugConsole.sourceForeground": colors.neutral140,
    //"debugConsole.warningForeground": "#ea7620",
    //"debugConsoleInputIcon.foreground": colors.neutral140,
    //"debugIcon.breakpointCurrentStackframeForeground": "#ffcc00",
    //"debugIcon.breakpointDisabledForeground": "#848484",
    //"debugIcon.breakpointForeground": "#e51400",
    //"debugIcon.breakpointStackframeForeground": "#89d185",
    //"debugIcon.breakpointUnverifiedForeground": "#848484",
    //"debugIcon.continueForeground": "#75beff",
    //"debugIcon.disconnectForeground": "#f48771",
    //"debugIcon.pauseForeground": "#75beff",
    //"debugIcon.restartForeground": "#89d185",
    //"debugIcon.startForeground": "#89d185",
    //"debugIcon.stepBackForeground": "#75beff",
    //"debugIcon.stepIntoForeground": "#75beff",
    //"debugIcon.stepOutForeground": "#75beff",
    //"debugIcon.stepOverForeground": "#75beff",
    //"debugIcon.stopForeground": "#f48771",
    //"debugTokenExpression.boolean": "#4e94ce",
    //"debugTokenExpression.error": "#f48771",
    //"debugTokenExpression.name": "#c586c0",
    //"debugTokenExpression.number": "#b5cea8",
    //"debugTokenExpression.string": "#ce9178",
    //"debugTokenExpression.value": "#cccccc99",
    //"debugView.exceptionLabelBackground": "#6c2022",
    //"debugView.exceptionLabelForeground": colors.neutral140,
    //"debugView.stateLabelBackground": "#88888844",
    //"debugView.stateLabelForeground": colors.neutral140,
    //"debugView.valueChangedHighlight": "#569cd6",
    //"descriptionForeground": "#E0E1E4b3",
    //"disabledForeground": "#cccccc80",
    //"editor.focusedStackFrameHighlightBackground": "#7abd7a4d",
    //"editor.inlineValuesBackground": "#ffc80033",
    //"editor.inlineValuesForeground": "#ffffff80",
    //"editor.linkedEditingBackground": "#ff00004d",
    //"editor.snippetFinalTabstopHighlightBorder": "#525252",
    //"editor.snippetTabstopHighlightBackground": "#7c7c7c4d",
    //"editor.stackFrameHighlightBackground": "#ffff0033",
    //"editor.symbolHighlightBackground": "#7e999250",
    //"editorActiveLineNumber.foreground": "#c6c6c6",
    //"editorBracketHighlight.foreground1": "#ffd700",
    //"editorBracketHighlight.foreground2": "#da70d6",
    //"editorBracketHighlight.foreground3": "#179fff",
    //"editorBracketHighlight.foreground4": "#00000000",
    //"editorBracketHighlight.foreground5": "#00000000",
    //"editorBracketHighlight.foreground6": "#00000000",
    //"editorBracketHighlight.unexpectedBracket.foreground": "#ff1212cc",
    //"editorBracketPairGuide.activeBackground1": "#00000000",
    //"editorBracketPairGuide.activeBackground2": "#00000000",
    //"editorBracketPairGuide.activeBackground3": "#00000000",
    //"editorBracketPairGuide.activeBackground4": "#00000000",
    //"editorBracketPairGuide.activeBackground5": "#00000000",
    //"editorBracketPairGuide.activeBackground6": "#00000000",
    //"editorBracketPairGuide.background1": "#00000000",
    //"editorBracketPairGuide.background2": "#00000000",
    //"editorBracketPairGuide.background3": "#00000000",
    //"editorBracketPairGuide.background4": "#00000000",
    //"editorBracketPairGuide.background5": "#00000000",
    //"editorBracketPairGuide.background6": "#00000000",
    //"editorCommentsWidget.rangeActiveBackground": "#3131311a",
    //"editorCommentsWidget.rangeActiveBorder": "#31313166",
    //"editorCommentsWidget.rangeBackground": "#3131311a",
    //"editorCommentsWidget.rangeBorder": "#31313166",
    //"editorCommentsWidget.resolvedBorder": "#cccccc80",
    //"editorCommentsWidget.unresolvedBorder": "#313131",
    //"editorGhostText.foreground": "#ffffff56",
    //"editorGroup.dropBackground": "#53595d80",
    //"editorGroup.dropIntoPromptBackground": "#1f1e1f",
    //"editorGroup.dropIntoPromptForeground": colors.neutral140,
    //"editorGroupHeader.noTabsBackground": "#0c0c0c",
    //"editorHint.foreground": "#eeeeeeb3",
    //"editorHoverWidget.highlightForeground": colors.neutral140,
    //"editorHoverWidget.statusBarBackground": "#232323",
    //"editorInlayHint.parameterBackground": "#2b2b2b",
    //"editorInlayHint.parameterForeground": "#838383",
    //"editorInlayHint.typeBackground": "#2b2b2b",
    //"editorInlayHint.typeForeground": "#838383",
    //"editorLightBulb.foreground": "#ffcc00",
    //"editorLightBulbAutoFix.foreground": "#75beff",
    //"editorMarkerNavigationError.headerBackground": "#f14c4c1a",
    //"editorMarkerNavigationInfo.headerBackground": "#4c9df31a",
    //"editorMarkerNavigationWarning.headerBackground": "#e5b95c1a",
    //"editorOverviewRuler.addedForeground": "#15ac9199",
    //"editorOverviewRuler.bracketMatchForeground": "#a0a0a0",
    //"editorOverviewRuler.commonContentForeground": "#323232",
    //"editorOverviewRuler.currentContentForeground": "#82D2CE95",
    //"editorOverviewRuler.deletedForeground": "#f14c4c99",
    //"editorOverviewRuler.errorForeground": "#ff1212b3",
    //"editorOverviewRuler.findMatchForeground": "#d186167e",
    //"editorOverviewRuler.incomingContentForeground": "#395f8f",
    //"editorOverviewRuler.infoForeground": colors.blue90,
    //"editorOverviewRuler.modifiedForeground": "#e5b95c99",
    //"editorOverviewRuler.rangeHighlightForeground": "#007acc99",
    //"editorOverviewRuler.selectionHighlightForeground": "#a0a0a0cc",
    //"editorOverviewRuler.warningForeground": "#ea7620",
    //"editorOverviewRuler.wordHighlightForeground": "#a0a0a0cc",
    //"editorOverviewRuler.wordHighlightStrongForeground": "#c0a0c0cc",
    //"editorPane.background": "#0c0c0c",
    //"editorStickyScroll.background": "#0c0c0c",
    "editorStickyScroll.border": colors.neutral40,
    "editorStickyScroll.shadow": colors.transparent,
    //"editorStickyScrollHover.background": "#2a2d2e",
    //"editorSuggestWidget.focusHighlightForeground": colors.neutral140,
    //"editorSuggestWidget.selectedForeground": colors.neutral140,
    //"editorSuggestWidgetStatus.foreground": "#E0E1E480",
    //"editorUnicodeHighlight.background": "#bd9b0326",
    //"editorUnicodeHighlight.border": "#bd9b03",
    //"editorUnnecessaryCode.opacity": "#000000aa",
    //"editorWidget.border": "#454545",
    //"errorForeground": "#f48771",
    //"extensionBadge.remoteBackground": colors.blue90,
    //"extensionBadge.remoteForeground": colors.neutral140,
    //"extensionButton.prominentBackground": colors.blue90,
    //"extensionButton.prominentForeground": colors.neutral140,
    //"extensionButton.prominentHoverBackground": "#359dff",
    //"extensionIcon.preReleaseForeground": "#1d9271",
    //"extensionIcon.sponsorForeground": "#d758b3",
    //"extensionIcon.starForeground": "#ff8e00",
    //"extensionIcon.verifiedForeground": colors.blue90,
    //"gitDecoration.renamedResourceForeground": "#73c991",
    //"gitlens.closedAutolinkedIssueIconColor": "#a371f7",
    //"gitlens.closedPullRequestIconColor": "#f85149",
    //"gitlens.decorations.addedForegroundColor": "#5a964d",
    //"gitlens.decorations.branchAheadForegroundColor": "#35b15e",
    //"gitlens.decorations.branchBehindForegroundColor": "#b15e35",
    //"gitlens.decorations.branchDivergedForegroundColor": "#d8af1b",
    //"gitlens.decorations.branchMissingUpstreamForegroundColor": "#c74e39",
    //"gitlens.decorations.branchUnpublishedForegroundColor": "#35b15e",
    //"gitlens.decorations.branchUpToDateForegroundColor": colors.neutral140,
    //"gitlens.decorations.copiedForegroundColor": "#73c991",
    //"gitlens.decorations.deletedForegroundColor": colors.red100,
    //"gitlens.decorations.ignoredForegroundColor": "#666666",
    //"gitlens.decorations.modifiedForegroundColor": "#6897bb",
    //"gitlens.decorations.renamedForegroundColor": "#73c991",
    //"gitlens.decorations.untrackedForegroundColor": "#d1675a",
    //"gitlens.decorations.worktreeView.hasUncommittedChangesForegroundColor": "#e2c08d",
    //"gitlens.graphLane10Color": "#2ece9d",
    //"gitlens.graphLane1Color": "#15a0bf",
    //"gitlens.graphLane2Color": "#0669f7",
    //"gitlens.graphLane3Color": "#8e00c2",
    //"gitlens.graphLane4Color": "#c517b6",
    //"gitlens.graphLane5Color": "#d90171",
    //"gitlens.graphLane6Color": "#cd0101",
    //"gitlens.graphLane7Color": "#f25d2e",
    //"gitlens.graphLane8Color": "#f2ca33",
    //"gitlens.graphLane9Color": "#7bd938",
    //"gitlens.gutterBackgroundColor": "#ffffff13",
    //"gitlens.gutterForegroundColor": "#bebebe",
    //"gitlens.gutterUncommittedForegroundColor": "#00bcf299",
    //"gitlens.lineHighlightBackgroundColor": "#00bcf233",
    //"gitlens.lineHighlightOverviewRulerColor": "#00bcf299",
    //"gitlens.mergedPullRequestIconColor": "#a371f7",
    //"gitlens.openAutolinkedIssueIconColor": "#3fb950",
    //"gitlens.openPullRequestIconColor": "#3fb950",
    //"gitlens.trailingLineBackgroundColor": "#00000000",
    //"gitlens.trailingLineForegroundColor": "#99999959",
    //"gitlens.unpublishedChangesIconColor": "#35b15e",
    //"gitlens.unpublishedCommitIconColor": "#35b15e",
    //"gitlens.unpulledChangesIconColor": "#b15e35",
    //"inputOption.hoverBackground": "#5a5d5e80",
    //"inputValidation.errorBackground": "#5a1d1d",
    //"inputValidation.errorBorder": "#be1100",
    //"inputValidation.infoBackground": "#063b49",
    //"inputValidation.infoBorder": "#007acc",
    //"inputValidation.warningBackground": "#352a05",
    //"inputValidation.warningBorder": "#b89500",
    //"interactive.activeCodeBorder": "#313131",
    //"interactive.inactiveCodeBorder": "#3c3b3c",
    //"keybindingLabel.background": "#8080802b",
    //"keybindingLabel.border": "#33333399",
    //"keybindingLabel.bottomBorder": "#44444499",
    //"keybindingLabel.foreground": "#cccccc",
    //"keybindingTable.headerBackground": "#E0E1E40a",
    //"keybindingTable.rowsBackground": "#E0E1E40a",
    //"list.deemphasizedForeground": "#8c8c8c",
    //"list.errorForeground": "#f88070",
    //"list.filterMatchBackground": "#7e999250",
    //"list.filterMatchBorder": "#d7d7dd02",
    //"list.focusHighlightForeground": colors.neutral140,
    //"list.focusOutline": colors.transparent,
    //"list.invalidItemForeground": "#b89500",
    //"list.warningForeground": "#cca700",
    //"listFilterWidget.shadow": "#04040420",
    //"mergeEditor.change.background": "#9bb95533",
    //"mergeEditor.change.word.background": "#9ccc2c33",
    //"mergeEditor.conflict.handled.minimapOverViewRuler": "#adaca8ee",
    //"mergeEditor.conflict.handledFocused.border": "#c1c1c1cc",
    //"mergeEditor.conflict.handledUnfocused.border": "#86868649",
    //"mergeEditor.conflict.unhandled.minimapOverViewRuler": "#fcba03",
    //"mergeEditor.conflict.unhandledFocused.border": "#ffa600",
    //"mergeEditor.conflict.unhandledUnfocused.border": "#ffa6007a",
    //"mergeEditor.conflictingLines.background": "#ffea0047",
    //"minimap.foregroundOpacity": "#000000",
    //"minimap.selectionOccurrenceHighlight": "#676767",
    //"minimapSlider.activeBackground": "#67676780",
    //"minimapSlider.background": "#67676728",
    //"minimapSlider.hoverBackground": "#67676780",
    //"notebook.cellBorderColor": "#3c3b3c",
    //"notebook.cellEditorBackground": "#1e1e1e",
    //"notebook.cellInsertionIndicator": colors.transparent,
    //"notebook.cellStatusBarItemHoverBackground": "#ffffff26",
    //"notebook.cellToolbarSeparator": "#80808059",
    //"notebook.editorBackground": "#0c0c0c",
    //"notebook.focusedCellBorder": colors.transparent,
    //"notebook.focusedEditorBorder": colors.transparent,
    //"notebook.inactiveFocusedCellBorder": "#3c3b3c",
    //"notebook.selectedCellBackground": "#3c3b3c",
    //"notebook.selectedCellBorder": "#3c3b3c",
    //"notebook.symbolHighlightBackground": "#ffffff0b",
    //"notebookScrollbarSlider.activeBackground": "#676767",
    //"notebookScrollbarSlider.background": "#67676750",
    //"notebookScrollbarSlider.hoverBackground": "#676767",
    //"notebookStatusErrorIcon.foreground": "#f48771",
    //"notebookStatusRunningIcon.foreground": colors.neutral140,
    //"notebookStatusSuccessIcon.foreground": "#89d185",
    "notificationLink.foreground": colors.blue110,
    //"panel.dropBorder": colors.neutral140,
    //"panelSection.dropBackground": "#53595d80",
    //"panelSectionHeader.background": "#80808033",
    //"ports.iconRunningProcessForeground": colors.neutral30,
    //"problemsErrorIcon.foreground": colors.red100,
    //"problemsInfoIcon.foreground": colors.blue90,
    //"problemsWarningIcon.foreground": "#ea7620",
    //"rust_analyzer.syntaxTreeBorder": "#ffffff",
    //"sash.hoverBorder": colors.transparent,
    //"scm.providerBorder": "#454545",
    //"searchEditor.findMatchBackground": "#7e999235",
    //"searchEditor.findMatchBorder": "#d7d7dd01",
    //"searchEditor.textInputBorder": colors.transparent,
    "settings.checkboxBackground": colors.lightTint8,
    "settings.checkboxBorder": colors.neutral70,
    "settings.checkboxForeground": colors.neutral140,
    "settings.dropdownBackground": colors.neutral40,
    "settings.dropdownBorder": colors.neutral60,
    "settings.dropdownForeground": colors.neutral140,
    "settings.dropdownListBorder": colors.neutral50,
    "settings.focusedRowBorder": colors.blue100,
    //"settings.headerBorder": "#0c0c0c",
    "settings.modifiedItemIndicator": colors.yellow110,
    //"settings.numberInputBackground": colors.neutral30,
    //"settings.numberInputBorder": colors.transparent,
    //"settings.numberInputForeground": colors.neutral140,
    //"settings.rowHoverBackground": "#2a282a4d",
    //"settings.sashBorder": "#0c0c0c",
    "settings.textInputBackground": colors.transparent,
    "settings.textInputBorder": colors.neutral50,
    "settings.textInputForeground": colors.neutral140,
    "sideBySideEditor.horizontalBorder": colors.neutral40,
    "sideBySideEditor.verticalBorder": colors.neutral40,
    //"statusBar.focusBorder": colors.neutral140,
    //"statusBarItem.compactHoverBackground": "#ffffff33",
    //"statusBarItem.errorBackground": "#c72e0f",
    //"statusBarItem.errorForeground": "#ffffff",
    //"statusBarItem.focusBorder": colors.neutral140,
    //"statusBarItem.prominentBackground": "#00000080",
    //"statusBarItem.prominentForeground": colors.neutral140,
    //"statusBarItem.prominentHoverBackground": "#0000004d",
    //"statusBarItem.warningBackground": "#92470e",
    //"statusBarItem.warningForeground": "#ffffff",
    //"symbolIcon.arrayForeground": colors.neutral140,
    //"symbolIcon.booleanForeground": colors.neutral140,
    //"symbolIcon.classForeground": "#ee9d28",
    //"symbolIcon.colorForeground": colors.neutral140,
    //"symbolIcon.constantForeground": colors.neutral140,
    //"symbolIcon.constructorForeground": "#b180d7",
    //"symbolIcon.enumeratorForeground": "#ee9d28",
    //"symbolIcon.enumeratorMemberForeground": "#75beff",
    //"symbolIcon.eventForeground": "#ee9d28",
    //"symbolIcon.fieldForeground": "#75beff",
    //"symbolIcon.fileForeground": colors.neutral140,
    //"symbolIcon.folderForeground": colors.neutral140,
    //"symbolIcon.functionForeground": "#b180d7",
    //"symbolIcon.interfaceForeground": "#75beff",
    //"symbolIcon.keyForeground": colors.neutral140,
    //"symbolIcon.keywordForeground": colors.neutral140,
    //"symbolIcon.methodForeground": "#b180d7",
    //"symbolIcon.moduleForeground": colors.neutral140,
    //"symbolIcon.namespaceForeground": colors.neutral140,
    //"symbolIcon.nullForeground": colors.neutral140,
    //"symbolIcon.numberForeground": colors.neutral140,
    //"symbolIcon.objectForeground": colors.neutral140,
    //"symbolIcon.operatorForeground": colors.neutral140,
    //"symbolIcon.packageForeground": colors.neutral140,
    //"symbolIcon.propertyForeground": colors.neutral140,
    //"symbolIcon.referenceForeground": colors.neutral140,
    //"symbolIcon.snippetForeground": colors.neutral140,
    //"symbolIcon.stringForeground": colors.neutral140,
    //"symbolIcon.structForeground": colors.neutral140,
    //"symbolIcon.textForeground": colors.neutral140,
    //"symbolIcon.typeParameterForeground": colors.neutral140,
    //"symbolIcon.unitForeground": colors.neutral140,
    //"symbolIcon.variableForeground": "#75beff",
    //"tab.activeModifiedBorder": "#3399cc",
    //"tab.inactiveModifiedBorder": "#3399cc80",
    //"tab.lastPinnedBorder": colors.transparent,
    //"tab.unfocusedActiveBackground": "#0c0c0c",
    //"tab.unfocusedActiveBorder": colors.transparent,
    //"tab.unfocusedActiveBorderTop": "#E0E1E480",
    //"tab.unfocusedActiveForeground": "#E0E1E480",
    //"tab.unfocusedActiveModifiedBorder": "#3399cc80",
    //"tab.unfocusedHoverBorder": "#6d6d7039",
    //"tab.unfocusedHoverForeground": "#E0E1E480",
    //"tab.unfocusedInactiveBackground": "#262626",
    //"tab.unfocusedInactiveForeground": "#E0E1E480",
    //"tab.unfocusedInactiveModifiedBorder": "#3399cc40",
    //"terminal.dropBackground": "#53595d80",
    //"terminal.findMatchBackground": "#15ac9170",
    //"terminal.findMatchHighlightBackground": "#7e999250",
    //"terminal.inactiveSelectionBackground": "#6362627e",
    //"terminal.tab.activeBorder": colors.transparent,
    //"terminalCommandDecoration.defaultBackground": "#ffffff40",
    //"terminalCommandDecoration.errorBackground": colors.red100,
    //"terminalCommandDecoration.successBackground": "#1b81a8",
    //"terminalOverviewRuler.cursorForeground": "#a0a0a0cc",
    //"terminalOverviewRuler.findMatchForeground": "#d186167e",
    //"testing.iconErrored": colors.red100,
    //"testing.iconFailed": colors.red100,
    //"testing.iconPassed": "#73c991",
    //"testing.iconQueued": "#cca700",
    //"testing.iconSkipped": "#848484",
    //"testing.iconUnset": "#848484",
    //"testing.message.error.decorationForeground": colors.red100,
    //"testing.message.error.lineBackground": "#ff000033",
    //"testing.message.info.decorationForeground": "#E0E1E480",
    //"testing.peekBorder": colors.red100,
    //"testing.peekHeaderBackground": "#f14c4c1a",
    //"testing.runAction": "#73c991",
    //"textBlockQuote.background": "#7f7f7f1a",
    //"textBlockQuote.border": "#007acc80",
    //"textCodeBlock.background": "#0a0a0a66",
    "textLink.activeForeground": colors.blue110,
    //"textPreformat.foreground": "#d7ba7d",
    //"textSeparator.foreground": "#ffffff2e",
    //"toolbar.activeBackground": "#63666750",
    //"toolbar.hoverBackground": "#5a5d5e50",
    //"tree.tableColumnsBorder": "#cccccc20",
    //"tree.tableOddRowsBackground": "#E0E1E40a",
    //"welcomePage.progress.background": colors.neutral30,
    //"welcomePage.progress.foreground": colors.blue90,
    //"welcomePage.tileBackground": "#1f1e1f",
    //"welcomePage.tileHoverBackground": "#252425",
    //"welcomePage.tileShadow": "#04040420",
    //"activityBar.activeFocusBorder": null,
    //"button.border": null,
    //"contrastActiveBorder": null,
    //"contrastBorder": null,
    "dropdown.listBackground": colors.neutral30,
    //"editor.selectionForeground": null,
    //"editor.snippetFinalTabstopHighlightBackground": null,
    //"editor.snippetTabstopHighlightBorder": null,
    //"editor.symbolHighlightBorder": null,
    //"editorGhostText.background": null,
    //"editorGhostText.border": null,
    //"editorGroup.dropIntoPromptBorder": null,
    //"editorGroup.focusedEmptyBorder": null,
    //"editorHint.border": null,
    //"editorSuggestWidget.selectedIconForeground": null,
    //"editorUnnecessaryCode.border": null,
    //"inputValidation.errorForeground": null,
    //"inputValidation.infoForeground": null,
    //"inputValidation.warningForeground": null,
    //"list.activeSelectionIconForeground": null,
    //"list.focusAndSelectionOutline": null,
    //"list.inactiveFocusBackground": null,
    //"list.inactiveFocusOutline": null,
    //"list.inactiveSelectionIconForeground": null,
    //"merge.border": null,
    //"notebook.cellHoverBackground": null,
    //"notebook.focusedCellBackground": null,
    //"notebook.inactiveSelectedCellBorder": null,
    //"notebook.outputContainerBackgroundColor": null,
    //"notebook.outputContainerBorderColor": null,
    //"panelInput.border": null,
    //"panelSectionHeader.border": null,
    //"panelSectionHeader.foreground": null,
    //"quickInput.list.focusBackground": null,
    //"quickInputList.focusIconForeground": null,
    //"terminal.findMatchBorder": null,
    //"terminal.findMatchHighlightBorder": null,
    //"terminal.selectionForeground": null,
    //"testing.message.info.lineBackground": null,
    //"toolbar.hoverOutline": null,
    //"welcomePage.background": null,
    //"window.activeBorder": null,
  },
  tokenColors: [
    {
      scope:
        "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "variable.other.generic-type.haskell",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "storage.type.haskell",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: "support.variable.magic.python",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope:
        "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: [
        "variable.language.special.self.python",
        "variable.parameter.function.language.special.self.python",
      ],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "storage.modifier.lifetime.rust",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "support.function.std.rust",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: "entity.name.lifetime.rust",
      settings: {
        foreground: colors.orange,
      },
    },
    {
      scope: "variable.language.rust",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "support.constant.edge",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "constant.other.character-class.regexp",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "keyword.operator.quantifier.regexp",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope:
        "punctuation.definition.string.begin,punctuation.definition.string.end",
      settings: {
        foreground: colors.pink,
      },
    },
    {
      scope: "variable.parameter.function",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "comment markup.link",
      settings: {
        foreground: colors.lightUntint30,
      },
    },
    {
      scope: "markup.changed.diff",
      settings: {
        foreground: colors.orange,
      },
    },
    {
      scope:
        "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
      settings: {
        foreground: colors.violet,
      },
    },
    {
      scope: "markup.inserted.diff",
      settings: {
        foreground: colors.pink,
      },
    },
    {
      scope: "markup.deleted.diff",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "meta.function.c,meta.function.cpp",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope:
        "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "punctuation.separator.key-value",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "keyword.operator.expression.import",
      settings: {
        foreground: colors.violet,
      },
    },
    {
      scope: ["support.constant.property.math", "support.constant.math"],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "variable.other.constant",
      settings: {
        foreground: colors.blueLight,
      },
    },
    {
      scope: ["storage.type.object.array.java"],
      settings: {
        foreground: colors.blue,
      },
    },
    {
      scope: [
        "storage.type.annotation",
        "punctuation.definition.annotation",
        "punctuation.definition.annotation.java",
      ],
      settings: {
        foreground: colors.lime,
      },
    },
    {
      scope: [
        "punctuation.section.block.begin.java",
        "punctuation.section.block.end.java",
        "punctuation.definition.method-parameters.begin.java",
        "punctuation.definition.method-parameters.end.java",
        "meta.method.identifier.java",
        "punctuation.section.method.begin.java",
        "punctuation.section.method.end.java",
        "punctuation.terminator.java",
        "punctuation.section.class.begin.java",
        "punctuation.section.class.end.java",
        "punctuation.section.inner-class.begin.java",
        "punctuation.section.inner-class.end.java",
        "meta.method-call.java",
        "punctuation.section.class.begin.bracket.curly.java",
        "punctuation.section.class.end.bracket.curly.java",
        "punctuation.section.method.begin.bracket.curly.java",
        "punctuation.section.method.end.bracket.curly.java",
        "punctuation.separator.period.java",
        "punctuation.bracket.angle.java",
        "meta.method.body.java",
      ],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "meta.method.java",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: ["entity.name.type"],
      settings: {
        foreground: colors.blue,
      },
    },
    {
      scope: ["storage.type.generic.java"],
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "storage.modifier.import.java",
      settings: {
        foreground: colors.blue,
      },
    },
    {
      scope: [
        "keyword.operator.instanceof.java",
        "storage.type.primitive.java",
        "storage.type.java",
      ],
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "meta.definition.variable.name.java",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "keyword.operator.logical",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "keyword.operator.bitwise",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "keyword.operator.channel",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope:
        "support.constant.property-value.scss,support.constant.property-value.css",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope:
        "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: "punctuation.separator.list.comma.css",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "support.constant.color.w3c-standard-color-name.css",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: "support.type.vendored.property-name.css",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope:
        "support.module.node,support.type.object.module,support.module.node",
      settings: {
        foreground: colors.blue,
      },
    },
    {
      scope: "entity.name.type.module",
      settings: {
        foreground: colors.blue,
      },
    },
    {
      scope:
        "variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "support.constant.json",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: [
        "keyword.operator.expression.instanceof",
        "keyword.operator.new",
        "keyword.operator.ternary",
        "keyword.operator.optional",
        "keyword.operator.expression.keyof",
      ],
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "support.type.object.console",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "support.variable.property.process",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: "entity.name.function,support.function.console",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: "keyword.operator.misc.rust",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "keyword.operator.sigil.rust",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "keyword.operator.delete",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "support.type.object.dom",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "support.variable.dom,support.variable.property.dom",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope:
        "keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope:
        "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "punctuation.separator.delimiter",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "punctuation.separator.c,punctuation.separator.cpp",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "support.type.python",
      settings: {
        foreground: colors.blue,
      },
    },
    {
      scope: "keyword.operator.logical.python",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "entity.name.function.python",
      settings: {
        foreground: colors.neutral140Bold,
        fontStyle: "bold",
      },
    },
    {
      scope:
        "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "meta.function-call.generic.python",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: "constant.character.format.placeholder.other.python",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: "keyword.operator",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "keyword.operator.assignment.compound",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope:
        "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "keyword",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "entity.name.namespace",
      settings: {
        foreground: colors.orange,
      },
    },
    {
      scope: "variable",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "variable.c",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "variable.language",
      settings: {
        foreground: colors.coral,
      },
    },
    {
      scope: "token.variable.parameter.java",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "import.storage.java",
      settings: {
        foreground: colors.orange,
      },
    },
    {
      scope: "token.package.keyword",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "token.package",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: [
        "entity.name.function",
        "meta.require",
        "support.function.any-method",
        "variable.function",
      ],
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: "entity.name.type.namespace",
      settings: {
        foreground: colors.blue,
      },
    },
    {
      scope: ["support.class", "entity.name.type.class"],
      settings: {
        foreground: colors.blue,
      },
    },
    {
      scope: "entity.name.class.identifier.namespace.type",
      settings: {
        foreground: colors.blue,
      },
    },
    {
      scope: [
        "variable.other.class.js",
        "variable.other.class.ts",
        "variable.other.constant.ts",
        "variable.object.property.ts",
        "variable.other.property",
        "variable.object.property",
        "variable.other.enummember",
      ],
      settings: {
        foreground: colors.violet,
      },
    },
    {
      scope: "variable.other.class.php",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "keyword.control",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "control.elements, keyword.operator.less",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: "keyword.other.special-method",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: "storage",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "token.storage",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope:
        "keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "support.function",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: "support.type.property-name",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "support.constant.property-value",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "support.constant.font-name",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: "meta.tag",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: "string",
      settings: {
        foreground: colors.pink,
      },
    },
    {
      scope: "entity.other.inherited-class",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "constant.other.symbol",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "constant.numeric",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: "constant",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "punctuation.definition.constant",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: "entity.name.tag",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: "entity.other.attribute-name",
      settings: {
        foreground: colors.violet,
      },
    },
    {
      scope: "entity.other.attribute-name.id",
      settings: {
        foreground: colors.violet,
      },
    },
    {
      scope: "entity.other.attribute-name.class.css",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: "meta.selector",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "markup.heading",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope:
        "markup.heading punctuation.definition.heading, entity.name.section",
      settings: {
        foreground: colors.violet,
      },
    },
    {
      scope: "keyword.other.unit",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "todo.bold",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: "punctuation.definition.bold",
      settings: {
        foreground: colors.orange,
      },
    },
    {
      scope: "punctuation.definition.italic,todo.emphasis",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "emphasis md",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "entity.name.section.markdown",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: [
        "punctuation.definition.heading.markdown",
        "markup.heading.setext",
        "meta.separator.markdown",
        "markup.fenced_code.block.markdown punctuation.definition.markdown",
      ],
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      name: "codeblock content",
      scope: ["markup.raw.block.markdown", "markup.fenced_code.block.markdown"],
      settings: {
        foreground: colors.pink,
      },
    },
    {
      scope: [
        "fenced_code.block.language.markdown",
        "fenced_code.block.language.attributes.markdown",
      ],
      settings: {
        foreground: colors.comment,
      },
    },
    {
      scope: ["punctuation.definition.list.begin.markdown"],
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: [
        "punctuation.definition.bold.markdown",
        "punctuation.definition.italic.markdown",
        "punctuation.definition.strikethrough.markdown",
      ],
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "markup.bold",
      settings: {
        foreground: colors.neutral140Bold,
        fontStyle: "bold",
      },
    },
    {
      scope: "markup.italic",
      settings: {
        foreground: colors.neutral140Italic,
        fontStyle: "italic",
      },
    },
    {
      scope: "markup.strikethrough",
      settings: {
        foreground: colors.strikeThrough,
      },
    },
    {
      scope: "markup.inline.raw.markdown",
      settings: {
        foreground: colors.pink,
      },
    },
    {
      scope: [
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.string.end.markdown",
        "markup.inline.raw.string.markdown",
      ],
      settings: {
        foreground: colors.pink,
      },
    },
    {
      scope: "punctuation.definition.list.markdown",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: ["punctuation.definition.metadata.markdown"],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "punctuation.definition.metadata.markdown",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope:
        "markup.underline.link.markdown,markup.underline.link.image.markdown",
      settings: {
        foreground: colors.pink,
      },
    },
    {
      scope: [
        "string.other.link.title.markdown",
        "string.other.link.description.markdown",
        "punctuation.definition.link.description.begin.markdown",
        "punctuation.definition.link.title.begin.markdown",
        "punctuation.definition.link.title.end.markdown",
        "punctuation.definition.quote.begin.markdown",
        "punctuation.definition.table.markdown",
        "punctuation.separator.table.markdown",
        "punctuation.definition.raw.markdown",
      ],
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "string.regexp",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "constant.character.escape",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "punctuation.section.embedded, variable.interpolation",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope:
        "punctuation.section.embedded.begin,punctuation.section.embedded.end",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "invalid.illegal",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "invalid.illegal.bad-ampersand.html",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "invalid.broken",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "invalid.deprecated",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "invalid.unimplemented",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "source.json meta.structure.dictionary.json > string.quoted.json",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope:
        "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope:
        "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
      settings: {
        foreground: colors.pink,
      },
    },
    {
      scope:
        "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: [
        "support.type.property-name.json",
        "support.type.property-name.json punctuation",
        "string.key.json",
      ],
      settings: {
        foreground: colors.violet,
      },
    },

    {
      scope:
        "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope:
        "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope:
        "support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php,meta.interface.php",
      settings: {
        foreground: colors.orange,
      },
    },
    {
      scope: "keyword.operator.error-control.php",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "keyword.operator.type.php",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "punctuation.section.array.begin.php",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "punctuation.section.array.end.php",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "invalid.illegal.non-null-typehinted.php",
      settings: {
        foreground: colors.red110,
      },
    },
    {
      scope:
        "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
      settings: {
        foreground: colors.orange,
      },
    },
    {
      scope:
        "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope:
        "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "support.constant.core.rust",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope:
        "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: "entity.name.goto-label.php,support.other.php",
      settings: {
        foreground: colors.violet,
      },
    },
    {
      scope:
        "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "keyword.operator.regexp.php",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "keyword.operator.comparison.php",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "meta.function.decorator.python",
      settings: {
        foreground: colors.lime,
      },
    },
    {
      scope:
        "support.token.decorator.python,meta.function.decorator.identifier.python",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: [
        "string.quoted.docstring.multi.python",
        "string.quoted.docstring.multi.python punctuation.definition.string.begin.python",
        "string.quoted.docstring.multi.python punctuation.definition.string.end.python",
      ],
      settings: {
        foreground: colors.comment,
      },
    },
    {
      scope: ["meta.fstring.python storage"],
      settings: {
        foreground: colors.pink,
      },
    },
    {
      scope: [
        "string.quoted.binary.single.python punctuation.definition.string.begin",
        "string.quoted.binary.single.python punctuation.definition.string.end",
        "string.quoted.binary.single.python storage",
        "string.quoted.binary.single.python",
      ],
      settings: {
        foreground: colors.lime,
      },
    },
    {
      scope: "function.parameter",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "function.brace",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "function.parameter.ruby, function.parameter.cs",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "constant.language.symbol.ruby",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "rgb-value",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "inline-color-decoration rgb-value",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: "less rgb-value",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: "selector.sass",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope:
        "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: "block.scope.end,block.scope.begin",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "storage.type.cs",
      settings: {
        foreground: colors.orange,
      },
    },
    {
      scope: "entity.name.variable.local.cs",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "token.info-token",
      settings: {
        foreground: colors.violet,
      },
    },
    {
      scope: "token.warn-token",
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: "token.error-token",
      settings: {
        foreground: colors.red110,
      },
    },
    {
      scope: "token.debug-token",
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: [
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded",
      ],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: ["meta.template.expression"],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: ["keyword.operator.module"],
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: ["support.type.type.flowtype"],
      settings: {
        foreground: colors.violet,
      },
    },
    {
      scope: ["support.type.primitive"],
      settings: {
        foreground: colors.orange,
      },
    },
    {
      scope: ["meta.property.object"],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: ["variable.parameter.function.js"],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: ["keyword.other.template.begin"],
      settings: {
        foreground: colors.pink,
      },
    },
    {
      scope: ["keyword.other.template.end"],
      settings: {
        foreground: colors.pink,
      },
    },
    {
      scope: ["keyword.other.substitution.begin"],
      settings: {
        foreground: colors.pink,
      },
    },
    {
      scope: ["keyword.other.substitution.end"],
      settings: {
        foreground: colors.pink,
      },
    },
    {
      scope: ["keyword.operator.assignment"],
      settings: {
        foreground: colors.neutral140,
      },
    },

    // Go-specific tokens
    {
      name: "Go Package",
      scope: ["entity.name.type.package.go"],
      settings: {
        foreground: colors.lime, // Lime
      },
    },
    {
      name: "Go Type Declaration",
      scope: ["entity.name.type.go"],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      name: "Go Shadowed Variable",
      scope: ["variable.other.shadowed.go"],
      settings: {
        foreground: colors.orange, // Orange
      },
    },

    {
      name: "Go Constant",
      scope: ["variable.other.constant.go"],
      settings: {
        foreground: colors.violet,
      },
    },

    {
      scope: ["support.type.prelude.elm"],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: ["support.constant.elm"],
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: ["punctuation.quasi.element"],
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: ["constant.character.entity"],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: [
        "entity.other.attribute-name.pseudo-element",
        "entity.other.attribute-name.pseudo-class",
      ],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: ["entity.global.clojure"],
      settings: {
        foreground: colors.orange,
      },
    },
    {
      scope: ["meta.symbol.clojure"],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: ["constant.keyword.clojure"],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: ["meta.arguments.coffee", "variable.parameter.function.coffee"],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: ["source.ini"],
      settings: {
        foreground: colors.pink,
      },
    },
    {
      scope: ["meta.scope.prerequisites.makefile"],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: ["source.makefile"],
      settings: {
        foreground: colors.orange,
      },
    },
    {
      scope: ["storage.modifier.import.groovy"],
      settings: {
        foreground: colors.orange,
      },
    },
    {
      scope: ["meta.method.groovy"],
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: ["meta.definition.variable.name.groovy"],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: ["meta.definition.class.inherited.classes.groovy"],
      settings: {
        foreground: colors.pink,
      },
    },
    {
      scope: ["support.variable.semantic.hlsl"],
      settings: {
        foreground: colors.orange,
      },
    },
    {
      scope: [
        "support.type.texture.hlsl",
        "support.type.sampler.hlsl",
        "support.type.object.hlsl",
        "support.type.object.rw.hlsl",
        "support.type.fx.hlsl",
        "support.type.object.hlsl",
      ],
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: ["text.variable", "text.bracketed"],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: ["support.type.swift", "support.type.vb.asp"],
      settings: {
        foreground: colors.orange,
      },
    },
    {
      scope: ["entity.name.function.xi"],
      settings: {
        foreground: colors.orange,
      },
    },
    {
      scope: ["entity.name.class.xi"],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: ["constant.character.character-class.regexp.xi"],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: ["constant.regexp.xi"],
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      scope: ["keyword.control.xi"],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: ["invalid.xi"],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: ["beginning.punctuation.definition.quote.markdown.xi"],
      settings: {
        foreground: colors.pink,
      },
    },
    {
      scope: ["beginning.punctuation.definition.list.markdown.xi"],
      settings: {
        foreground: colors.lightUntint30,
      },
    },
    {
      scope: ["constant.character.xi"],
      settings: {
        foreground: colors.violet,
      },
    },
    {
      scope: ["accent.xi"],
      settings: {
        foreground: colors.violet,
      },
    },
    {
      scope: ["wikiword.xi"],
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: ["constant.other.color.rgb-value.xi"],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: ["punctuation.definition.tag.xi"],
      settings: {
        foreground: colors.lightUntint30,
      },
    },
    {
      scope: [
        "entity.name.label.cs",
        "entity.name.scope-resolution.function.call",
        "entity.name.scope-resolution.function.definition",
      ],
      settings: {
        foreground: colors.orange,
      },
    },
    {
      scope: ["entity.name.label.cs"],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: [" meta.brace.square"],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "comment, punctuation.definition.comment",
      settings: {
        foreground: colors.lightUntint30,
      },
    },
    {
      scope: "markup.quote.markdown",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: "punctuation.definition.block.sequence.item.yaml",
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      name: "YAML Anchor",
      scope: [
        "keyword.control.property.anchor.yaml",
        "entity.name.type.anchor.yaml",
      ],
      settings: {
        foreground: colors.lime,
      },
    },
    {
      name: "YAML Alias",
      scope: ["keyword.control.flow.alias.yaml", "variable.other.alias.yaml"],
      settings: {
        foreground: colors.orange,
      },
    },
    {
      name: "YAML Merge Operator",
      scope: ["constant.language.merge.yaml"],
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      name: "YAML Schema",
      scope: ["meta.schema.yaml"],
      settings: {
        foreground: colors.coral,
      },
    },
    {
      name: "YAML Key",
      scope: ["entity.name.tag.yaml"],
      settings: {
        foreground: colors.cyan,
      },
    },
    {
      name: "YAML Value",
      scope: [
        "constant.numeric.integer.yaml",
        "string.unquoted.plain.out.yaml",
        "string.quoted.single.yaml",
      ],
      settings: {
        foreground: colors.violet,
      },
    },
    {
      name: "YAML Unquoted Block",
      scope: [
        "keyword.control.flow.block-scalar.literal.yaml",
        "string.unquoted.block.yaml",
      ],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope: ["constant.language.symbol.elixir"],
      settings: {
        foreground: colors.neutral140,
      },
    },
    {
      scope:
        "entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      scope: "keyword.control.import.python,keyword.control.flow.python",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      scope: ["meta.decorator.ts", "meta.decorator.ts entity.name.function.ts"],
      settings: {
        foreground: colors.lime,
      },
    },
    {
      name: "Comments",
      scope: [
        "punctuation.definition.comment",
        "comment",
        "comment.block",
        "comment.block.documentation",
        "comment.line",
        "comment.line.double-slash",
      ],
      settings: {
        foreground: colors.comment,
      },
    },
  ],
};

/*!@license
* Infragistics.Web.ClientUI HTML Editor localization resources 15.2.20152.2235
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
$.ig = $.ig || {};

if (!$.ig.HtmlEditor) {
	$.ig.HtmlEditor = {};

	$.extend($.ig.HtmlEditor, {

		locale: {
			boldButtonTitle: 'Fett',
			italicButtonTitle: 'Kursiv',
			underlineButtonTitle: 'Unterstrichen',
			strikethroughButtonTitle: 'Durchgestrichen',
			increaseFontSizeButtonTitle: 'Schriftart vergrosern',
			decreaseFontSizeButtonTitle: 'Schriftart verkleinern',
			alignTextLeftButtonTitle: 'Text linksbundig ausrichten',
			alignTextRightButtonTitle: 'Text rechtsbundig ausrichten',
			alignTextCenterButtonTitle: 'Zentrieren',
			justifyButtonTitle: 'Ausrichten',
			bulletsButtonTitle: 'Aufzahlungszeichen',
			numberingButtonTitle: 'Nummerierung',
			decreaseIndentButtonTitle: 'Einzug verkleinern',
			increaseIndentButtonTitle: 'Einzug vergrosern',
			insertPictureButtonTitle: 'Bild einfugen',
			fontColorButtonTitle: 'Schriftfarbe',
			textHighlightButtonTitle: 'Texthervorhebungsfarbe',
			insertLinkButtonTitle: 'Hyperlink einfugen',
			insertTableButtonTitle: 'Tabelle',
			addRowButtonTitle: 'Zeile hinzufugen',
			removeRowButtonTitle: 'Zeile entfernen',
			addColumnButtonTitle: 'Spalte hinzufugen',
			removeColumnButtonTitle: 'Spalte entfernen',
			inserHRButtonTitle: 'Horizontale Linie einfugen',
			viewSourceButtonTitle: 'Quelle anzeigen',
			cutButtonTitle: 'Ausschneiden',
			copyButtonTitle: 'Kopieren',
			pasteButtonTitle: 'Einfugen',
			undoButtonTitle: 'Ruckgangig',
			redoButtonTitle: 'Wiederholen',
			imageUrlDialogText: 'Bild-URL:',
			imageAlternativeTextDialogText: 'Alternativer Text:',
			imageWidthDialogText: 'Bildbreite:',
			imageHeihgtDialogText: 'Bildhohe:',
			linkNavigateToUrlDialogText: 'Zu URL navigieren:',
			linkDisplayTextDialogText: 'Text anzeigen:',
			linkOpenInDialogText: 'Offnen in:',
			linkTargetNewWindowDialogText: 'Neues Fenster',
			linkTargetSameWindowDialogText: 'Gleiches Fenster',
			linkTargetParentWindowDialogText: 'Ubergeordnetes Fenster',
			linkTargetTopmostWindowDialogText: 'Fenster im Vordergrund',
			applyButtonTitle: 'Ubernehmen',
			cancelButtonTitle: 'Abbrechen',
			defaultToolbars: {
			    textToolbar: "text manipulation toolbar",
			    formattingToolbar: "text formatting toolbar",
			    insertObjectToolbar: "objects insertion toolbar",
			    copyPasteToolbar: "copy/paste toolbar"
			},
			fontNames: {
				win: [
						{ text: "Times New Roman", value: "Times New Roman" },
						{ text: "Arial", value: "Arial" },
						{ text: "Arial Black", value: "Arial Black" },
						{ text: "Helvetica", value: "Helvetica" },
						{ text: "Comic Sans MS", value: "Comic Sans MS" },
						{ text: "Courier New", value: "Courier New" },
						{ text: "Georgia", value: "Georgia" },
						{ text: "Impact", value: "Impact" },
						{ text: "Lucida Console", value: "Lucida Console" },
						{ text: "Lucida Sans Unicode", value: "Lucida Sans Unicode" },
						{ text: "Palatino Linotype", value: "Palatino Linotype" },
						{ text: "Tahoma", value: "Tahoma" },
						{ text: "Trebuchet MS", value: "Trebuchet MS" },
						{ text: "Verdana", value: "Verdana" },
						{ text: "Symbol", value: "Symbol" },
						{ text: "Webdings", value: "Webdings" },
						{ text: "Wingdings", value: "Wingdings" },
						{ text: "MS Sans Serif", value: "MS Sans Serif" },
						{ text: "MS Serif", value: "MS Serif" }
					],
				mac: [
						{ text: "Times New Roman", value: "Times New Roman" },
						{ text: "Arial", value: "Arial" },
						{ text: "Arial Black", value: "Arial Black" },
						{ text: "Helvetica", value: "Helvetica" },
						{ text: "Comic Sans MS", value: "Comic Sans MS" },
						{ text: "Courier New", value: "Courier New" },
						{ text: "Georgia", value: "Georgia" },
						{ text: "Impact", value: "Impact" },
						{ text: "Monaco", value: "Monaco" },
						{ text: "Lucida Grande", value: "Lucida Grande" },
						{ text: "Book Antiqua", value: "Book Antiqua" },
						{ text: "Geneva", value: "Geneva" },
						{ text: "Trebuchet MS", value: "Trebuchet" },
						{ text: "Verdana", value: "Verdana" },
						{ text: "Symbol", value: "Symbol" },
						{ text: "Webdings", value: "Webdings" },
						{ text: "Zapf Dingbats", value: "Zapf Dingbats" },
						{ text: "New York", value: "New York" }
					]
			},
			fontSizes: [
				{ text: "1", value: "7.5 pt" },
				{ text: "2", value: "10 pt" },
				{ text: "3", value: "12 pt" },
				{ text: "4", value: "13.5 pt" },
				{ text: "5", value: "18 pt" },
				{ text: "6", value: "24 pt" },
				{ text: "7", value: "36 pt" }
			],
			formatsList: [
					{ text: "h1", value: "Uberschrift 1" },
					{ text: "h2", value: "Uberschrift 2" },
					{ text: "h3", value: "Uberschrift 3" },
					{ text: "h4", value: "Uberschrift 4" },
					{ text: "h5", value: "Uberschrift 5" },
					{ text: "h6", value: "Uberschrift 6" },
                    { text: "p", value: "Normal" }
				]
		}

	});
}
})(jQuery);
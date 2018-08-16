/*!@license
* Infragistics.Web.ClientUI Barcode localization resources 15.2.20152.2235
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Barcode) {
	    $.ig.Barcode = {
		    locale: {
			    aILength: "Der AI muss mindestens 2-stellig sein.",
			    badFormedUCCValue: "Die UCC Barcode-Daten sind nicht korrekt formatiert. Das korrekte Format lautet (AI)GTIN.",
			    code39_NonNumericError: "Das Zeichen '{0}' ist fur CODE39 Barcode-Daten ungultig. Gultige Zeichen: {1}",
			    countryError: "Fehler bei der Konvertierung des Landercodes. Er muss ein numerischer Wert sein.",
			    emptyValueMsg: "Der Datenwert ist leer.",
			    encodingError: "Fehler bei der Konvertierung. Die gultigen Eigenschaftswerte finden Sie in der Dokumentation.",
			    errorMessageText: "Ungultiger Wert! Weitere Informationen uber die gultige Barcode-Datenstruktur finden Sie in der Dokumentation.",
			    gS1ExMaxAlphanumNumber: "GS1 DataBar Expanded kann bis zu 41 alphanumerische Zeichen codieren.",
			    gS1ExMaxNumericNumber: "GS1 DataBar Expanded kann bis zu 74 numerische Zeichen codieren.",
			    gS1Length: "GS1 DataBar Data wird fur die GTIN - 8, 12, 13 oder 14 verwendet und muss 7-, 11-, 12- oder 13-stellig sein. An letzter Stelle steht eine Prufsumme.",
			    gS1LimitedFirstChar: "Die erste Ziffer von GS1 DataBar Limited muss der Wert 0 oder 1 sein. Bei der Codierung von GTIN-14 Datenstrukturen mit einem Indikatorwert groser als 1 muss der Barcode des Typs Omnidirectional, Stacked, Stacked Omnidirectional oder Truncated verwendet werden.",
			    i25Length: "Der Interleaved2of5-Barcode muss aus einer geraden Anzahl Ziffern bestehen. Bei einer ungeraden Anzahl kann 0 vorangestellt werden.",
			    intelligentMailLength: "Der Intelligent Mail Barcode besteht aus 20, 25, 29 oder 31 Zeichen - ein 20-stelliger Verfolgungscode (2 Zeichen fur die Barcode-ID, 3 Ziffern fur die Diensttyp-ID, 6 oder 9 Ziffern fur die Adressfeld-ID und 9 oder 6 Ziffern fur die Seriennummer) und 0, 5, 9 oder 11 Postleitzahlensymbole.",
			    intelligentMailSecondDigit: "Die zweite Ziffer muss im Bereich 0-4 liegen.",
			    invalidAI: "Ungultige Elementzeichenfolge fur Application Identifier. Vergewissern Sie sich, dass die AI-Zeichenfolge in den Daten das korrekte Format hat.",
			    invalidCharacter: "Das Zeichen '{0}' ist fur den aktuellen Barcode-Typ ungultig. Gultige Zeichen: {1}",
			    invalidDimension: "Keine Moglichkeit zur Visualisierung von Barcode wegen inkorrekter Kombination von Eigenschaftswerten - Stretch, BarsFillMode und XDimension.",
			    invalidHeight: "Die Barcode-Rasterzeilen (Anzahl {0}) passen nicht in diese Hohe ({1} Pixel).",
			    invalidLength: "Der Barcode muss aus {0} Ziffern bestehen.",
			    invalidPostalCode: "Ungultiger PostalCode-Wert - Mode 2 codiert bis 9-stellige Postleitzahlen (Postleitzahl in USA), Mode 3 dagegen alphanumerische Codes mit bis zu 6 Zeichen.",
			    invalidPropertyValue: "Der Eigenschaftswert {0} muss im Bereich {1}-{2} liegen.",
			    invalidVersion: "Die SizeVersion-Nummer generiert nicht genugend Zellen fur die Codierung der Daten mit dem aktuellen Codierungsmodus und der Fehlerkorrekturebene.",
			    invalidWidth: "Die Barcode-Rasterspalten (Anzahl {0}) passen nicht in diese Breite ({1} Pixel). Uberprufen Sie XDimension und/oder die WidthToHeightRatio Eigenschaftswerte.",
			    invalidXDimensionValue: "Fur den aktuellen Barcode-Typ muss der X-Dimension-Wert im Bereich {0} bis {1} liegen.",
			    maxLength: "Die Textlange {0} uberschreitet die fur den aktuellen Barcode-Typ maximal codierbare Lange. Maximal {1} Zeichen konnen codiert werden.",
			    notSupportedEncoding: "Die Codierung entsprechend {0} {1} wird nicht unterstutzt.",
			    pDF417InvalidRowsColumnsCombination: "Die Codeworter (Daten- und Fehlerkorrektur) sind mehr als in einem Symbol mit Matrix {0}x{1} codiert werden konnen.",
			    primaryMessageError: "Die Primarnachricht kann nicht aus dem Datenwert extrahiert werden. Die zugehorige Struktur finden Sie in der Dokumentation.",
			    serviceClassError: "Fehler bei der Konvertierung der Dienstklasse. Sie muss ein numerischer Wert sein.",
			    smallSize: "Mit den definierten Stretch-Einstellungen passt das Raster nicht in Size({0}, {1}).",
			    unencodableCharacter: "Das Zeichen '{0}' kann nicht codiert werden.",
			    uPCEFirstDigit: "Die erste UPC-E Ziffer ist der Spezifikation entsprechend immer Null.",
			    warningString: "Barcode Warnung: ",
			    wrongCompactionMode: "Die Datennachricht kann nicht mit dem {0} Modus komprimiert werden.",
			    notLoadedEncoding: "Die Codierung {0} ist nicht geladen."
		    }
	    };
    }
})(jQuery);
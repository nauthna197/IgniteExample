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
                aILength: "L'AI doit avoir au moins 2 chiffres.",
                badFormedUCCValue: "Les Donnees du code-barres UCC ne sont pas bien formees. Le format correct doit etre (AI)GTIN.",
                code39_NonNumericError: "Le caractere '{0}' est non valide pour les Donnees du code-barres CODE39. Les caracteres valides sont: {1}",
                countryError: "Erreur dans la conversion du code du pays. Ce doit etre une valeur numerique.",
                emptyValueMsg: "La valeur des Donnees est vide.",
                encodingError: "Erreur dans la conversion. Reportez-vous a la documentation pour les valeurs appropriees des proprietes.",
                errorMessageText: "Valeur non valide! Reportez-vous a la documentation pour la structure appropriee des Donnees du code-barres.",
                gS1ExMaxAlphanumNumber: "La famille GS1 DataBar Expanded peut encoder jusqu'a 41 caracteres alphanumeriques.",
                gS1ExMaxNumericNumber: "La famille GS1 DataBar Expanded peut encoder jusqu'a 74 caracteres numeriques.",
                gS1Length: "Les donnees du GS1 DataBar sont utilisees pour GTIN - 8, 12, 13, 14 et leur longueur doit etre de 7, 11, 12 ou 13. Le dernier chiffre est reserve a une somme de controle.",
                gS1LimitedFirstChar: "Le premier chiffre de GS1 DataBar Limited doit etre 0 ou 1. Lors de l'encodage de structures de donnees GTIN-14 avec une valeur de l'indicateur superieure a 1, le type de code-barres Omnidirectional, Stacked, Stacked Omnidirectional ou Truncated doit etre utilise.",
                i25Length: "Le code-barres Interleaved2of5 doit avoir un nombre de chiffres pair. Vous pouvez mettre un 0 au debut s'il s'agit d'un nombre impair.",
                intelligentMailLength: "Les Donnees du code-barres Intelligent Mail doivent avoir 20, 25, 29 ou 31 caracteres - code de suivi a 20 chiffres (2 pour l'identificateur du code-barres, 3 pour l'identificateur du type de service, 6 ou 9 pour l'identificateur de l'expediteur et 9 ou 6 pour le numero de serie) et 0, 5, 9 ou 11 symboles pour le code postal.",
                intelligentMailSecondDigit: "Le deuxieme chiffre doit etre compris dans la plage 0-4.",
                invalidAI: "Chaines d'elements de l'identificateur d'application non valides. Assurez-vous que la chaine de l'AI specifiee dans les Donnees est bien formee.",
                invalidCharacter: "Le caractere '{0}' est non valide pour le type de code-barres actif. Les caracteres valides sont: {1}",
                invalidDimension: "La taille du code-barres ne peut pas etre definie en raison d'une combinaison incorrecte des valeurs des proprietes Stretch, BarsFillMode et XDimension.",
                invalidHeight: "Les lignes de la grille du code-barres (nombre {0}) ne peuvent pas etre placees sur une telle hauteur ({1} pixels).",
                invalidLength: "Les Donnees du code-barres doivent contenir {0} chiffres.",
                invalidPostalCode: "Valeur PostalCode non valide - le Mode 2 encode un code postal pouvant contenir jusqu'a 9 chiffres (code postal americain) tandis que le Mode 3 encode un code alphanumerique pouvant contenir jusqu'a 6 caracteres.",
                invalidPropertyValue: "La valeur de propriete {0} doit etre comprise dans la plage {1}-{2}.",
                invalidVersion: "Le numero de SizeVersion ne peut pas generer suffisamment de cellules pour encoder les donnees avec le mode d'encodage et le niveau de correction des erreurs actifs.",
                invalidWidth: "Les colonnes de la grille du code-barres (nombre {0}) ne peuvent pas etre placees sur une telle largeur ({1} pixels). Verifier les valeurs des proprietes XDimension et WidthToHeightRatio.",
                invalidXDimensionValue: "La valeur XDimension doit etre comprise dans la plage de {0} a {1} pour le type de code-barres actif.",
                maxLength: "La longueur {0} du texte depasse le maximum encodable pour le type de code-barres actif. Le maximum encodable est de {1} caracteres.",
                notSupportedEncoding: "L'encodage correspondant sous la plage {0} {1} n'est pas pris en charge.",
                pDF417InvalidRowsColumnsCombination: "Les mots de code (correction des donnees et erreurs) sont plus nombreux que ceux pouvant etre encodes en symboles avec une matrice {0}x{1}.",
                primaryMessageError: "Impossible d'extraire le message principal de la valeur des donnees. Reportez-vous a la documentation pour sa structure.",
                serviceClassError: "Erreur dans la conversion de la classe de service. Ce doit etre une valeur numerique.",
                smallSize: "Impossible de placer la grille dans Size({0}, {1}) avec les parametres Stretch definis.",
                unencodableCharacter: "Le caractere '{0}' ne peut pas etre encode.",
                uPCEFirstDigit: "Le premier chiffre de l'UPCE doit toujours etre zero par specification.",
                warningString: "Avertissement Barcode: ",
                wrongCompactionMode: "Le message de donnees ne peut pas etre compacte avec le mode {0}.",
                notLoadedEncoding: "L'encodage {0} n'est pas charge."
		    }
	    };
    }
})(jQuery);
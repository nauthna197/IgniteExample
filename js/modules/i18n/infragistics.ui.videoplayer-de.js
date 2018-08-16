/*!@license
* Infragistics.Web.ClientUI Video Player localization resources 15.2.20152.2235
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.VideoPlayer) {
	    $.ig.VideoPlayer = {};

	    $.extend($.ig.VideoPlayer, {

		    locale: {
			    liveStream: "Live-Video",
			    live: "Live",
			    paused: "Pause",
			    playing: "Wiedergabe",
			    play: 'Wiedergeben',
			    volume: "Lautstarke",
			    unsupportedVideoSource: "Die aktuellen Videoquellen enthalten kein Format, das von Ihrem Browser unterstutzt wird.",
			    missingVideoSource: "Keine kompatible Videoquelle.",
			    progressLabelLongFormat: "$currentTime$ / $duration$",
			    progressLabelShortFormat: "$currentTime$",
			    enterFullscreen: "In Vollbildmodus wechseln",
			    exitFullscreen: "Vollbildmodus beenden",
			    skipTo: "UBERSPRINGEN ZU",
			    unsupportedBrowser: "Der aktuelle Browser unterstutzt HTML5 Video nicht. <br/>Fuhren Sie ein Upgrade auf eine der folgenden Versionen durch:",
			    currentBrowser: "Aktueller Browser: {0}",
			    ie9: "Microsoft Internet Explorer V 9+",
			    chrome8: "Google Chrome V 8+",
			    firefox36: "Mozilla Firefox V 3.6+",
			    safari5: "Apple Safari V 5+",
			    opera11: "Opera V 11+",
			    ieDownload: "http://www.microsoft.com/windows/internet-explorer/default.aspx",
			    operaDownload: "http://www.opera.com/download/",
			    chromeDownload: "http://www.google.com/chrome",
			    firefoxDownload: "http://www.mozilla.com/",
			    safariDownload: "http://www.apple.com/safari/download/",
			    buffering: 'Pufferung...',
			    adMessage: 'Anzeige: Das Video wird in $duration$ Sekunden fortgesetzt.',
			    adMessageLong: 'Anzeige: Das Video wird in $duration$ fortgesetzt.',
			    adMessageNoDuration: 'Anzeige: Das Video wird nach der Werbung fortgesetzt.',
			    adNewWindowTip: 'Anzeige: Klicken, um Anzeigeinhalt in einem neuen Fenster zu offnen.',
			    nonDivException: 'Der Infragistics HTML5 Videoplayer kann nur auf einem DIV Tag instanziiert werden.',
			    relatedVideos: 'VERWANDTE VIDEOS',
			    replayButton: 'Wiedergeben',
			    replayTooltip: 'Klicken, um das letzte Video wiederzugeben.'
		    }
	    });

    }
})(jQuery);
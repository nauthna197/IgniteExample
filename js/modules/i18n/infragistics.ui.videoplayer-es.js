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
			    liveStream: "Video en directo",
			    live: "Directo",
			    paused: "Pausado",
			    playing: "Reproduciendo",
			    play: 'Reproducir',
			    volume: "Volumen",
			    unsupportedVideoSource: "Los origenes de video actuales no contienen un formato compatible con su explorador.",
			    missingVideoSource: "No hay origenes de video compatibles.",
			    progressLabelLongFormat: "$currentTime$ / $duration$",
			    progressLabelShortFormat: "$currentTime$",
			    enterFullscreen: "Mostrar en pantalla completa",
			    exitFullscreen: "Salir de pantalla completa",
			    skipTo: "SALTAR A",
			    unsupportedBrowser: "El explorador actual no admite video HTML5. <br/>Intente actualizar a una de las siguientes versiones:",
			    currentBrowser: "Explorador actual: {0}",
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
			    buffering: 'Almacenando en bufer...',
			    adMessage: 'Anuncio: El video se reanudara en $duration$ segundos.',
			    adMessageLong: 'Anuncio: El video se reanudara en $duration$.',
			    adMessageNoDuration: 'Anuncio: El video se reanudara despues de la publicidad.',
			    adNewWindowTip: 'Anuncio: Haga clic para abrir el contenido del anuncio en una ventana nueva.',
			    nonDivException: 'El Reproductor de video Infragistics HTML5 solo puede instanciarse en una etiqueta DIV.',
			    relatedVideos: 'VIDEOS RELACIONADOS',
			    replayButton: 'Volver a reproducir',
			    replayTooltip: 'Haga clic para volver a reproducir el ultimo video.'
		    }
	    });

    }
})(jQuery);
!function($) {
    "use strict";
$(function(){

//Map
 $('#world-map').vectorMap({
    map: 'world_mill_en',
    scaleColors: ['#666', '#29b6d8'],
    normalizeFunction: 'polynomial',
    hoverOpacity: 0.7,
    hoverColor: false,
    focusOn: {
        x: 0.5,
        y: 0.5,
        scale: 1.0
    },
    zoomMin: 0.85,
    markerStyle: {
        initial: {
            fill: '#fff',
            stroke: '#fff',
            color: '#ffffff'
        }
    },
    backgroundColor: '#fff',
    regionStyle: {
        initial: {
            fill: '#00bcd4',
            "fill-opacity": 1,
            stroke: '#87c2e0',
            "stroke-width": 0,
            "stroke-opacity": 0
        },
        hover: {
            "fill-opacity": 0.8
        },
        selected: {
            fill: 'yellow'
        }
    },
    markers: [
        //http://www.latlong.net/
        {latLng: [51.507351, -0.127758], name: 'London'},
        {latLng: [41.385064, 2.173403], name: 'Barcelona'},
        {latLng: [40.712784, -74.005941], name: 'New York'},
        {latLng: [-22.911632, -43.188286], name: 'Rio De Janeiro'},
        {latLng: [49.282729, -123.120738], name: 'Vancuver'},
        {latLng: [35.689487, 139.691706], name: 'Tokio'},
        {latLng: [55.755826, 37.617300], name: 'Moskva'},
        {latLng: [43.214050, 27.914733], name: 'Varna'},
        {latLng: [30.044420, 31.235712], name: 'Cairo'}
    ]
});

   
	
	
});


	  
	}(window.jQuery);	
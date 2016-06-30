jQuery(document).ready(function($) {
    var map = document.getElementById('map_canvas');
    var index_map = document.getElementById('map');
    if (map) {
        loadScript();
    };
});

function initialize() {

    var myLatlng = new google.maps.LatLng(55.7498598, 37.3523236);
    var mapOptions = {
        center: new google.maps.LatLng(55.7498598, 37.3523236),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title:"We are here!"
    });

    map.setOptions();
}



function loadScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAaOWKyamSxMTXclSDFmJ2N4Am20PCTD6I&sensor=FALSE&callback=initialize";
    document.body.appendChild(script);
}

function bg_map_load() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAaOWKyamSxMTXclSDFmJ2N4Am20PCTD6I&sensor=FALSE&callback=bg_map_initialize";
    document.body.appendChild(script);
}

function initMap_load() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDlM9JGhoTl4aeHmLdbFUw6jSUa__C7XJM&callback=initMap"
  document.body.appendChild(script);
}

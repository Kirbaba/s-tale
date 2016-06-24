(function ($) {

    $(".city").find("a").click(function (e) {

        e.preventDefault();

        var city = $(this);
        city.next().slideToggle();

        initMap(city.data("lat"), city.data("lng"), city.data("zoom"));
    });

})(jQuery);


function initMap(lat, lng, zoom) {

    var lat = typeof lat !== 'undefined' ? lat : 55.7;
    var lng = typeof lng !== 'undefined' ? lng : 41.9;
    var zoom = typeof zoom !== 'undefined' ? zoom : 2;

    // Create a map. Use the Gall-Peters map type.
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: zoom,
        center: {lat: lat, lng: lng},
        mapTypeControl: false,
        scrollwheel: false,
    });

    map.data.setStyle(function (feature) {
        return {
            title: feature.getProperty('name'),
            optimized: false
        };
    });

    //map.data.addGeoJson(cities);

    setMarkers(map);

    var styles = [
        //{"featureType": "administrative", "stylers": [{"visibility": "off"}]},
        {"featureType": "water", "stylers": [{"color": "#D4D4D4"}]},
        {"featureType": "landscape", "stylers": [{"color": "#B2B2B2"}]},
        {"featureType": "poi", "stylers": [{"visibility": "off"}]},
        //{"featureType": "road", "stylers": [{"visibility": "off"}]},
        {"featureType": "transit", "stylers": [{"visibility": "off"}]},
        {"featureType": "water"}
    ]

    map.setOptions({styles: styles});
}

objects = [
    ["Москва,ул. Согласия, 7", "55.6142804", "37.563635"],
    ["Москва,пл. Победы, 2", "55.7536093", "37.3526962"],
    ["Санкт-Петербург", "59.9174925", "30.0448779"],    
    ["Калининград, ул. Согласия, 7", "54.7419887", "20.4908873"],
    ["Калининград, пл. Победы, 2", "54.719379", "20.4975536"],
    ["Саратов", "51.5343656", "45.7299543"],
    ["Сочи", "43.6018244", "39.6550888"],
    ["Мурманск", "68.9674734", "32.8056206"],
    ["Волгоград", "48.6705332", "44.2265192"],
    ["Киев", "50.4021368", "30.2525035"],
    ["Харьков", "49.9947277", "36.1457399"],
    ["Одесса", "46.460123", "30.5717021"],
    ["Минск", "53.8840092", "27.45489"],
]

function setMarkers(map) {

    var marker;

    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };
    for (var i = 0; i < objects.length; i++) {
        var object = objects[i];
        marker = new google.maps.Marker({
            position: {lat: +object[1], lng: +object[2]},
            map: map,
            icon: "http://labs.google.com/ridefinder/images/mm_20_gray.png",
            shape: shape,
            title: object[0],
            id: i
        });

        slideTo(marker);

        marker.addListener('click', function () {
            map.setZoom(8);
            map.setCenter(marker.getPosition());
        });

    }

}

function slideTo(marker) {

    marker.addListener('click', function () {

        jQuery('.owl-carousel-2').trigger('to.owl.carousel', marker.id)
    });
}
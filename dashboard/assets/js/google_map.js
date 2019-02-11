function all_terminals (){
var locations = [
    [
    "Location 1",
     "Lagos",
    "6.4311",
    "3.4158"
    ],
    [
    "Location 2",
    "Kaduna",
    "10.609319",
    "7.429504"
    ],
    [
    "Location 3",
    "Jos",
    "9.896527",
    "8.858331"
    ],
    [
    "Location 4",
    "Akure",
    "7.250771",
    "5.210266"
    ],
    [
    "Location 5",
    "Onitsha",
    "6.141312",
    "6.802949"
    ]
    ];

gmarkers = [];

var map = new google.maps.Map(document.getElementById('map_div'), {
    zoom: 6,
    center: new google.maps.LatLng( 9.0820, 8.6753),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();


function createMarker(latlng, html) {
    var marker = new google.maps.Marker({
        position: latlng,
         icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10
          },
        map: map
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(html);
        infowindow.open(map, marker);
    });
    return marker;
}

for (var i = 0; i < locations.length; i++) {
    gmarkers[locations[i][0]] =
    createMarker(new google.maps.LatLng(locations[i][2], locations[i][3]), locations[i][0] + "<br>" + locations[i][1]);
}
};

all_terminals();




function online_terminals (){
var locations = [
    [
    "Location 1",
     "Lagos",
    "6.4311",
    "3.4158"
    ],
    [
    "Location 2",
    "Kaduna",
    "10.609319",
    "7.429504"
    ],
    [
    "Location 3",
    "Jos",
    "9.896527",
    "8.858331"
    ],
   
    ];

gmarkers = [];

var map = new google.maps.Map(document.getElementById('map_div1'), {
    zoom: 6,
    center: new google.maps.LatLng( 9.0820, 8.6753),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();


function createMarker(latlng, html) {
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
         icon: "http://1.bp.blogspot.com/_GZzKwf6g1o8/S6xwK6CSghI/AAAAAAAAA98/_iA3r4Ehclk/s1600/marker-green.png"
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(html);
        infowindow.open(map, marker);
    });
    return marker;
}

for (var i = 0; i < locations.length; i++) {
    gmarkers[locations[i][0]] =
    createMarker(new google.maps.LatLng(locations[i][2], locations[i][3]), locations[i][0] + "<br>" + locations[i][1]);
}
};

online_terminals();






function offline_terminals (){
var locations = [
  
    [
    "Location 4",
    "Akure",
    "7.250771",
    "5.210266"
    ],
    [
    "Location 5",
    "Onitsha",
    "6.141312",
    "6.802949"
    ]
    ];

gmarkers = [];

var map = new google.maps.Map(document.getElementById('map_div2'), {
    zoom: 6,
    center: new google.maps.LatLng( 9.0820, 8.6753),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();


function createMarker(latlng, html) {
    var marker = new google.maps.Marker({
        position: latlng,
        map: map
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(html);
        infowindow.open(map, marker);
    });
    return marker;
}

for (var i = 0; i < locations.length; i++) {
    gmarkers[locations[i][0]] =
    createMarker(new google.maps.LatLng(locations[i][2], locations[i][3]), locations[i][0] + "<br>" + locations[i][1]);
}
};

offline_terminals();
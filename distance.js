var map;
var service;
var infowindow;

function initialize() {

	var pyrmont = new google.maps.LatLng(42.2814, -83.7483); // GET POINT FROM bestPoint

	typesArray = placeTypes();

	map = new google.maps.Map(document.getElementById('map'), {
		center: pyrmont,
		zoom: 15
	});

	var request = {
		location: pyrmont,
		radius: '5000',
		types: [typesArray]
	};

	service = new google.maps.places.PlacesService(map);
	service.nearbySearch(request, callback);
}

function callback(results, status) {
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		for (var i = 0; i < results.length; i++) {
		var place = results[i];
		console.log(place.name);
		console.log(place.website);
		createMarker(results[i]);
		}

	document.getElementById("map").src="https://www.google.com/maps/embed/place?q=" + point.lat + "%2C" + point.lng;
  	}
}


function placeTypes() {
	var e = document.getElementById("type");
	var chosenType = e.options[e.selectedIndex].value;
	console.log(chosenType);
	return chosenType;
}

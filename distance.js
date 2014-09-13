var map;
var service;
var infowindow;

function initialize() {

	var pyrmont = new google.maps.LatLng(42.2814, -83.7483); // GET POINT FROM bestPoint

<<<<<<< HEAD
//0 is car, 1 is bike, 2 walk, 3 public transit

getOpt(datapoints) {

    var x_cord_avg = 0;
    var total = 0;

    for(var j = 0; j < datapoints.length; j++) {

        if(datapoints[j].tt == 0) {
            x_cord_avg += datapoints[j].lat * 11.5;
            total += 11.5;
        }

        else if(datapoints[j].tt == 1) {
            x_cord_avg += datapoints[j].lat * 29.0;
            total += 29.0;
        }

        else if(datapoints[j].tt == 2) {
            x_cord_avg += datapoints[j].lat * 88.5;
            total += 88.5;
        }

        else if(datapoints[j].tt == 3) {
            x_cord_avg += datapoints[j].lat * 20.0;
            total += 20.0
        }        
    }

    x_cord_avg = x_cord_avg/total;

  //------------------------------------------------------------
    var y_cord_avg = 0;
    var y_total = 0;

    for(var k = 0; k < datapoints.length; k++) {

        if(datapoints[k].tt == 0) {
            y_cord_avg += datapoints[k].lng * 11.5;
            y_total += 11.5;
        }

        else if(datapoints[k].tt == 1) {
            y_cord_avg += datapoints[k].lng * 29.0;
            y_total += 29.0;
        }

        else if(datapoints[k].tt == 2) {
            y_cord_avg += datapoints[k].lng * 88.5;
            y_total += 88.5;
        }

        else if(datapoints[k].tt == 3) {
            y_cord_avg += datapoints[k].lng * 20.0;
            y_total += 20.0
        }        
    }

    y_cord_avg = y_cord_avg/y_total;

    return [x_cord_avg, y_cord_avg];
}


function gps(address) {
    var api_key = 'AIzaSyC2Z7FZ2GdFBy_U4vCaEDmJohihq627ia0';
=======
	typesArray = placeTypes();
>>>>>>> FETCH_HEAD

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

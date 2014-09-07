var numElts = 2;
var result = new Array(3);
var people = new Array();
var bestPoint = new Array(2);

function delay(time) {
  var d1 = new Date();
  var d2 = new Date();
  while (d2.valueOf() < d1.valueOf() + time) {
    d2 = new Date();
  }
}

function add_fields() {
	numElts++;
    var newspan = document.createElement('span');
    newspan.innerHTML = '<div class="person"><input type="text" id="a' + numElts + '" placeholder="Address ' + numElts + '" onclick="add_autocomplete(' + numElts + ');"' + "><select id=t" + numElts + "><option value=0>Car</option><option value=1>Bike</option><option value=2>Walk</option><option value=3>Pub. Transit</option></select></div>";
    document.getElementById('addresses').appendChild(newspan);

}

function get_coordinates(i) {
	var address = document.getElementById('a' + i).value;
	console.log(address);
	
	return $.getJSON('https://maps.google.com/maps/api/geocode/json?address=' + address + '&sensor=false&key=AIzaSyC2Z7FZ2GdFBy_U4vCaEDmJohihq627ia0',function(data) {
		var location = data.results[0].geometry.location;
		result[0] = location.lat;
		result[1] = location.lng;
		result[2] = document.getElementById('t' + i).value;
		//console.log(result);
	});

}
			
function mothership() {
	for (var i = 0; i < numElts; i++)
	{
		var id = i + 1;
		$.when(get_coordinates(id)).then( function()
		{
			people.push( result );
		});
	}
	getOpt();
}

function getOpt() {
console.log(people);
    var x_cord_avg = 0;
    var total = 0;

    for(var j = 0; j < numElts; j++) {

        if(people[j][2] == 0) {
            x_cord_avg += people[j][0] * 11.5;
            total += 11.5;
        }

        else if(people[j][2] == 1) {
            x_cord_avg += people[j][0] * 29.0;
            total += 29.0;
        }

        else if(people[j][2] == 2) {
            x_cord_avg += people[j][0] * 88.5;
            total += 88.5;
        }

        else if(people[j][2] == 3) {
            x_cord_avg += people[j][0] * 20.0;
            total += 20.0
        }        
    }

    x_cord_avg = x_cord_avg/total;

  //------------------------------------------------------------
    var y_cord_avg = 0;
    var y_total = 0;

    for(var k = 0; k < numElts; k++) {

        if(people[k][2] == 0) {
            y_cord_avg += people[k][1] * 11.5;
            y_total += 11.5;
        }

        else if(people[k][2] == 1) {
            y_cord_avg += people[k][1] * 29.0;
            y_total += 29.0;
        }

        else if(people[k][2] == 2) {
            y_cord_avg += people[k][1] * 88.5;
            y_total += 88.5;
        }

        else if(people[k][2] == 3) {
            y_cord_avg += people[k][1] * 20.0;
            y_total += 20.0
        }        
    }

    y_cord_avg = y_cord_avg/y_total;

	bestPoint[0] = x_cord_avg;
	bestPoint[1] = y_cord_avg;
	
    //return [x_cord_avg, y_cord_avg];
}

function find_average() {
	var lat = 0;
	var lng = 0;
	for (var j = 0; j < numElts; j++) {
	console.log(j);
	console.log(numElts); 	
	console.log(people[j]);
		lat += people[j].lat;
		lng += people[j].lng;
	}
	bestPoint = result;
	bestPoint.lat = lat / numElts;
	bestPoint.lng = lng / numElts;
	bestPoint.tt = 100;
	alert("hello");
}

function add_autocompleteA1(){
	var input = document.getElementById('a1');
	var searchBox = new google.maps.places.Autocomplete(input, {});
}

function add_autocompleteA2(){
	var input = document.getElementById('a2');
	var searchBox = new google.maps.places.Autocomplete(input, {});
}

function add_autocomplete(numElts){
	var input = document.getElementById('a' + numElts);
	var searchBox = new google.maps.places.Autocomplete(input, {});
}


/*
function point(lat, lng) {
	this.lat = lat;
	this.lng = lng;
}

function gps(address) {
	var api_key = 'AIzaSyC2Z7FZ2GdFBy_U4vCaEDmJohihq627ia0';

	var text_address = address;

	var coordinates = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address '&key=' + api_key;

	var lat = coordinates.results[0].geometry.location.lat;
	var lng = coordinates.results[0].geometry.location.lng;

	var point = new pt(lat, lng);
	return pt;
}


function find_point(){
	alert("hello world");

//	point pts_arr[5];

//	var pts_arr = new point(gps(document.getElementById('a1')));
//	pts_arr[2] = gps(document.getElementById('a2'));
//	pts_arr[3] = gps(document.getElementById('a3'));
//	pts_arr[4] = gps(document.getElementById('a4'));
//	pts_arr[5] = gps(document.getElementById('a5'));

//	var r_lat = (pts_arr[1].lat + pts_arr[2].lat + pts_arr[3].lat + pts_arr[4].lat + pts_arr[5].lat) / 5;
//	var r_lng = (pts_arr[1].lng + pts_arr[2].lng + pts_arr[3].lng + pts_arr[4].lng + pts_arr[5].lng) / 5;

//	point result(r_lat, r_lng);

//	alert(result.r_lat);

//	return result;
}

function find_point(){
	alert("hello world");

	var pts_arr = new point();

	pts_arr.push(new point());
/*
	pts_arr[1] = gps(document.getElementById('a1'));
	pts_arr[2] = gps(document.getElementById('a2'));
	pts_arr[3] = gps(document.getElementById('a3'));
	pts_arr[4] = gps(document.getElementById('a4'));
	pts_arr[5] = gps(document.getElementById('a5'));

	var r_lat = (pts_arr[1].lat + pts_arr[2].lat + pts_arr[3].lat + pts_arr[4].lat + pts_arr[5].lat) / 5;
	var r_lng = (pts_arr[1].lng + pts_arr[2].lng + pts_arr[3].lng + pts_arr[4].lng + pts_arr[5].lng) / 5;

	var result = new point(r_lat, r_lng);

*/
/*
	alert("hello 1");

//	return result;
}

function point(lat, lng) {
	this.lat = lat;
	this.lng = lng;
}

function gps(address) {
	var api_key = 'AIzaSyC2Z7FZ2GdFBy_U4vCaEDmJohihq627ia0';

	var text_address = address;

	var coordinates = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + api_key;

	var lat = coordinates.results[0].geometry.location.lat;
	var lng = coordinates.results[0].geometry.location.lng;

	var point = new pt(lat, lng);
	return pt;
}
*/


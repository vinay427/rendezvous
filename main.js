var numElts = 2;
var result;
var people = new Array();

function add_fields() {
	numElts++;
    var newspan = document.createElement('span');
    newspan.innerHTML = '<div class="person"><input type="text" id="a' + numElts + '" placeholder="Address ' + numElts + '" onclick="add_autocomplete(' + numElts + ');"' + "><select id=t" + numElts + "><option id=0>Car</option><option id=1>Bike</option><option id=2>Walk</option><option id=3>Pub. Transit</option></select></div>";
    document.getElementById('addresses').appendChild(newspan);

}

function get_coordinates(i) {
	var address = document.getElementById('a' + i).value;
	console.log(address);
	
	return $.getJSON('https://maps.google.com/maps/api/geocode/json?address=' + address + '&sensor=false&key=AIzaSyC2Z7FZ2GdFBy_U4vCaEDmJohihq627ia0',function(data) {
		var location = data.results[0].geometry.location;
		location.tt = document.getElementById('t' + i).value;
		result = location;

	});

}


function mothership() {
	for (var i = 0; i < numElts; i++) {
		var id = i + 1;
		$.when(get_coordinates(id)).then( function() {
			people.push( result );
		});
	}
	
}

function remove_fields() {

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


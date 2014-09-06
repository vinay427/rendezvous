42.298592, -83.721382
42.261379, -83.746788
42.284243, -83.779060
getDestance()

for x in (1, 100):
    for y in (1, 100):


function gps(address) {
    var api_key = 'AIzaSyC2Z7FZ2GdFBy_U4vCaEDmJohihq627ia0';

    var text_address = address;

    var coordinates = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address '&key=' + api_key;

    var lat = coordinates.results[0].geometry.location.lat;
    var lng = coordinates.results[0].geometry.location.lng;

    var point = new pt(lat, lng);
    return pt;
}


$.getJSON( "https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + api_key", function( data ) {
  var items = [];4
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
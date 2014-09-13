42.298592, -83.721382
42.261379, -83.746788
42.284243, -83.779060
getDestance()

for x in (1, 100):
    for y in (1, 100):


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

    var text_address = address;

    var coordinates = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address '&key=' + api_key;

    var lat = coordinates.results[0].geometry.location.lat;
    var lng = coordinates.results[0].geometry.location.lng;

    var point = new pt(lat, lng);
    return pt;
}


$.getJSON( "ajax/test.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
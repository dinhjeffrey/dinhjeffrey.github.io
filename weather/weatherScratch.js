

function geoLocation() {
  console.log('1');
  function getCity(latlng) {
    console.log("4");
    // https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingStatusCodes
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
      'latLng': latlng
    }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        console.log(results[0].address_components);
        // if (results[0]) {
        //   var city;
        //   var i = 0;
        //   while (!city && i< results[0].address_components.length) {
        //     if (results[0].address_components[i].types.indexOf("locality") >= 0) {
        //       city = results[0].address_components[i].long_name;
        //       weather(city); // weather() function not defined yet
        //     }
        //     i++;
        //   }
        // }
        var arrAddress = [];
        for (i=0; i<results[0].address_components.length; i++){
          // console.log(results[0].address_components[i]["long_name"]);
          arrAddress.push(results[0].address_components[i]["long_name"]);
        }
        var address = arrAddress.join(' ');
        console.log(address);
        var html = "<div><h3>" + address + "</h3></div>"; 
        $("#display").prepend(html);
        weather(address);
        $(".legend2").show();
      } else { console.log("Could not find city"); }
    });
  }

  function processUserLoc() {
    console.log("2")
      // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
      if ("geolocation" in navigator) {
        console.log("3")
        // if geolocation is available
        navigator.geolocation.getCurrentPosition(function(position) {
          var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          getCity(latlng);
        });
      } else {
        //error function - location not available
        alert("location is not available")
      }
  }
  processUserLoc();
}

// uses api.openweathermap.org for weather
function weather(location) {
  var url = "http://api.openweathermap.org/data/2.5/weather?";
  var key = "3a53d3f03d189f460e7bd9e53adfa628";
  $.getJSON(url + "q=" + location + "&APP=" + key + "&units=imperial", function(data) {
    var html = "<div><h3>It is " + data.main.temp + " degrees and it outside seems likely " + data.weather.description + "</h3></div>";
    $("#temp").prepend(html);
  })
}







$(document).ready(function(){
  console.log("0")
  $(".legend2").hide();
  geoLocation();
});


// done
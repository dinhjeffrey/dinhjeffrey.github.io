
// function geoLocation() {
//   console.log("1")
//   function getCity(latlng) {
//     console.log("4")
//     var geocoder = new google.maps.Geocoder();
//     geocoder.geocode({
//       'latLng': latlng
//     }, function(results, status) {
//       if (status == google.maps.GeocoderStatus.OK) {
//               //console.log(results[0].address_components);
//               if (results[0]) {
//                 var city;
//                 var i = 0;
//                 while (!city && i < results[0].address_components.length) {
//                   if (results[0].address_components[i].types.indexOf("locality") >= 0) {
//                     city = results[0].address_components[i].long_name;                                       
//                     weather(city); // not defined yet
//                   }
//                   i++;
//                 }
//               }
//             } 
//             else {
//               console.log("Could not find city");
//             }
//           });
//   }

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
        if (results[0]) {
          var city;
          var i = 0;
          while (!city && i< results[0].address_components.length) {
            if (results[0].address_components[i].types.indexOf("locality") >= 0) {
              city = results[0].address_components[i].long_name;
              weather(city); // weather() function not defined yet
            }
            i++;
          }
        }
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







$(document).ready(function(){
  console.log("0")
  geoLocation();
// done
});
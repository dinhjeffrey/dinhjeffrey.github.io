

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
  $.getJSON(url + "q=" + location + "&APPID=" + key + "&units=imperial", function(data) {
    // console.log(data.weather[0].description)
    var html = "<div><h3>It is <div id='convert'>" + data.main.temp + "F</div> and it outside seems likely " + data.weather[0].description + "</h3><img src=http://openweathermap.org/img/w/" + data.weather[0].icon + ".png></div>";
    $("#temp").prepend(html);
    $(".legend2").show();
  })
}

// $("#convert").click(function(){
//   // .innerHTML used for divs and similar tags
//   // .value used for forms and inputs
//   var temp = document.getElementById("convert").innerHTML;
//   console.log(temp);
//   if(temp.slice(-1) === 'C'){ // 
//     document.getElementById('convert').innerHTML = Math.round(32 + temp2 * 1.8).toFixed(1)  +  "F";     
//   }
//   if(temp.slice(-1) === 'F') {
//     document.getElementById('convert').innerHTML = Math.round((temp2 - 32) / 1.8).toFixed(1) +  "C";
//   }
// });






$(document).ready(function(){
  console.log("0")
  $(".legend2").hide();
  geoLocation();
  $('#convert').on('click', function() {  
        var temp = document.getElementById("convert").innerHTML;
        console.log(temp);
        if(temp.slice(-1) === 'C'){ // 
          document.getElementById('convert').innerHTML = Math.round(32 + temp2 * 1.8).toFixed(1)  +  "F";     
        }
        if(temp.slice(-1) === 'F') {
          document.getElementById('convert').innerHTML = Math.round((temp2 - 32) / 1.8).toFixed(1) +  "C";
        }
    });
});


// done
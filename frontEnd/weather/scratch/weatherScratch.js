// ============================== share-stuff ==========================
$(".fa-share-alt").click(function(){
  $(".share").animate({
    width: "400px",
    height: "300px"
  }, 400, function(){
    $(".fa-share-alt").animate({
      opacity: 0
    }, 400, function(){
      $(".social").animate({
        top:"50%",
        opacity: 1,
        easing: "ease-in"
      }, 1000)
    })
  });
})
$(".fa-twitter").click(function(){
  $(this).addClass("shared");
  window.open('https://www.twitter.com/intent/tweet?url=http://www.dindledoo.com/fccProjects/tic-tac-toe/tic-tac-toe.html', 'twitterShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
})
$(".fa-facebook").click(function(){
  $(this).addClass("shared");
  window.open('https://www.facebook.com/sharer/sharer.php?u=http://www.dindledoo.com/fccProjects/tic-tac-toe/tic-tac-toe.html', 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
})
$(".fa-google-plus").click(function(){
  $(this).addClass("shared");
  window.open('https://plus.google.com/share?url=http://www.dindledoo.com/fccProjects/tic-tac-toe/tic-tac-toe.html', 'googleShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
})

$(".fa-close").click(function(){
  $(".social").animate({
    top: "-250%",
    opacity: 0,
    easing: "ease-out"
  }, 500, function(){
    $(".share").animate({
      width: "40px",
      height: "40px"
    }, 400, function(){
      $(".fa-share-alt").animate({
        opacity: 1
      }, 400)
    })
  });
})


// ============================== end:share-stuff ==========================

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
        var html = `<div><h3>  ${address}  </h3></div>`; 
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
    var html = "<div><h3>It is <button id='convert'>" + data.main.temp + "F</button> and it outside seems likely " + data.weather[0].description + "</h3><img src=http://openweathermap.org/img/w/" + data.weather[0].icon + ".png></div>";
    $("#temp").prepend(html);
    $(".legend").hide();
  })
}



// $('#convert').click(function() {  
//         console.log("success :)")
//         var temp = document.getElementById("convert").innerHTML;
//         var tempNoDegrees = temp.slice(0,-1);
//         if(temp.slice(-1) === 'C'){ 
//           document.getElementById('convert').innerHTML = Math.round(32 + tempNoDegrees * 1.8).toFixed(1)  +  "F";     
//         }
//         if(temp.slice(-1) === 'F') {
//           document.getElementById('convert').innerHTML = Math.round((tempNoDegrees - 32) / 1.8).toFixed(1) +  "C";
//         }
// });
  
// it is a dynamically created button so we got to use $document.(on) function
$(document).on('click', '#temp #convert', function(){ 
     // Your Code
     var temp = document.getElementById("convert").innerHTML;
        var tempNoDegrees = temp.slice(0,-1);
        if(temp.slice(-1) === 'C'){ 
          document.getElementById('convert').innerHTML = Math.round(32 + tempNoDegrees * 1.8).toFixed(1)  +  "F";     
        }
        if(temp.slice(-1) === 'F') {
          document.getElementById('convert').innerHTML = Math.round((tempNoDegrees - 32) / 1.8).toFixed(1) +  "C";
        }
 });





$(document).ready(function(){
  console.log("0")
  geoLocation();
});


// done
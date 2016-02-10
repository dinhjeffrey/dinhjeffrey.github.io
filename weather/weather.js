
function geoLocation() {
  function getCity(latlng) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
      'latLng': latlng
    }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
              //console.log(results[0].address_components);
              if (results[0]) {
                var city;
                var i = 0;
                while (!city && i < results[0].address_components.length) {
                  if (results[0].address_components[i].types.indexOf("locality") >= 0) {
                    city = results[0].address_components[i].long_name;                                       
                    weather(city);
                  }
                  i++;
                }
              }
            } 
            else {
              console.log("Could not find city");
            }
          });
  }

  function processUserLoc() {
      //check for navigator
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {

          var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          getCity(latlng);
        });
      } 
      else {
        //error function - location not available
        alert("location is not available")
      }
    }

    processUserLoc();
  }

// uses api.openweathermap.org for weather

function weather(city){
  var url = "http://api.openweathermap.org/data/2.5/weather?";
  var key = "3a53d3f03d189f460e7bd9e53adfa628"
  //console.log(url + 'q=' + city + "&APPID=" + key +"&units=metric");
  // main is temp, pressure humidity, temp min, temp max
  // weather is id, main, description, icon
  // temp is is first teamp of data.weather. toFixed keeps it to 1 decimal place. &deg; is the small o C.
  // we get unix timestamp and convert it using new Date * 1000 because that's how we get current date. We get hours and minutes. subtract 12 from PM hour to get it in 12 hour format.
  // name is name of city
  $.getJSON(url + 'q=' + city + "&APPID=" + key +"&units=metric", function(data){
    var main = data.main, weather = data.weather[0], temp = main.temp.toFixed(1), name = data.name, 
    country = data.sys.country, sunrise = new Date(data.sys.sunrise * 1000), sunset = new Date(data.sys.sunset * 1000); 
    var sunIcon = "http://findicons.com/files/icons/2232/wireframe_mono/16/sun.png";
    document.getElementById('sunrise').innerHTML = '<img src='+sunIcon+'>' + sunrise.getHours() + ":" + sunrise.getMinutes()+"am"; 
    var moonIcon = "http://findicons.com/files/icons/1667/iconic/12/moon_fill.png"; 
    document.getElementById('sunset').innerHTML = '<img src='+moonIcon+'>' + Number(sunset.getHours()-12) + ":" + sunset.getMinutes()+"pm";
    document.getElementById('temp').innerHTML = (32 + temp * 1.8).toFixed(0) +  "&deg; F";      
    document.getElementById('city').innerHTML = name;
    document.getElementById('country').innerHTML = ", "+country;
    document.getElementById('data').innerHTML =  weather.description.split(' ').map(function(elem){ return elem[0].toUpperCase() + elem.slice(1)}).join(' ');
    // var icon = "https://openweathermap.org/img/w/" + weather.icon + ".png";
    // document.getElementById('icon').innerHTML = '<img src='+icon+'>';
    background(name);
    setBackgroundGif(weather.main);
  });  

};



function converter(temp){
  var temp2 = temp.slice(0,2); // 2 digits
  if(temp[temp.length - 1] === 'C'){ // 
    document.getElementById('temp').innerHTML = Math.round(32 + temp2 * 1.8).toFixed(1)  +  "&deg; F";     
  }
  if(temp[temp.length - 1] === 'F') {
    document.getElementById('temp').innerHTML = Math.round((temp2 - 32) / 1.8).toFixed(1) +  "&deg; C";
  }
}
// gets class button link and makes it clicky. gets what is in #temp and assigns to var temp
// executes function converter on var temp
$('.link').click(function(){
  var temperature = document.getElementById('temp').innerHTML;
  converter(temperature);
});

// use // instead of https:// to avoid "sorry no imagery here"
function background(city){
  var viewUrl = "//maps.googleapis.com/maps/api/streetview?size=400x400&location=" + city +"&fov=90&heading=235&pitch=10"; 
  $('body').append("<style>html { background: url(" + viewUrl + ") no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover;          -o-background-size: cover;          background-size: cover;        }      </style>");  
}
function setBackgroundGif(type){
  var gifs = {
    rain : "https://media.giphy.com/media/rR2AWZ3ip77r2/giphy.gif",
    thunderstorm : "http://24.media.tumblr.com/tumblr_mc6ev8S1j71r84emlo1_500.gif",
    clouds : "https://45.media.tumblr.com/7b31ca748a52dc3157cdd8f0a4e174db/tumblr_njh1vl149B1unuxago1_500.gif",
    clear: "https://media0.giphy.com/media/gIsilviPHZ0iY/200.gif",
    snow: "https://media0.giphy.com/media/fraFWJOtGih9u/200.gif",
    drizzle: "https://media3.giphy.com/media/2SwbBd39ak7YY/200.gif",
    atmosphere: "https://33.media.tumblr.com/f05cf4eaa6970b665ca49d3778b5367a/tumblr_mx1izjy2Di1szg5ddo1_500.gif",
    extreme: "http://static.comicvine.com/uploads/scale_super/11113/111130700/4755736-3274899146-Yzvq8.gif",
    additional: "https://s-media-cache-ak0.pinimg.com/originals/f1/14/1e/f1141edf46b06052939f8fa1c890feb6.gif",
  }  
  $('.main').append("<style>.main { background: url(" + gifs[type.toLowerCase()] + ") no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover;          background-size: cover;        }</style>");    
}



$('#locate').click(function(e){
  var city = $('#search').val();  
  if(!city){
    $('#search').attr('placeholder', '   Please Enter A City Name');
  }
  else{
    $('#search').attr('placeholder', '   Enter City Name');
  }
  weather(city);
});

// when pressing enter in search bar, it will click the locate button
$('#search').keypress(function (e) { 
 var key = e.which;
 if(key == 13){
  $('#locate').click();
  return false;  
}
});   

geoLocation();
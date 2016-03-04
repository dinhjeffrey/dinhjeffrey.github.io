
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
  var url = "https://api.openweathermap.org/data/2.5/weather?";
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
    var sunIcon = "https://findicons.com/files/icons/2232/wireframe_mono/16/sun.png";
    document.getElementById('sunrise').innerHTML = '<img src='+sunIcon+'>' + sunrise.getHours() + ":" + sunrise.getMinutes()+"am"; 
    var moonIcon = "https://findicons.com/files/icons/1667/iconic/12/moon_fill.png"; 
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
  var viewUrl = "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=" + city +"&fov=90&heading=235&pitch=10"; 
  $('body').append("<style>html { background: url(" + viewUrl + ") no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover;          -o-background-size: cover;          background-size: cover;        }      </style>");  
}
function setBackgroundGif(type){
  var gifs = {
    rain : "https://media.giphy.com/media/rR2AWZ3ip77r2/giphy.gif",
    thunderstorm : "https://s-media-cache-ak0.pinimg.com/originals/8f/5d/24/8f5d24447dc5bb0630323f8db9aaf5e2.gif",
    clouds : "https://49.media.tumblr.com/e6d98d675d54123af32ace5829470452/tumblr_o10o5xzrM31udnvg3o1_500.gif",
    clear: "https://45.media.tumblr.com/d644a794735885c7f91cd454a63496c3/tumblr_nigue1Rkfu1tqnefqo1_500.gif",
    haze: "https://chicgeekspeaks.files.wordpress.com/2014/04/tumblr_n2s1pkcyib1r93041o1_500.gif",
    mist: "https://chicgeekspeaks.files.wordpress.com/2014/04/tumblr_n2s1pkcyib1r93041o1_500.gif",
    dust: "https://s-media-cache-ak0.pinimg.com/originals/c8/db/48/c8db4861b237898512da1c1f35e87231.jpg",
    snow: "https://33.media.tumblr.com/d7502507d4b5974314ae72e61ee581db/tumblr_nb32o9WTxa1r8zm42o1_500.gif"
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
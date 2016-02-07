var channels = ["freecodecamp", "brunofin", "medrybw", 'marmaladenightmare'];

function getChannelInfo() {
  channels.forEach(function(channel) { /* Now that we're getting data from a JSON API, let's display it in our HTML.
										We can use the .forEach() method to loop through our data and modify our HTML elements.
										http://www.freecodecamp.com/challenges/convert-json-data-to-html
											*/
	
    function makeURL(type, name) {
      return 'https://api.twitch.tv/kraken/' + type + '/' + name + '?callback=?'; // makes api. (The ordering for this matters.)
    };
    $.getJSON(makeURL("streams", channel), function(data) { // request data from external source(API). JSON is data where as jQuery is functionality. http://www.freecodecamp.com/challenges/get-json-with-the-jquery-getjson-method 
      var game, // creates var game and status
          status;
      if (data.stream === null) { // data calls upon data in JSON
        game = "Offline";
        status = "offline";
      } else if (data.stream === undefined) {
        game = "Account Closed";
        status = "offline";
      } else {
        game = data.stream.game; // .game is a key in the JSON. shows the game
        status = "online";
      };
      $.getJSON(makeURL("channels", channel), function(data) { 
        var logo = data.logo != null ? data.logo : "http://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png", // if user is offline and has icon, display it, if not, display a default offline icon
          name = data.display_name != null ? data.display_name : channel,
          description = status === "online" ? ': ' + data.status : "";
          html = '<div class="row ' + 
          status + '"><div class="col-xs-2 col-sm-1" id="icon"><img src="' +  // status for online, offline
          logo + '" class="logo"></div><div class="col-xs-10 col-sm-2" id="name"><a href="' + 
          data.url + '" target="_blank"></div><div>' + // open channel in a new url 
          name + '</a></div><div class="col-xs-10 col-sm-8" id="streaming">'+ 
          game + '<span class="hidden-xs">' + 
          description + '</span></div></div>';
        status === "online" ? $("#display").prepend(html) : $("#display").append(html);
      });
    });
  });
};

$(document).ready(function() { // makes it so all code inside of it only runs once our page loads. http://www.freecodecamp.com/challenges/trigger-click-events-with-jquery
  getChannelInfo();
  $(".selector").click(function() { // When our click event happens, we can use Ajax to update an HTML element.  http://www.freecodecamp.com/challenges/change-text-with-click-events
    $(".selector").removeClass("active"); // makes that previous class not active
    $(this).addClass("active"); // makes the current class active
    var status = $(this).attr('id');
    if (status === "all") { 
      $(".online, .offline").removeClass("hidden"); // jQuery that thats hidden off of .online and .offline class, showing both of them
    } else if (status === "online") { // if online, takes hidden off of online, to show online
      $(".online").removeClass("hidden");
      $(".offline").addClass("hidden"); // hides offline
    } else {
      $(".offline").removeClass("hidden"); // if offline, takes hidden off of offline, to show offline
      $(".online").addClass("hidden"); // hides online
    }
  })
});
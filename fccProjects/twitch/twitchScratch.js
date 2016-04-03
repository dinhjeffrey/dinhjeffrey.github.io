
var channels = ["rozoken", "medrybw"];
var newChannels = [];
var a = 'success :)';

// Use window.onload to see if jQuery works. need to import it <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'>
// window.onload = function() {
//     if (window.jQuery) {  
//         // jQuery is loaded  
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }

function addChannels() {
	var textBox = document.getElementById("textBox").value;
	newChannels.push(textBox);
	console.log(newChannels);
	document.getElementById("textBox").value = "";
	getChannelInfo2(newChannels);
	newChannels.pop();
};
function getChannelInfo2(input) {
	input.forEach(function(input) { // forEach executes function once per each element in arr
		// from getJSON (type is "streams", name is channel)
		function makeURL(name) {
			return 'https://api.twitch.tv/kraken/streams/' + name;
		};
		function makeURL2(name) {
			return 'https://api.twitch.tv/kraken/channels/' + name;	
		};
		// function(data) is a plain object or string that is sent to the server with the request
		$.getJSON(makeURL(input), function(data) { // load JSON encoded data from server via HTTP request
			var game,
				status;
			if (data.stream === null) { // makes the status
				game = "Offline";
				status = "offline";
			} else if (data.stream === undefined) {
				game = "Account Closed";
				status = "offline";
			} else {
				game = data.stream.game;
				status = "online"; 
			};
			$.getJSON(makeURL2(input), function(data) {
				
				if (data.logo === null){
					data.logo = 'http://img12.deviantart.net/1778/i/2014/159/2/8/offline_banner_by_eeveeflare-d7lhsnr.png';
				}
				// defining var logo, name, description status
				var logo = data.logo != null ? data.logo : "http://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F", // makes the logo
				name = data.display_name != null ? data.display_name : channels,
				description = status === "online" ? ': ' + data.status : '';
				// making the html in vanillajs
				var html = '<div class="fbBlue online"><h2 class="white">' + data.name + ' playing ' + data.game + 
				'</h2><a href='+  data.url +'><img src=' + data.logo + '></a><br><i class="white">' + data.status +'</i></div>';
				var html2 = '<div class="grey offline"><h2 class="darkGrey"><i>' + data.name + ' is Offline</i>' + 
				'</h2><a href='+  data.url +'><img src=' + data.logo + ' height="300" width="300"></a><br><i class="darkGrey">' + data.status +'</i></div>';
				// prepend: inserts content, specified by the parameter, to the beginning of each element in the set of matched elements
				// append: inserts content, specified by the parameter, to the end of each element in the set of matched elements 
				status === "online" ? $("#display").prepend(html) : $("#display").append(html2);
			})
		})
		.fail(function() {
    		var html2 = '<div class="grey offline"><h2 class="darkGrey"><i>' + input + '`s account is closed.</i>' + 
				'</h2><img src=https://pbs.twimg.com/media/CMiMvsQWIAE2W2G.png height="300" width="600"></div>';
				// prepend: inserts content, specified by the parameter, to the beginning of each element in the set of matched elements
				// append: inserts content, specified by the parameter, to the end of each element in the set of matched elements 
				status === "online" ? $("#display").prepend(html) : $("#display").append(html2);
  		})
	});
};

function getChannelInfo() {
	channels.forEach(function(channels) { // forEach executes function once per each element in arr
		// from getJSON (type is "streams", name is channel)
		function makeURL(name) {
			return 'https://api.twitch.tv/kraken/streams/' + name;
		};
		function makeURL2(name) {
			return 'https://api.twitch.tv/kraken/channels/' + name;
		};
		// function(data) is a plain object or string that is sent to the server with the request
		$.getJSON(makeURL(channels), function(data) { // load JSON encoded data from server via HTTP request
			var game,
				status;
			if (data.stream === null) { // makes the status
				game = "Offline";
				status = "offline";
			} else if (data.stream === undefined) {
				game = "Account Closed";
				status = "offline";
			} else {
				game = data.stream.game;
				status = "online"; 
			};
			$.getJSON(makeURL2(channels), function(data) {
				// defining var logo, name, description status
				var logo = data.logo != null ? data.logo : "http://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F", // makes the logo
				name = data.display_name != null ? data.display_name : channels,
				description = status === "online" ? ': ' + data.status : '';
				// ================ online =================
				var html = '<a href='+  data.url + ' target=_"blank" style="text-decoration: none;"><div class="fbBlue online"><h4 class="white">' + data.name + ' playing ' + data.game + 
				'</h4><img src=' + data.logo + ' style="width:60px;height:60px;border-radius:50%"><i class="white">' + data.status +'</i></div></a>';
				// =============== end:online =================
				// ================ offline =================
				var html2 = '<a href='+  data.url + ' target=_"blank" style="text-decoration: none;"><div class="grey offline"><h4 class="darkGrey"><i>' + data.name + ' is Offline</i>' + 
				'</h4><img src=' + data.logo + ' style="width:60px;height:60px;border-radius:50%"><i class="darkGrey">' + data.status +'</i></div></a>';
				// ================ end:offline =================
				// prepend: inserts content, specified by the parameter, to the beginning of each element in the set of matched elements
				// append: inserts content, specified by the parameter, to the end of each element in the set of matched elements 
				status === "online" ? $("#display").prepend(html) : $("#display").append(html2);
			});
		});
	});
};

// runs once in the beginning to make sure JS is working
//http://jsfiddle.net/YnFWX/1/ on how hiding and showing context works
// uses jQuery .hide() and .show()
$(document).ready(function() { // will run once DOM is ready for JS to execute safely
	getChannelInfo(); // invokes getChannelInfo()
	$(".selector").click(function() { // bind an event handler to the "click" JS event
		$(".selector").removeClass("active"); // remove a single class, multiple classes, or all classes from each element in the set of matched elements
		$(this).addClass("active"); // add the specified class(es) to each element in the set of matched elements
		var status = $(this).attr('id'); // get the value of an attribute for the first element in the set of matched elements)
		if (status === "all") {
			$(".online, .offline").show(); 
		} else if (status === "online") {
			$(".online").show();
			$(".offline").hide();
		} else {
			$(".offline").show();
			$(".online").hide();
		}
	})
});



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
  window.open('https://www.twitter.com/intent/tweet?url=http://www.dindledoo.com/fccProjects/twitch/twitchScratch.html', 'twitterShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
})
$(".fa-facebook").click(function(){
  $(this).addClass("shared");
  window.open('https://www.facebook.com/sharer/sharer.php?u=http://www.dindledoo.com/fccProjects/twitch/twitchScratch.html', 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
})
$(".fa-google-plus").click(function(){
  $(this).addClass("shared");
  window.open('https://plus.google.com/share?url=http://www.dindledoo.com/fccProjects/twitch/twitchScratch.html', 'googleShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
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






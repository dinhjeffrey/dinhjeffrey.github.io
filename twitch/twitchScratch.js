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
				// defining var logo, name, description status
				var logo = data.logo != null ? data.logo : "http://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F", // makes the logo
				name = data.display_name != null ? data.display_name : channels,
				description = status === "online" ? ': ' + data.status : '';
				// making the html in vanillajs
				console.log(data.status)
				var html = '<div class="fbBlue"><h2 class="white">' + data.name + ' playing ' + data.game + 
				'</h2><a href='+  data.url +'><img src=' + data.logo + '></a><br><i class="white">' + data.status +'</i></div>';
				var html2 = '<div class="grey"><h2 class="darkGrey"><i>' + data.name + ' is Offline</i>' + 
				'</h2><a href='+  data.url +'><img src=' + data.logo + '></a><br><i class="darkGrey">' + data.status +'</i></div>';
				// prepend: inserts content, specified by the parameter, to the beginning of each element in the set of matched elements
				// append: inserts content, specified by the parameter, to the end of each element in the set of matched elements 
				status === "online" ? $("#display").prepend(html) : $("#display").append(html2);
			});
		});
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
			console.log(channels, status)
			$.getJSON(makeURL2(channels), function(data) {
				// defining var logo, name, description status
				var logo = data.logo != null ? data.logo : "http://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F", // makes the logo
				name = data.display_name != null ? data.display_name : channels,
				description = status === "online" ? ': ' + data.status : '';
				// making the html in vanillajs
				console.log(data.status)
				var html = '<div class="fbBlue"><h2 class="white">' + data.name + ' playing ' + data.game + 
				'</h2><a href='+  data.url +'><img src=' + data.logo + '></a><br><i class="white">' + data.status +'</i></div>';
				var html2 = '<div class="grey"><h2 class="darkGrey"><i>' + data.name + ' is Offline</i>' + 
				'</h2><a href='+  data.url +'><img src=' + data.logo + '></a><br><i class="darkGrey">' + data.status +'</i></div>';
				// prepend: inserts content, specified by the parameter, to the beginning of each element in the set of matched elements
				// append: inserts content, specified by the parameter, to the end of each element in the set of matched elements 
				status === "online" ? $("#display").prepend(html) : $("#display").append(html2);
			});
		});
	});
};

// runs once in the beginning to make sure JS is working
$(document).ready(function() { // will run once DOM is ready for JS to execute safely
	getChannelInfo(); // invokes getChannelInfo()
	$(".selector").click(function() { // bind an event handler to the "click" JS event
		$(".selector").removeClass("active"); // remove a single class, multiple classes, or all classes from each element in the set of matched elements
		$(this).addClass("active"); // add the specified class(es) to each element in the set of matched elements
		var status = $(this).attr('id'); // get the value of an attribute for the first element in the set of matched elements
		if (status === "all") {
			$(".online, .offline").removeClass("hidden"); 
		} else if (status === "online") {
			$(".online").removeClass("hidden");
			$(".offline").addClass("hidden");
		} else {
			$(".offline").removeClass("hidden");
			$(".online").addClass("hidden");
		}
	})
});






// done
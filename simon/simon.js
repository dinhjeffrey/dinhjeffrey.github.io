$( document ).ready(function() {
    
});


var gameArr = [];
var playingIndex = 0;
var playerIndex = 0;
var timeInterval = 1000;
var playersTurn = false;
var mode;

function strict() {
	mode = "strict";
	$(".strictOff").hide();
	$(".strictOn").show();
}
function normal() {
	mode = "normal";
	$(".strictOn").hide();
	$(".strictOff").show();
}

function step() {
	// generates a random number from 0-3
	// pushes that number to gameArr
	var num = Math.floor(Math.random()*4);
	gameArr.push(num);
	// when gameArr reaches 5 in length decrease timeInterval, and goes even faster at 9, and 13
	if (gameArr.length === 5) {
		timeInterval = 800;
	} else if (gameArr.length === 9) {
		timeInterval = 600;
	} else if (gameArr.length === 13) {
		timeInterval = 400;
	}
	// executes function computerGo()
	computerGo();
	console.log("generates a random number stored in var num, pushes that num to gameArr, if gameArr.length === 5, 9, 13, increment then lower the timeInterval. execute computerGo() function")
}

function computerGo() {
	// sets playingIndex = 0
	playingIndex = 0;
	// sets a var id = function setInterval (JS defined function), but parameters are (function playPiece, num timeInterval)
	// https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval
	// repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. Returns an intervalID
	var id = setInterval (playPiece, timeInterval);
	console.log("sets playingIndex = 0, sets var id = setInterval (playPiece, timeInterval). setInterval is JS defined function. playPiece function is then executed within the function")
	function playPiece() {
		// if computer turn goes the same or over the length of gameArr, it is players turn
		if (playingIndex >= gameArr.length) {
			clearInterval(id);
			playersTurn = true;
			playerIndex = 0;
			console.log("if function in playPiece. If playingIndex >= gameArr.length, then execute JS defined clearInterval(var id), set playersTurn = true,  set playersIndex = 0")
		} else {
			// adds .light class to all .light class
			$(".chrome").children(".light").addClass("light");
			// http://www.w3schools.com/jsref/met_win_settimeout.asp
			// calls a function or evaluates an expression after a specified number of milliseconds
			// adds light and removes after 1/2 second
			// *************** update more info ****************
			setTimeout(function(){
				// https://api.jquery.com/children/
				// Get the children of each element in the set of matched elements, optionally filtered by a selector
				$(".chrome").children(".light").removeClass("light");
			}, 500);
			// https://api.jquery.com/eq/
			// reduce the set of matched elements to the one at the specified index
			// http://www.w3schools.com/tags/av_prop_currenttime.asp
			// currentTime propery, when set, the playback will jump to the specified position
			// http://www.w3schools.com/tags/av_met_pause.asp
			// the pause() method halts the currently playing audio and play() starts playing the current audio
			// increments playingIndex
			$(".chrome").children(".section").eq(gameArr[playingIndex]).addClass("light");
			$(".chrome").children(".sound").get(gameArr[playingIndex]).pause();
			$(".chrome").children(".sound").get(gameArr[playingIndex]).currentTime = 0;
			$(".chrome").children(".sound").get(gameArr[playingIndex]).play();
			playingIndex++;
			console.log("playingIndex:", playingIndex, "gameArr: (count length)", gameArr, "the else statement the executes if playingIndex < gameArr.length. Then adds '.light' class to all '.light' class. Then executes setTimeout() function to remove '.light' class after 1/2 second. Adds '.light' class to '.section' class using .eq jquery. Then it plays the according sound to the section clicked.")
		}
	}
}
// afterclicking start, sets text to RESET, sets timeInterval, creates gameArr, and executes function step() 
$(".start").click(function() {
	$(".start").text("RESET");
	timeInterval = 1000;
	gameArr = [];
	step();
	document.getElementById("start").value = "RESET"
	if (document.getElementById("start").value == "RESET") {
		$("#start").addClass("red");
	} 
	console.log("start button is clicked, sets timeInterval = 1000, gameArr = [], and executes step() function")
});

// whenever you click on one of section
// set var section = -1 and tempColor = false
$(".section").click(function() {
	if (playersTurn) {
		var section = -1;
		var tempColor = false;
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
		// switch statement evaluates an expression, matching the expression's value to a case clause and executes statements associated with that case
		// this is the global object (window)
		// returns the element's ID, but if there is no ID, will return undefined
		// http://api.jquery.com/attr/
		// .attr() gets the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element
		switch ($(this).attr("id")) {
			// has ID 'red'
			case "red":
			// https://api.jquery.com/hasclass/
			//  will return true if the class is assigned to an element
			// sets global var 'tempColor' = true
			// light is a css class, adds it
			// removes css light class after 1/2 sec
			// sets global var 'section' = 0
			// breaks
				if ($(this).hasClass("red2")) {
					// what does tempColor do?
					tempColor = true;
				}
				$("#red").addClass("light");
				setTimeout(function() {
					$("#red").removeClass("light");
				}, 500);
				section = 0;
				break;
			case "yellow":
				if($(this).hasClass("yellow2")) {
					tempColor = true;
				}
				$("#yellow").addClass("light");
				setTimeout(function() {
					$("#yellow").removeClass("light");
				}, 500);
				section = 1;
				break;
			case "green":
				if($(this).hasClass("green2")) {
					tempColor = true;
				}
				$("#green").addClass("light");
				setTimeout(function() {
					$("#green").removeClass("light");
				}, 500);
				section = 2;
				break;
			case "blue":
				$("#blue").addClass("light");
				setTimeout(function() {
					$("#blue").removeClass("light");
				}, 500);
				section = 3;
				break;
		console.log("1st if statement that executes when a section class is clicked. uses switch case, if the section clicked was red, then set tempColor = true, add '.light' class to red and remove after 1/2 second")
		}
		if (!tempColor) {
			$(".chrome").children(".sound").get(section).pause();
			$(".chrome").children(".sound").get(section).currentTime = 0;
			$(".chrome").children(".sound").get(section).play();
			console.log("2nd if statement when a section class is clicked. if tempColor is false (only blue?) then still play sound")
			if(gameArr[playerIndex] === section) {
				playerIndex++;
				console.log("if gameArr[playerIndex] === section  then increment playIndex++ by one")
				if (playerIndex === gameArr.length) {
					step();
					console.log("if playerIndex === gameArr.length, then execute step() function, which makes eventually executes computerGo() function")
				}
			} else if (mode === "strict") {
				timeInterval = 1000;
				gameArr = [];
				step();		
			} else {
				playersTurn = false;
				computerGo();
				console.log("else state from when section is clicked, but else from if(gameArr[playerIndex] === section), then playersTurn is set to false and function computerGo() is executed.")
			}
		}
	}
});




// DONE

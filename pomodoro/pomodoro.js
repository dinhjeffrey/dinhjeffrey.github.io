var startButton = document.getElementById("start"); // gives different variable names to html button id's
var stopButton = document.getElementById("stop");
var resetButton = document.getElementById("reset");
var minsLeft = document.getElementById("mins-left"); // this is a span id. <span> tag is used to group inline-elements in a document.
var secsLeft = document.getElementById("secs-left"); // this is a span id

var startTimer = function(){
	console.log("Start");
  begin = setInterval(countdown, 50); // Call countdown function every 1000 milliseconds and defines begin
	startButton.disabled=true; // disables element in HTML. grays it out.
	stopButton.disabled=false; // the order of these don't matter.
}

var stopTimer = function(){ // 
	console.log("Stop");
	window.clearInterval(begin) // clear the timer which stops the watch
	stopButton.disabled=true;  // stop button is disabled when pressed
	startButton.disabled=false; // start button becomes clickable
}

var resetTimer = function(){
	console.log("Reset");
	window.clearInterval(begin) // clear the timer and so stop the clock
	secsLeft.innerText=00; // gets the secs-Left in HTML, which was assigned to secLeft in JS, and sets it to 00.
	minsLeft.innerText=document.getElementById("mins").innerText; // when reseting, it takes the initial length of time set for the timer and resets it to that number.
	stopButton.disabled=true; // disables stop button
	startButton.disabled=false; // enables start button
}

// This is what makes the clock tick downwards
var countdown = function(){ // calls function countdown, which begins when pressing the start button. 
	console.log("countdown"); 
	if(secsLeft.innerText<=0){ // so basically, at 0, it resets to 60, then counts down.
		secsLeft.innerText=60;
		minsLeft.innerText--; // minute goes down by one when secs = 60		
	};
	secsLeft.innerText--; // keeps the seconds going down by one.  
	
	if(secsLeft.innerText<=0 && minsLeft.innerText<=0){ // when mins and sec == 0, it will play the audio
		window.clearInterval(begin); 
		var audio = new Audio('wc3-im-awake.wav');
		audio.load();
		audio.play(); // audio doesn't work on mobile
	};
}

var more = function(){
	document.getElementById("mins").innerText++;
	minsLeft.innerText = document.getElementById("mins").innerText;
}

var less = function(){
	document.getElementById("mins").innerText--;
	if(document.getElementById("mins").innerText<=1){document.getElementById("mins").innerText=1};
	minsLeft.innerText = document.getElementById("mins").innerText;
}

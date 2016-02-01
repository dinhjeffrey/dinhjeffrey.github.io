var startButton = document.getElementById("start"); // gives different variable names to html button id's
var stopButton = document.getElementById("stop");
var minsLeft = document.getElementById("mins-left"); // this is a span id. <span> tag is used to group inline-elements in a document.
var secsLeft = document.getElementById("secs-left"); // this is a span id
var countJS = document.getElementById('count');
var resetButton = document.getElementById('reset');




var startTimer = function(){
	console.log("Start");
  begin = setInterval(countdown, 1000); // Call countdown function every 1000 milliseconds and defines begin
	startButton.disabled=true; // disables element in HTML. grays it out.
	stopButton.disabled=false; // the order of these don't matter.
	resetButton.disabled=true;

}

var stopTimer = function(){ // 
	console.log("Stop");
	window.clearInterval(begin) // stops the watch, it won't execute the commands below this line if it is at state 'begin'. (start hasn't been push yet)
	stopButton.disabled=true;  // stop button is disabled when pressed
	startButton.disabled=false; // start button becomes clickable
	resetButton.disabled=false;
}

var resetTimer = function(){
	console.log("Reset");
	minsLeft.innerHTML = 25;
	secsLeft.innerHTML = 00;
	startButton.disabled = false;
	stopButton.disabled = true;

}


// This is what makes the clock tick downwards
var countdown = function(){ // calls function countdown, which begins when pressing the start button. 
	console.log("countdown"); 
	if(secsLeft.innerHTML<=0){ // so basically, at 0, it resets to 60, then counts down.
		secsLeft.innerHTML=60;
		minsLeft.innerHTML--; // minute goes down by one when secs = 60		
	};
	secsLeft.innerHTML--; // keeps the seconds going down by one.  
	
	if(secsLeft.innerHTML<=0 && minsLeft.innerHTML<=0){ // when mins and sec == 0, it will play the audio
		stopButton.disabled=true;
		window.clearInterval(begin);  // stops the watch at 0, still allows below to execute.
		var audio = new Audio('wc3-im-awake.wav');
		audio.play(); // audio doesn't work on mobile
		countJS.innerHTML++;
		resetButton.disabled = false;
	};
}






function change() {
	jsMinsTextfield = document.getElementById('mins-textfield').value; // can't use hypens for js variables.
	jsMinsTextfield = Math.floor(jsMinsTextfield);
	jsSecsTextfield = document.getElementById('secs-textfield').value;
	jsSecsTextfield = Math.floor(jsSecsTextfield);
	

	if( jsMinsTextfield<0 || jsSecsTextfield<0){
		alert('Please use positive numbers.');
		return;}
		if (jsSecsTextfield>=60){
			alert('Acceptable values for seconds are from : 0 - 59');
			return;
		}
		if (jsMinsTextfield == 0 && jsSecsTextfield == 0){
			alert('Please set a higher value.');
			return;
		}
		


		jsMinsLeft = document.getElementById('mins-left');
		jsSecsLeft = document.getElementById('secs-left');
		jsMinsLeft.innerHTML = jsMinsTextfield;
		jsSecsLeft.innerHTML = jsSecsTextfield;
		startButton.disabled = false;
		stopTimer();
		
	}



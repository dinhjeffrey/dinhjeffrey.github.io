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
$(document).ready(function(){
  $(".tableXO").hide();
});

function playX() {
	play = "X";
	console.log(play)
	document.getElementById("buttonX").disabled = true;
	document.getElementById("buttonO").disabled = true;
	$(".tableXO").show();
}

function playO() {
	play = "O";
	document.getElementById("buttonX").disabled = true;
	document.getElementById("buttonO").disabled = true;
	$(".tableXO").show();
	opponent1()
}

var a = "success ;)";
var arr = [1,2,3,4,5,6,7,8,9];

function opponent() {
	console.log(play)
	var newArr = [];
	for (var i=0; i<arr.length; i++){
		if (typeof(arr[i]) === "number") {
			newArr.push(arr[i]); // [2, ..., 9] length is 8
		}
	}
	var random = Math.floor(Math.random() * newArr.length); //  0-.999. should give i
	
	console.log("random is", random);
	if (newArr[random] === 1) {
		var randomStr = "one";
	} else if (newArr[random] === 2) {
		var randomStr = "two";
	} else if (newArr[random] === 3) {
		var randomStr = "three";
	} else if (newArr[random] === 4) {
		var randomStr = "four";
	} else if (newArr[random] === 5) {
		var randomStr = "five";
	} else if (newArr[random] === 6) {
		var randomStr = "six";
	} else if (newArr[random] === 7) {
		var randomStr = "seven";
	} else if (newArr[random] === 8) {
		var randomStr = "eight";
	} else {
		var randomStr = "nine";
	}
	var index = arr.indexOf(newArr[random]);
	arr[index] = "O";

	console.log("newArr[random] is", newArr[random]);
	document.getElementById(randomStr).value = "O";
	document.getElementById(randomStr).disabled = true;
	console.log("newArr is", newArr);
	console.log("arr is", arr);
	win();
}

function one() {
	document.getElementById("one").value = "X";
	document.getElementById("one").disabled = true;
	arr[0] = "X";
	win();
	opponent();
}

function two() {
	document.getElementById("two").value = "X";
	document.getElementById("two").disabled = true;
	arr[1] = "X";
	win();
	opponent();
}

function three() {
	document.getElementById("three").value = "X";
	document.getElementById("three").disabled = true;
	arr[2] = "X";
	win();
	opponent();
}

function four() {
	document.getElementById("four").value = "X";
	document.getElementById("four").disabled = true;
	arr[3] = "X";
	win();
	opponent();
}

function five() {
	document.getElementById("five").value = "X";
	document.getElementById("five").disabled = true;
	arr[4] = "X";
	win();
	opponent();
}

function six() {
	document.getElementById("six").value = "X";
	document.getElementById("six").disabled = true;
	arr[5] = "X";
	win();
	opponent();
}

function seven() {
	document.getElementById("seven").value = "X";
	document.getElementById("seven").disabled = true;
	arr[6] = "X";
	win();
	opponent();
}

function eight() {
	document.getElementById("eight").value = "X";
	document.getElementById("eight").disabled = true;
	arr[7] = "X";
	win();
	opponent();
}

function nine() {
	document.getElementById("nine").value = "X";
	document.getElementById("nine").disabled = true;
	arr[8] = "X";
	win();
	opponent();
}

function win() {
	if ((arr[0] === "X" && arr[1] === "X" && arr[2] === "X") ||  // 1,2,3
		(arr[0] === "X" && arr[4] === "X" && arr[8] === "X") || // 1,5,9
		(arr[0] === "X" && arr[3] === "X" && arr[6] === "X") || // 1,4,7
		(arr[1] === "X" && arr[4] === "X" && arr[7] === "X") || // 2,5,8
		(arr[2] === "X" && arr[5] === "X" && arr[8] === "X") || // 3,6,9
		(arr[2] === "X" && arr[4] === "X" && arr[6] === "X") || // 3,5,7
		(arr[3] === "X" && arr[4] === "X" && arr[5] === "X") || // 4,5,6
		(arr[6] === "X" && arr[7] === "X" && arr[8] === "X")  // 7,8,9
		 ) {
		alert("You win :)");
		clear();
	}
	if ((arr[0] === "O" && arr[1] === "O" && arr[2] === "O") ||  // 1,2,3
		(arr[0] === "O" && arr[4] === "O" && arr[8] === "O") || // 1,5,9
		(arr[0] === "O" && arr[3] === "O" && arr[6] === "O") || // 1,4,7
		(arr[1] === "O" && arr[4] === "O" && arr[7] === "O") || // 2,5,8
		(arr[2] === "O" && arr[5] === "O" && arr[8] === "O") || // 3,6,9
		(arr[2] === "O" && arr[4] === "O" && arr[6] === "O") || // 3,5,7
		(arr[3] === "O" && arr[4] === "O" && arr[5] === "O") || // 4,5,6
		(arr[6] === "O" && arr[7] === "O" && arr[8] === "O")  // 7,8,9
		 ) {
		alert("Computer wins :(");
		clear();
	}
	for (var i=0, count=0; i<arr.length; i++) {
		if (arr[i] === "X" || arr[i] === "O") {
			count++;
			if (count === 9) {
				alert("Tie :|");
				clear();
			}
		}
	}
}

function clear() {
	arr = [1,2,3,4,5,6,7,8,9];
	document.getElementById("one").disabled = false;
	document.getElementById("one").value = " ";
	document.getElementById("two").disabled = false;
	document.getElementById("two").value = " ";
	document.getElementById("three").disabled = false;
	document.getElementById("three").value = " ";
	document.getElementById("four").disabled = false;
	document.getElementById("four").value = " ";
	document.getElementById("five").disabled = false;
	document.getElementById("five").value = " ";
	document.getElementById("six").disabled = false;
	document.getElementById("six").value = " ";
	document.getElementById("seven").disabled = false;
	document.getElementById("seven").value = " ";
	document.getElementById("eight").disabled = false;
	document.getElementById("eight").value = " ";
	document.getElementById("nine").disabled = false;
	document.getElementById("nine").value = " ";
}



/****************************** Player picked O *********************************************************************/

function opponent1() {
	console.log(play)
	var newArr = [];
	for (var i=0; i<arr.length; i++){
		if (typeof(arr[i]) === "number") {
			newArr.push(arr[i]); // [2, ..., 9] length is 8
		}
	}
	var random = Math.floor(Math.random() * newArr.length); //  0-.999. should give i
	
	console.log("random is", random);
	if (newArr[random] === 1) {
		var randomStr = "one";
	} else if (newArr[random] === 2) {
		var randomStr = "two";
	} else if (newArr[random] === 3) {
		var randomStr = "three";
	} else if (newArr[random] === 4) {
		var randomStr = "four";
	} else if (newArr[random] === 5) {
		var randomStr = "five";
	} else if (newArr[random] === 6) {
		var randomStr = "six";
	} else if (newArr[random] === 7) {
		var randomStr = "seven";
	} else if (newArr[random] === 8) {
		var randomStr = "eight";
	} else {
		var randomStr = "nine";
	}
	var index = arr.indexOf(newArr[random]);
	arr[index] = "X";

	console.log("newArr[random] is", newArr[random]);
	document.getElementById(randomStr).value = "X";
	document.getElementById(randomStr).disabled = true;
	console.log("newArr is", newArr);
	console.log("arr is", arr);
	win1();
}

function one1() {
	document.getElementById("one").value = "O";
	document.getElementById("one").disabled = true;
	arr[0] = "O";
	win1();
	opponent1();
}

function two1() {
	document.getElementById("two").value = "O";
	document.getElementById("two").disabled = true;
	arr[1] = "O";
	win1();
	opponent1();
}

function three1() {
	document.getElementById("three").value = "O";
	document.getElementById("three").disabled = true;
	arr[2] = "O";
	win1();
	opponent1();
}

function four1() {
	document.getElementById("four").value = "O";
	document.getElementById("four").disabled = true;
	arr[3] = "O";
	win1();
	opponent1();
}

function five1() {
	document.getElementById("five").value = "O";
	document.getElementById("five").disabled = true;
	arr[4] = "O";
	win1();
	opponent1();
}

function six1() {
	document.getElementById("six").value = "O";
	document.getElementById("six").disabled = true;
	arr[5] = "O";
	win1();
	opponent1();
}

function seven1() {
	document.getElementById("seven").value = "O";
	document.getElementById("seven").disabled = true;
	arr[6] = "O";
	win1();
	opponent1();
}

function eight1() {
	document.getElementById("eight").value = "O";
	document.getElementById("eight").disabled = true;
	arr[7] = "O";
	win1();
	opponent1();
}

function nine1() {
	document.getElementById("nine").value = "O";
	document.getElementById("nine").disabled = true;
	arr[8] = "O";
	win1();
	opponent1();
}

function win1() {
	if ((arr[0] === "X" && arr[1] === "X" && arr[2] === "X") ||  // 1,2,3
		(arr[0] === "X" && arr[4] === "X" && arr[8] === "X") || // 1,5,9
		(arr[0] === "X" && arr[3] === "X" && arr[6] === "X") || // 1,4,7
		(arr[1] === "X" && arr[4] === "X" && arr[7] === "X") || // 2,5,8
		(arr[2] === "X" && arr[5] === "X" && arr[8] === "X") || // 3,6,9
		(arr[2] === "X" && arr[4] === "X" && arr[6] === "X") || // 3,5,7
		(arr[3] === "X" && arr[4] === "X" && arr[5] === "X") || // 4,5,6
		(arr[6] === "X" && arr[7] === "X" && arr[8] === "X")  // 7,8,9
		 ) {
		alert("Computer wins :(");
		clear();
	}
	if ((arr[0] === "O" && arr[1] === "O" && arr[2] === "O") ||  // 1,2,3
		(arr[0] === "O" && arr[4] === "O" && arr[8] === "O") || // 1,5,9
		(arr[0] === "O" && arr[3] === "O" && arr[6] === "O") || // 1,4,7
		(arr[1] === "O" && arr[4] === "O" && arr[7] === "O") || // 2,5,8
		(arr[2] === "O" && arr[5] === "O" && arr[8] === "O") || // 3,6,9
		(arr[2] === "O" && arr[4] === "O" && arr[6] === "O") || // 3,5,7
		(arr[3] === "O" && arr[4] === "O" && arr[5] === "O") || // 4,5,6
		(arr[6] === "O" && arr[7] === "O" && arr[8] === "O")  // 7,8,9
		 ) {
		alert("You win :)");
		clear();
	}
	for (var i=0, count=0; i<arr.length; i++) {
		if (arr[i] === "X" || arr[i] === "O") {
			count++;
			if (count === 9) {
				alert("Tie :|");
				clear();
			}
		}
	}
}

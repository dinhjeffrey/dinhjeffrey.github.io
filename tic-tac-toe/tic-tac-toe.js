var a = "success ;)";
var arr = [1,2,3,4,5,6,7,8,9];

function opponent() {
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
		alert("Computer win :(");
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
// display numbers and operators inputted in the textbox
function set(numbers){

	// first number can't be an operator
	var oneOpLength = document.getElementById("display").value.length;
	if (oneOpLength === 0){
		if (numbers === "+"|| numbers === "-"||numbers === "/"||numbers === "*") {		
		} else { var display = document.getElementById("display").value += numbers; }
	} else {
		var display = document.getElementById("display").value += numbers;
	}

	// shows 2nd display
	var display2 = document.getElementById("display2").value;
	document.getElementById("display2").value = display;
	for (var i=0; i<display.length; i++){
		if (display[i] === "+"|| display[i] === "/"|| display[i] === "*"|| display[i] === "-"){
			 var beforeOp = i;
		}
		if (display[i] === "E"){
			var beforeE = i;
		}
	}
	var num1 =  display.slice(0, beforeOp) // 1+1
	var num2 = display.slice(beforeOp+1, display.length)
	var numE1 =  display.slice(0, beforeE)
	var numE2 = display.slice(beforeE+1, display.length)
	if (num2 !== ""){
		if (display[beforeOp] === "+"){
			document.getElementById("display2").value = Number(num1)+Number(num2);
		}
		if (display[beforeOp] === "-"){
			document.getElementById("display2").value = Number(num1)-Number(num2);
		}
		if (display[beforeOp] === "*"){
			document.getElementById("display2").value = Number(num1)*Number(num2);
		}
		if (display[beforeOp] === "/"){
			document.getElementById("display2").value = Number(num1)/Number(num2);
		}
		if (display[beforeE] === "E"){
			document.getElementById("display2").value = Number(num1)*Math.pow(1, Number(num2));
		}
	}
}

function OK(){
	var display = document.getElementById("display").value
	for (var i=0; i<display.length; i++){
		if (display[i] === "+"|| display[i] === "/"|| display[i] === "*"|| display[i] === "-"){
			 var beforeOp = i;
		}
		if (display[i] === "E"){
			var beforeE = i;
		}
	}
	var num1 =  display.slice(0, beforeOp) // 1+1
	var num2 = display.slice(beforeOp+1, display.length)
	var numE1 =  display.slice(0, beforeE)
	var numE2 = display.slice(beforeE+1, display.length)
	if (display[beforeOp] === "+"){
		document.getElementById("display").value = Number(num1)+Number(num2);
	}
	if (display[beforeOp] === "-"){
		document.getElementById("display").value = Number(num1)-Number(num2);
	}
	if (display[beforeOp] === "*"){
		document.getElementById("display").value = Number(num1)*Number(num2);
	}
	if (display[beforeOp] === "/"){
		document.getElementById("display").value = Number(num1)/Number(num2);
	}
	if (display[beforeE] === "E"){
		document.getElementById("display").value = Number(num1)*Math.pow(1, Number(num2));
	}
	globalAns = document.getElementById("display").value
}

function Clear(){
	document.getElementById("display").value = "";
}

function back(){
	var display = document.getElementById("display").value;
	var length = display.length;
	var backOne = display.slice(0, length-1);
	document.getElementById("display").value = backOne;
}

function Ans(){
	document.getElementById("display").value += globalAns;
}


function set(op) { // ex. set('+'). adds the operator to the display
    document.getElementById("display").value += op;
}

function answer() { // evaluates whatever is on the display. Wow it could do that! :o
    var Exp = document.getElementById("display");
    var Exp1 = Exp.value;
    var result = eval(Exp1);
    //alert(result);
    Exp.value = result;
    var display2JS = document.getElementById('display2');
    display2JS.value = result;
    lastAnsJS = Exp.value; // sets lastAnsJS when equal button is pushed and answer() is executed
}

function ce() {

    var elem = document.getElementById("display").value; // subtracts all display length
    var length = elem.length;
    var a = elem.substr(length);

    // document.getElementById("display").value="";
    //for(var i=0;i<length-1;i++)
    //{
    document.getElementById("display").value = a;
    // }
    //alert(length);
}

function back() {
    var elem = document.getElementById("display").value;
    var length = elem.length;
    length--;
    var b = elem.substr(0, length); // subtracts one diplay length
    document.getElementById("display").value = b;

}



function answer2() { // display answer for 2nd text box
    var Exp = document.getElementById("display");
    var Exp1 = Exp.value;
    var result = eval(Exp1);
    //alert(result);
    var display2JS = document.getElementById('display2');
    display2JS.value = result;
}

function lastAns(){
    document.getElementById("display").value += lastAnsJS;
}
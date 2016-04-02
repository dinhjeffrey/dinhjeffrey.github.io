var a = "success :)"

// https://en.wikipedia.org/w/api.php?action=opensearch&search=" 
// + search 
// + "&limit=10&namespace=0&format=json&callback=?

function submit() {
	$("#remove").remove();
	var search = document.getElementById("inputBox").value;
	display(search);
	document.getElementById("inputBox").value = "";
}

function display(search) {
	var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search + "&limit=10&namespace=0&format=json&callback=?";
	$.getJSON(url, function(data) {
		console.log(data)
		var html = "<div id='remove'>";
		for (var i=0; i<data[1].length; i++){
			html+= "<a href=" + data[3][i] + "><div class='box'>" + data[1][i] + ": <i class='grey'>" + data[2][i] + ".." + "</i></div></a>"
		}
		html += "</div>";
		// var html = "<div>" + data[1][0] + "</div><div>" + data[1][1];
		$("#display").prepend(html);
	});
}

function random() {
	
}
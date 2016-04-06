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
  window.open('https://www.twitter.com/intent/tweet?url=http://www.dindledoo.com/fccProjects/weather/weather.html', 'twitterShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
})
$(".fa-facebook").click(function(){
  $(this).addClass("shared");
  window.open('https://www.facebook.com/sharer/sharer.php?u=http://www.dindledoo.com/fccProjects/weather/weather.html', 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
})
$(".fa-google-plus").click(function(){
  $(this).addClass("shared");
  window.open('https://plus.google.com/share?url=http://www.dindledoo.com/fccProjects/weather/weather.html', 'googleShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
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
	// var search
	// w/api.php?action=opensearch&search=" + search + "&limit=10&namespace=0&format=json&callback=?
	// w/api.php?action=query&format=json&prop=&list=search%7Callimages&titles=File%3AAlbert+Einstein+Head.jpg&srsearch=mountain
	var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search + "&limit=10&namespace=0&format=json&callback=?";
	$.getJSON(url, function(data) {
		console.log(data)
		var html = "<div id='remove'>";
		for (var i=0; i<data[1].length; i++){
			html+= "<a href=" + data[3][i] + "><div class='box'><div class='line'>" + data[1][i] + "</div><text class='grey'>" + data[2][i] + ".." + "</text></div></a>"
		}
		html += "</div>";
		// var html = "<div>" + data[1][0] + "</div><div>" + data[1][1];
		$("#display").prepend(html);
	});
}

function random() {
	
}
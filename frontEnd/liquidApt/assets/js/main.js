// NAVIGATION: OFF CANVAS

$(".nav-trigger").on("click", function(e){
	e.preventDefault();
	e.stopPropagation();
	$(".nav-block").toggleClass("nav-block-open");
});

$(".nav-block").on("click", function(e){
 	e.stopPropagation();
});

$(window).on("click", function(){
	$(".nav-block").removeClass("nav-block-open");
});


// ACTIVE NAV STYLING

$(".nav li a").each(function(){
	if(this.href == window.location.href) {
		$(this).addClass("active");
	}
});

// LIGHTBOX: SIGN-UP

$('.button-signup-trigger').magnificPopup({
  type:'inline',
  midClick: true,
  fixedContentPos: true
});

// HOME: BANNER IMAGE LOADING, ANIMATION

$(".banner-img-block").imagesLoaded(function(){
	$(".banner-img").addClass("banner-img-animate");
});


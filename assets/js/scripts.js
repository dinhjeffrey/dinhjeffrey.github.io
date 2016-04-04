
$(document).ready(function() {
    scrollNav();
    var e = 300;
    setInterval(function() { $(".down-here").effect("bounce", 1e3) }, 3e3), $(".down-here").click(function() { $("html,body").animate({ scrollTop: $(".concept-statement").offset().top + 100 }, e) }), $("h1").animate({ color: "#ffffff" }, e), $("h3").animate({ color: "#ffffff" }, e), $("header").animate({ backgroundColor: "#131314" }, 0), $(".concept-statement").waypoint(function(t) { "up" == t ? ($("h1").animate({ color: "#ffffff" }, { duration: e, queue: !1 }), $("body").animate({ backgroundColor: "#131314" }, { duration: e, queue: !1 }), $("h3").animate({ color: "#ffffff" }, { duration: e, queue: !1 }), $("header").animate({ backgroundColor: "#131314" }, { duration: e, queue: !1 })) : "down" == t && ($("h1").animate({ color: "#131314" }, { duration: e, queue: !1 }), $("body").animate({ backgroundColor: "#ffffff" }, { duration: e, queue: !1 }), $("h3").animate({ color: "#131314" }, { duration: e, queue: !1 }), $("header").animate({ backgroundColor: "#ffffff" }, { duration: e, queue: !1 })) }, {
        offset: function() {
            return 0
        }
    }), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $("#kickass").hide(), /(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent) || (console.log("here"), $("head").append("<link href='https://fonts.googleapis.com/css?family=Muli:300' rel='stylesheet' type='text/css'>")), $(".freelance-proj-email-button").click(function() { emailSampleHandler() }), $(".freelance-proj-email-field").keydown(function(e) { 13 == e.keyCode && emailSampleHandler() }), setInterval(changeQuote, 1e4)
})

// enable smooth scrolling for nav bar
function scrollNav() {
  $('.nav a').click(function(){  
     //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 160
    }, 1000);
    return false;
  });
  $('.scrollTop a').scrollTop();
}

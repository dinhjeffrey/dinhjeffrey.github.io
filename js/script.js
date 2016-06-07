jQuery(document).ready(function($) {
    /*
    =========================================================================================
    0. scrollNav 
    =========================================================================================
    */

    function scrollNav() {
        $('.right-menu-list a').click(function() {
            //Animate
            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - 160
            }, 1000);
            return false;
        });
        $('.scrollTop a').scrollTop();
    }
    $('.hero_btn a').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });

    'use strict';
    $(window).on('load', function() {
        /*
        =========================================================================================
        1. PREALODER 
        =========================================================================================
        */
        $("#preloader").fadeOut("slow");
        /*
        =========================================================================================
        2.PARALLAX
        =========================================================================================
        */
        parallaxInit();

        function parallaxInit() {
            $('.parallax').parallax("30%", 0.1);
            /*add as necessary*/
        }

    });

    $(window).on('scroll', function() {

        /*
        =========================================================================================
        3. NAVBAR 
        =========================================================================================
        */
        if ($(window).scrollTop() > 80) {
            $("#nvigation").addClass("scroll_nav");

        } else {
            $("#nvigation").removeClass("scroll_nav");
        }

        if ($(window).scrollTop() > 80) {
            $("#navigation_2").addClass("scroll_nav_2");

        } else {
            $("#navigation_2").removeClass("scroll_nav_2");
        }


        /*
        =========================================================================================
        4. PROGRESS BAR
        =========================================================================================
        */

        $("#skills .single_progressbar").each(function() {
            var base = $(this);
            var windowHeight = $(window).height();
            var itemPos = base.offset().top;
            var scrollpos = $(window).scrollTop() + windowHeight - 100;
            if (itemPos <= scrollpos) {
                var auptcoun = base.find(".progress-bar").attr("aria-valuenow");
                base.find(".progress-bar").css({
                    "width": auptcoun + "%"
                });
                var str = base.find(".skill_per").text();
                var res = str.replace("%", "");
                if (res == 0) {
                    $({
                        countNumber: 0
                    }).animate({
                        countNumber: auptcoun
                    }, {
                        duration: 3000,
                        easing: 'linear',
                        step: function() {
                            base.find(".skill_per").text(Math.ceil(this.countNumber) + "%");
                        }
                    });
                }
            }
        });
        /*
        =========================================================================================
        5. MENU  FOCUS FIX 
        =========================================================================================
        */
        $(".page").each(function() {
            var bb = $(this).attr("id");
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 80;
            if ($(window).scrollTop() > grttop - 1 && $(window).scrollTop() < grttop + hei - 1) {
                var uu = $(".right-menu-list > ul > li > a[href='#" + bb + "']").parent().addClass("active");
            } else {
                var uu = $(".right-menu-list > ul > li > a[href='#" + bb + "']").parent().removeClass("active");
            }
        });

    });

    /*
    =========================================================================================
    6. COUNTER
    =========================================================================================
    */
    $('#fun_facts .single_fun_facts > h3 span').counterUp({
        delay: 10,
        time: 1000
    });

    /*
    =========================================================================================
    7.NAV MENU SMOOTH SCROLL  
    =========================================================================================
    */

    $("#navigation_2 .right-menu-list > ul > li > a").on('click', function() {
        $(this).parent().addClass("active");
        $(".right-menu-list > ul > li > a").not(this).parent().removeClass("active");
        var TargetId = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(TargetId).offset().top - 50
        }, 1000, 'swing');
        return false;
    });

    /*
    =========================================================================================
    8.PORTFOLIO FILTER ACTIVE CLASS 
    =========================================================================================
    */
    $('#filter li').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
    /*
    =========================================================================================
    9.PORTFOLIO MOSONRY 
    =========================================================================================
    */

    $(window).load(function() {

        var $c = $('#portfolio-masonry');
        if (typeof imagesLoaded == 'function') {
            imagesLoaded($c, function() {
                $c.isotope({
                    itemSelector: '.portfolio-item',
                    filter: "*",
                    // layoutMode: 'cellsByRow',
                    // options for cellsByRow layout mode
                    // cellsByRow: {
                    //   columnWidth: 200,
                    //   rowHeight: 150
                    // },
                    // options for masonry layout mode
                    // isFitWidth: true,
                    // masonry: {
                    //   columnWidth: '.grid-sizer'
                    // }
                });

            });
        }

    });


    /*
    =========================================================================================
    10.PORTFOLIO FILTERING
    =========================================================================================
    */
    $('#filter').on('click', 'a', function() {
        $('#filters button').removeClass('current');
        $(this).addClass('current');
        var filterValue = $(this).attr('data-filter');
        $(this).parents(".text-center").next().isotope({
            filter: filterValue
        });
    });
    /*
    =========================================================================================
    11.MEGAMENU  
    =========================================================================================
    */
    $("#menuzord").menuzord({
        align: "right",
        scrollable: true
    });
    /*
    =========================================================================================
    12. RIGHT SIDE MENU
    =========================================================================================
    */
    $('#nav-toogle').on('click', function() {
        $('.right-full-menu').toggleClass('menu_show');
        return false;
    });
    var McButton = $("#hamburger-menu");
    var McBar1 = McButton.find("b:nth-child(1)");
    var McBar2 = McButton.find("b:nth-child(2)");
    var McBar3 = McButton.find("b:nth-child(3)");


    McButton.click(function() {
        $(this).toggleClass("active");

        if (McButton.hasClass("active")) {
            McBar1.velocity({
                top: "50%"
            }, {
                duration: 200,
                easing: "swing"
            });
            McBar3.velocity({
                    top: "50%"
                }, {
                    duration: 200,
                    easing: "swing"
                })
                .velocity({
                    rotateZ: "90deg"
                }, {
                    duration: 800,
                    delay: 200,
                    easing: [500, 20]
                });
            McButton.velocity({
                rotateZ: "135deg"
            }, {
                duration: 800,
                delay: 200,
                easing: [500, 20]
            });
        } else {
            McButton.velocity("reverse");
            McBar3.velocity({
                    rotateZ: "0deg"
                }, {
                    duration: 800,
                    easing: [500, 20]
                })
                .velocity({
                    top: "100%"
                }, {
                    duration: 200,
                    easing: "swing"
                });
            McBar1.velocity("reverse", {
                delay: 800
            });
        }
    });
    /*
    =========================================================================================
    13. FULL SCREEN SLIDER
    =========================================================================================
    */

    setInterval(function() {
        var widnowHeight = $(window).height();
        var sliderHeight = $(".slider_container .carousel-inner .item").height();

        var padTop = widnowHeight - sliderHeight;
        $(".slider_container .carousel-inner .item").css({
            'padding-top': Math.round(padTop / 2) + 'px',
            'padding-bottom': Math.round(padTop / 2) + 'px'
        });
    }, 10);
    /*
    =========================================================================================
    14. SLIDER IMAGE
    =========================================================================================
    */
    $(".image_slider_src").each(function() {
        var imgurl = $(this).attr("src");
        $(this).parent().css({
            "background": "url(" + imgurl + ")"
        });
    });

    /*
    =========================================================================================
    15. TEXT ROTATOR
    =========================================================================================
    */
    $("#header-text h2 .rotate").textrotator({
        animation: "fade",
        speed: 1500
    });

    /*
    =========================================================================================
    16. TYPED
    =========================================================================================
    */

    $(".element").each(function() {
        var $this = $(this);
        $this.typed({
            strings: $this.attr('data-elements').split(','),
            typeSpeed: 100, // typing speed
            backDelay: 3000, // pause before backspacing
            loop: true
        });
    });
    /*
    =========================================================================================
    17.PORTFOLIO GRID HEIGHT
    =========================================================================================
    */
    setInterval(function() {
        var portfoliogridHeight = $(".right_portfolio_grid").height();
        var portfoliofilterHeight = portfoliogridHeight - 20;
        $(".left_portfolio_filter ").css({
            'height': Math.round(portfoliofilterHeight) + 'px'
        });
    }, 10);
    /*
    =========================================================================================
    18. IMAGE POPUP
    =========================================================================================
    */
    $('#portfolio-masonry .open_popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true, // set to true to enable gallery

            preload: [0, 2], // read about this option in next Lazy-loading section

            navigateByImgClick: true,

            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        }
    });


});

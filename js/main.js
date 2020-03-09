$(window).on("load", function () {
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");
        $('body').animate({
            scrollTop: 0
        }, 1);
        $(this).remove();
        $('h1.slider-head').addClass('openStyle');
        setTimeout(() => {
            $('h2.slider-head').addClass('openStyle');
        }, 1000);
        new WOW().init();
    });

    //map
    var adresse = "";


    var location = [adresse[0], $("#map").attr("lat"), $("#map").attr("long")];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,

        center: new google.maps.LatLng($("#map").attr("lat"), $("#map").attr("long")),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        fullscreenControl: false
    });

    var infowindow = new google.maps.InfoWindow();

    var marker;
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(location[1], location[2]),
        map: map,
        icon: 'images/pin.png',

    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent(location[0]);
            infowindow.open(map, marker);
        }
    })(marker));
});
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 5) {
            $(".fixed-header").addClass("scroll-header");
        } else {
            $(".fixed-header").removeClass("scroll-header");
        }
    });
    /////////Main Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        dots: true,
        nav: false,
    });
    /////////clients Slider/////////
    $('.clients-slider').owlCarousel({
        items: 6,
        margin: 28,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        autoplay: false,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        dots: false,
        responsive: {
            0: {
                items: 2,
                dots: true,
            },
            500: {
                items: 4,
                dots: true,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 6
            }
        }
    });
    /////////news Slider/////////
    $('.news-slider').owlCarousel({
        items: 3,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: false,
        rewind: false,
        autoplay: false,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                dots: true,
                loop: true,
                rewind: true,
            },
            500: {
                items: 2,
                dots: true,
            },
            1000: {
                items: 3,
            },
        }
    });

    ///////////////ACC////////
    if ($(window).width() <= 991) {
        $(".foot-header").addClass("mo-accordion");
        $(".col-foot").addClass("mo-panel");
        /////////////////////////////////////////////////
        $('.mo-menu-icon').click(function () {
            $(".nd-sec").fadeIn(500);
            $(".top-nav").addClass("nav-in");
            $("body").toggleClass("overflow");
        });

        $('.nd-sec').click(function () {
            $(".nd-sec").fadeOut(400);
            $(".top-nav").removeClass("nav-in");
            $("body").toggleClass("overflow");
        });
        $('.top-nav').click(function (e) {
            e.stopPropagation();
        });
        $('.close-btn').click(function () {
            $(".nd-sec").fadeOut(400);
            $(".top-nav").removeClass("nav-in");
            $("body").toggleClass("overflow");
        });
        $('.drop-menu').wrap("<div class='drop-mob' />")
        $('.drop-down').click(function () {
            $(".drop-mob").slideToggle(500);
            $(".drop-down").toggleClass("drop-open");
        })
    }



    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings().css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings().css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings().css('padding-top', "0");
    })
});
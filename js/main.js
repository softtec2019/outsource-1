/**
 *
 * ---------------------------------------------------------------------------
 *  
 * Template Name: GYM FITNESS | One Page Responsive HTML5 Gym Template
 * Template URL:	http://lovesome.biz/gym/
 * Author : Urosdltd
 * Version : 1.0
 *
 * --------------------------------------------------------------------------- 
 *
 */

(function ($) {
    'use strict';
    $(document).on('ready', function () {

        /*  ======================================
             Scroll Menu Background Color
            ====================================== */
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 300) {
                $('.header-area').addClass('fixed-menu');
            } else {
                $('.header-area').removeClass('fixed-menu');
            }
        });

        /*  ======================================
             Smooth scroll
            ====================================== */
        $('a.smooth-scroll').on('click', function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });

        /*  ======================================
             slider Owl Carousel 
            ====================================== */
        var main_slider = $(".slider-content");
        main_slider.owlCarousel({
            loop: true,
            nav: true,
            autoplay: true,
            mouseDrag: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplayTimeout: 10000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        // Owl Carousel Animation
        main_slider.on("translate.owl.carousel", function () {
            $(".slider-table-cell h2").removeClass("fadeInLeft animated").hide();
            $(".slider-table-cell h3").removeClass("fadeInRight animated").hide();
            $(".slider-table-cell a.gym-btn").removeClass("fadeInDown animated").hide();
        });
        main_slider.on("translated.owl.carousel", function () {
            $(".slider-table-cell h2").addClass("fadeInLeft animated").show();
            $(".slider-table-cell h3").addClass("fadeInRight animated").show();
            $(".slider-table-cell a.gym-btn").addClass("fadeInDown animated").show();
        });

        /*  ======================================
             client Owl Carousel
            ====================================== */
        var client_slider = $(".client-wraper");
        client_slider.owlCarousel({
            loop: true,
            nav: false,
            autoplay: true,
            mouseDrag: true,
            animateIn: 'fadeIn',
            autoplayTimeout: 10000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        /*  ======================================
             partners Owl Carousel
            ====================================== */
        var partners_slider = $(".partners-brand");
        partners_slider.owlCarousel({
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            loop: true,
            nav: true,
            autoplay: true,
            mouseDrag: true,
            margin: 10,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 6
                }
            }
        });

        /*  ======================================
             wmBox
            ====================================== */
        $.wmBox();

        /*  ======================================
             Parallax
            ====================================== */
        $('.parallax').jarallax({
            speed: 0.5
        });

        /*  ======================================
           waypoints
           ====================================== */
        var $progress = $('.counter');
        $progress.waypoint(function () {

            //counterUp            
            var CounterUp = $('.counter');

            CounterUp.each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 2500,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }
                });
            });
        }, {
            offset: '100%'
        });

        /*  =========================
		    google map
		========================= */
        $(function () {
            var fenway = [-33.7719703, 150.9113093];
            $('#map').gmap3({
                center: fenway,
                zoom: 13,
                scrollwheel: false
            }).streetviewpanorama('#street', {
                position: fenway,
                pov: {
                    heading: 34,
                    pitch: 10,
                    zoom: 1
                }
            });
        });


        /*  ======================================
		    Scroll Up
		    ====================================== */
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '300', // Distance from top before showing element (px)
            topSpeed: 300, // Speed back to top (ms)
            animation: 'fade', // Fade, slide, none
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: '<a class="hvr-icon-bob click-top"></a>', // Text for element
            activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });

    });

    $(window).on('load', function () {

        /*  ======================================
            preloader
            ====================================== */
        $('.preloader-area').fadeOut('500');

        /* ======================================
           Gallery filter
           ====================================== */
        // Active isotope with jQuery code
        $('.iso-content').isotope({
            itemSelector: '.single-project',
            layoutMode: 'fitRows'
        });

        // Isotope click function
        $('.iso-nav ul li').click(function () {
            $('.iso-nav ul li').removeClass('gallery-active');
            $(this).addClass('gallery-active');
            var selector = $(this).attr('data-filter');
            $('.iso-content').isotope({
                filter: selector
            });
            return false;
        });

    });

}(jQuery));

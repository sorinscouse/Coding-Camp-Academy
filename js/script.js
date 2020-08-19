// Preloader
$(window).on('load', function () { //this makes sure that the whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

//Team
$(function () {
    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });
});

//Progress bars
$(function () {

    $('#progress-elements').waypoint(function () {
        $('.progress-bar').each(function () {
            $(this).animate({
                width: $(this).attr('aria-valuenow') + '%'
            }, 2000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

//Responsive tabs
$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});

//Portfolio
$(window).on('load', function () {
//Initialise isotope
    $('#isotope-container').isotope({});
    // filter items on button click
    $('#isotope-filters').on('click', 'button', function () {
        // get filter value
        var filterValue = $(this).attr('data-filter');
        // filter portfolio
        $('#isotope-container').isotope({
            filter: filterValue
        });
        // active button
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

//Magnifier
$(function () {
    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

//Testimonials
$(function () {
    $('#testimonial-slider').owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

//Stats
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

//Clients
$(function () {
    $('#clients-list').owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 6
            }
        }
    });
});

//Show & hide white navigation
$(function () {
    //show/hide nav on page load
    showHideNav();
    $(window).scroll(function () {
        //show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            //Show white nav
            $('nav').addClass('white-nav-top');
            //Show dark logo
            $('.navbar-brand img').attr('src', 'img/logo/logo-dark.png');
        } else {
            //Hide white nav
            $('nav').removeClass('white-nav-top');
            //Show normal logo
            $('.navbar-brand img').attr('src', 'img/logo/logo.png');
        }
    }
});

//Mobile menu
$(function () {
//Show mobile nav
    $('#mobile-nav-open-btn').click(function () {
        $('#mobile-nav').css('height', '100%');
    });

    //Hide mobile nav
    $('#mobile-nav-close-btn, #mobile-nav a').click(function () {
        $('#mobile-nav').css('height', '0%');
    });
});

//Animation
//Animate on scroll
$(function () {
    new WOW().init();
});

//home animation on page load
$(window).one('load', function () {
    $('#home-heading-1').addClass('animated fadeInDown');
    $('#home-heading-2').addClass('animated fadeInLeft');
    $('#home-text').addClass('animated zoomIn');
    $('#home-btn').addClass('animated zoomIn');
    $('#arrow-down i').addClass('animated fadeInDown infinite');
});
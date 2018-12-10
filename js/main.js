/**
 * Created by WEN-L-65 on 9/14/2016.
 */
jQuery(document).ready(function ($) {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        prevArrow: 'false',
        nextArrow: 'false',
        adaptiveHeight: true,
        dots: false,
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: 'false',
        nextArrow: 'false',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });


    /*    jQuery('#masthead .menu-main-menu-container').meanmenu({
     meanMenuContainer: 'body',
     meanScreenWidth: "736"
     });*/

    elementOffset = $('.top-gap').offset().top,
        jQuery(window).scroll(function () {
            var scrollTop = $(window).scrollTop(),
                distance = (elementOffset - scrollTop);

            if (distance <= 0) {
                $('#masthead').addClass('position-change');
            } else {
                $('#masthead').removeClass('position-change');
            }
        });
    $(window).on("resize", function () {
        jQuery(window).scroll(function () {
            var scrollTop = $(window).scrollTop(),
                elementOffset = $('.top-gap').offset().top,
                distance = (elementOffset - scrollTop);

            if (distance <= 0) {
                $('#masthead').addClass('postion-change');
            } else {
                $('#masthead').removeClass('postion-change');

            }
        });
    });


    //$('.tabs-1').jQueryTab({
    //    tabInTransition: 'fadeIn',
    //    tabOutTransition: 'fadeOut',
    //    cookieName: 'active-tab-1',
    //});768
    if($(window).width() > 768) {

        $('.tab-booking .text-content').matchHeight({
            byRow: false,
            property: 'height',
            target: null,
            remove: false
        });
        $('.tab-dispatch .text-content').matchHeight({
            byRow: false,
            property: 'height',
            target: null,
            remove: false
        });
        $('.tab-payment .text-content').matchHeight({
            byRow: false,
            property: 'height',
            target: null,
            remove: false
        });
    }
    $('.match-height').matchHeight();

    $('.top-footer .col-xs-6').matchHeight();

    $(".left-half + br").remove();


    $(document).ready(function () {
        $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
            $(this).toggleClass('open');
        });
    });

    $(window).trigger('resize');

});
/*---------------------------------------
Name: ragane
Version: 1.0.0
Website: dekguh.com
Author: I Kadek Teguh Mahesa
---------------------------------------*/
'use strict';
/* preloader */
window.addEventListener('load', function() {
    document.getElementById('preloader').classList.add('animated', 'fadeOutLeft', 'delay-1s');
});

/* navbar close */
document.getElementById('navbarClose').addEventListener('click', function() {
    document.getElementById('navbarCustom').style.left = '-280px';
    document.getElementById('navbarCustom').classList.remove('navbar-shadow');
});

/* navbar open */
document.getElementById('navbarOpen').addEventListener('click', function() {
    document.getElementById('navbarCustom').style.left = '0';
    document.getElementById('navbarCustom').classList.add('navbar-shadow');
});

/* background image */
Array.prototype.forEach.call(document.getElementsByClassName('bg-image'), function(elem, idx) {
    elem.style.backgroundImage = 'url("' + elem.getAttribute('data-bg-image') + '")';
});

/* skill carousel */
$('#skillCarousel').owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    margin: 20,
    loop: true,
    responsiveClass: true,
    responsive: {
        576: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 2
        }
    }
});

/* experience carousel */
$('#experienceCarousel').owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    margin: 0,
    stagePadding: 0,
    loop: true,
    responsiveClass: true,
    responsive: {
        576: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
});

/* portofolio carousel */
$('#portofolioCarousel').owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    margin: 0,
    stagePadding: 0,
    loop: false,
    responsiveClass: true,
    responsive: {
        576: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
});

/* add icon owl-nav */
$('.owl-nav .owl-prev span').each(function(index) {
    this.innerHTML = '<i class="fas fa-chevron-left"></i>';
});
$('.owl-nav .owl-next span').each(function(index) {
    this.innerHTML = '<i class="fas fa-chevron-right"></i>';
});

/* lightbox option */
lightbox.option({
    showImageNumberLabel: false
});

/* scroll */
$('a[href*="#"]').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});
$('.menu-trigger').waypoint(function(direction) {
    $('.navbar-list').find('.navbar-item.active').removeClass('active');
    $('a[href="#'+ this.element.id +'"]').parent().addClass('active');

    $(window).on('scroll', function() {
        if($(window).scrollTop() >= ($(document).height() - $(window).height())) {
            $('.navbar-list').find('.navbar-item.active').removeClass('active');
            $('a[href="#contact"]').parent().addClass('active');
        }
    });
}, { offset: 0 });
$('.menu-trigger').waypoint(function(direction) {
    $('.navbar-list').find('.navbar-item.active').removeClass('active');
    $('a[href="#'+ this.element.id +'"]').parent().addClass('active');
}, { offset: '-10px' });

/* scroll to top */
$(window).on('scroll', function() {
    if($(this).scrollTop() >= 200) {
        $('.scroll-top').css('display', 'block');
    } else {
        $('.scroll-top').css('display', 'none');
    }
});
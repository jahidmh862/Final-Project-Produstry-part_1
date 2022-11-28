
$(document).ready(function(){
// manu Activation
    $('#navbar_toggler').on('click',function(){
        $('#site_logo, #menu ul, #navbar_toggler').toggleClass('menu_active')
    })

// banner slider Activation
    $('.banner_slider').slick({
    prevArrow:$('.banner_slider_icon_btn.prev'),
    nextArrow:$('.banner_slider_icon_btn.next')
    })
// preloder activation
    $(window).on('load', function() {
        $('#preloader').fadeOut(1500);
    })

// blog slider activation
    $('.blog_slider_container').slick({
        centerMode:true,
        slidesToShow:3,
        centerPadding:'0',
        autoplay: true,
        prevArrow:$('.blog_slider_icon_btn.prev'),
        nextArrow:$('.blog_slider_icon_btn.next')
        
    })

// Testimonial Slick active
   $('.slider_item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider_nav',
    arrows: false,
    draggable:false,
  });
  $('.slider_nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider_item',
    prevArrow: $('.testimonial_slider_icon_prev'),
    nextArrow: $('.testimonial_slider_icon_next'),
    centerMode: true,
    centerPadding:'0px',
    focusOnSelect: true
  });

 // Brand Slider Slick Activation
 $('.brand_slider_item').slick({
    prevArrow: $('.brand_icon_prev'),
    nextArrow: $('.brand_icon_next'),
    centerMode: true,
    slidesToShow: 5,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: (1500),
 });

  });
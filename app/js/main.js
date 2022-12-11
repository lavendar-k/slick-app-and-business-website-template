(function($) {
  
  "use strict";
  
  /* Page Loader active
  ========================================================*/
  $('#preloader').fadeOut();


    /* Screens Shot Slider
    =============================*/
     var owl = $(".touch-slider");
      owl.owlCarousel({
        center: true,
        navigation: false,
        pagination: true,
        slideSpeed: 1000,
        stopOnHover: true,
        autoPlay: true,
        touchDrag: true,
        responsive: {
          0: {
            items: 1
          },

          480: {
            items: 2
          },

          768: {
            items: 3
          },

          992: {
            items: 4
          },

          1199: {
            items: 5
          }
        },
        items: 5,
        itemsDesktopSmall: [1024, 3],
        itemsTablet: [600, 1],
        itemsMobile: [479, 1]
      });


  // sticky menu 
  $(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
      $(".navbar-area").removeClass("sticky menu-bg");
    } else {
      $(".navbar-area").addClass("sticky menu-bg");
    }
  });

  // for menu scroll 
  $('.page-scroll').click(function () {
    var hash = this.hash;
    var position = $(hash).offset().top - 60;
    $('html').animate({
      scrollTop: position
    }, 900);
  });

  //===== Section Menu Active

  var scrollLink = $('.page-scroll');
  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {

      var sectionOffset = $(this.hash).offset().top - 73;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });


  //===== close navbar-collapse when a  clicked

  $(".navbar-nav a").on('click', function () {
    $(".navbar-collapse").removeClass("show");
  });

  $(".navbar-toggler").on('click', function () {
    $(this).toggleClass("active");
  });

  $(".navbar-nav a").on('click', function () {
    $(".navbar-toggler").removeClass('active');
  });



  /* 
   Back Top Link
   ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })

  /* 
   One Page Navigation & wow js
   ========================================================================== */

    $(window).on('load', function() {
       
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 100) {
                $('.fixed-top').addClass('menu-bg');
            } else {
                $('.fixed-top').removeClass('menu-bg');
            }
        });

    });

  /* Auto Close Responsive Navbar on Click
  ========================================================*/
  function close_toggle() {
      if ($(window).width() <= 768) {
          $('.navbar-collapse a').on('click', function () {
              $('.navbar-collapse').collapse('hide');
          });
      }
      else {
          $('.navbar .navbar-inverse a').off('click');
      }
  }
  close_toggle();
  $(window).resize(close_toggle);

  /* Nivo Lightbox
  ========================================================*/   
   $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
  });

}(jQuery));


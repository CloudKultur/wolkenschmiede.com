(function($) {
  
  "use strict";  

  $(window).on('load', function() {

  /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* ==========================================================================
       countdown timer
       ========================================================================== */
     jQuery('#clock').countdown('2018/06/21',function(event){
      var $this=jQuery(this).html(event.strftime(''
      +'<div class="time-entry days"><span>%-D</span> Days</div> '
      +'<div class="time-entry hours"><span>%H</span> Hours</div> '
      +'<div class="time-entry minutes"><span>%M</span> Minutes</div> '
      +'<div class="time-entry seconds"><span>%S</span> Seconds</div> '));
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'liner',
        allowParentLinks: true,
        duplicate: true,
        label: '',
      });

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });
    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

    // one page navigation 
    $('.navbar-nav').onePageNav({
            currentClass: 'active'
    }); 

    /* Back Top Link active
    ========================================================*/
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
      });
      
     /* logo switch */
     $(window).on('resize', function() {
         checkLogo();
	 });
	 checkLogo();
	 function checkLogo(){
		 var logo_path = "assets/img/";
		 var logo = "logo_top.jpg";
		 if($(window).width() < 768){
			 logo = "logo_mobil.png";
		 } else {
			 logo = "logo_top.png";
		 }
		 var logo_src = logo_path + logo;
		 $(".navbar-brand img").attr("src", logo_src);
	 }

  });
  
  /* Activate Google Map */   
  

$(document).ready(function(){
    
    $('#map-privacy-check-once').click(function() {
        activateGoogleMaps();
    })
    
});   

}(jQuery));

function activateGoogleMaps() {
    var mapPlaceholder = $('.map-placeholder');
    var mapPlaceholderWidth = mapPlaceholder.attr('data-width');
    var mapPlaceholderHeight = mapPlaceholder.attr('data-height');
    var mapPlaceholderSrc = mapPlaceholder.attr('data-iframe-src')
    // Build iframe
    var mapIFrame = '<iframe src="' + mapPlaceholderSrc + '" width="' + mapPlaceholderWidth + '" height="' + mapPlaceholderHeight + '" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
    // Add iFrame and remove placeholder
    mapPlaceholder.after(mapIFrame);
    mapPlaceholder.hide();
}
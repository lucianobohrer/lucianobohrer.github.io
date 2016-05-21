/*
  WOW js
*/

$("#iam").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "fadeIn",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 3000,
    complete: function () {
        // Called after the entrance animation is executed.
    }
});

$("#ido").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "fadeIn",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 2500,
    complete: function () {
        // Called after the entrance animation is executed.
    }
});

/* SMOOTH NAVIGATION SCROLL */
  jQuery.noConflict();

  jQuery(document).ready(function($) {

    $('[data-anchor]').click(function() {

    	var target = $($(this).data('anchor'));

    	if (target.length) {

    	$('html, body').animate({
    	scrollTop: target.offset().top
    	}, 1000);
    	}
    });
  });


  new WOW().init();
  //   /* CHART GENERATOR */
      $("#chart-ios").circliful({
          animationStep: 5,
          foregroundBorderWidth: 5,
          backgroundBorderWidth: 0,
          percent: 95
      });
      $("#chart-android").circliful({
          animationStep: 5,
          foregroundBorderWidth: 5,
          backgroundBorderWidth: 0,
          percent: 80
      });
      $("#chart-web").circliful({
          animationStep: 5,
          foregroundBorderWidth: 5,
          backgroundBorderWidth: 0,
          percent: 75
      });

      $("#chart-ux").circliful({
          animationStep: 5,
          foregroundBorderWidth: 5,
          backgroundBorderWidth: 0,
          percent: 50
      });

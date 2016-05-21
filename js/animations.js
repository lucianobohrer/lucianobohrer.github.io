/*
  WOW js
*/

  new WOW().init();

//   /* CHART GENERATOR */
    var chart1 = $("#chart-ios").circliful({
        animationStep: 5,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 0,
        percent: 95
    });
    var chart2 = $("#chart-android").circliful({
        animationStep: 5,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 0,
        percent: 80
    });
    var chart3 = $("#chart-web").circliful({
        animationStep: 5,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 0,
        percent: 75
    });

    var chart4 = $("#chart-ux").circliful({
        animationStep: 5,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 0,
        percent: 50
    });
//
//     /* SCROLL ANIMATION TO REVEAL ITEMS */
//     window.sr = new ScrollReveal();
//     sr.reveal('.img-me', {
//       duration: 1000,
//       origin: 'left',
//       distance: '100px',
//       viewFactor  : 0.4,
//       delay:500
//     });
//
//     sr.reveal('.text-about', {
//       duration: 1000,
//       origin: 'right',
//       delay: 1000,
//       viewFactor  : 0.4,
//       distance: '100px'
//     });
//
//     sr.reveal('.screen1',{
//       duration: 1000,
//       viewFactor  : 0.5,
//       delay: 150,
//     });
//
//     sr.reveal('.screen4',{
//       duration: 1000,
//       viewFactor  : 0.5,
//       delay: 150
//     });
//
//     sr.reveal('.screen2',{
//       duration: 1000,
//       viewFactor  : 0.5,
//       delay: 10
//     });
//     sr.reveal('.screen3',{
//       duration: 1000,
//       viewFactor  : 0.5,
//       delay: 10
//     });
//
//
//     sr.reveal('.chart1',{
//       duration: 1000,
//       delay: 400,
//       viewFactor  : 0.5,
//       afterReveal : chart1
//
//     });
//
//     sr.reveal('.chart2',{
//       duration: 1000,
//       delay: 700,
//       viewFactor  : 0.5,
//       afterReset : chart2
//     });
//
//     sr.reveal('.chart3',{
//       duration: 1000,
//       delay: 1000,
//       viewFactor  : 0.5,
//       afterReset : chart3
//     });
//     sr.reveal('.chart4',{
//       duration: 1000,
//       viewFactor  : 0.5,
//       delay: 1300,
//       afterReset : chart4
//     });
//
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

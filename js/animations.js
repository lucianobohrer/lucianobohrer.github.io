
$( document ).ready(function() {
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

    window.sr = ScrollReveal();
    sr.container = document.querySelector('.about');
    sr.reveal('.img-me', {
      duration: 1000,
      origin: 'left',
      distance: '100px'
    });

    sr.reveal('.text-about', {
      duration: 1000,
      origin: 'right',
      delay: 500,
      distance: '100px'
    });

    sr.reveal('.screen1',{
      duration: 1000,
      delay: 150
    });

    sr.reveal('.screen4',{
      duration: 1000,
      delay: 150
    });

    sr.reveal('.screen2',{
      duration: 1000,
      delay: 10
    });
    sr.reveal('.screen3',{
      duration: 1000,
      delay: 10
    });
    sr.reveal('.chart1',{
      duration: 1000,
      delay: 300
    });

    sr.reveal('.chart2',{
      duration: 1000,
      delay: 500
    });

    sr.reveal('.chart3',{
      duration: 1000,
      delay: 700
    });
    sr.reveal('.chart4',{
      duration: 1000,
      delay: 900
    });
});

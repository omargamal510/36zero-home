



/* Start navbar functions */

$(document).ready(function () {
    var $bars  = $('.bars');
    var $times = $('.times');
 
    $bars.click(function () {
        $('.popup-nav').fadeIn(500);
    });

    $times.click(function () {
        $('.popup-nav').fadeOut(500);
    });

});    


/* End navbar function */


$(document).ready(function () {

    $('.bxslider').bxSlider({
    controls:false,
    pager: true,
    pause:3000,
    auto: true,
    infiniteLoop : true,
    touchEnabled: false,
    autoDirection: 'next',    
});

});


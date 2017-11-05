$(document).ready(function(){
    $('.slogan').on('inview', function(event, visible) {
        if (visible) {
            $('.slogan1').addClass('animated');
            $('.slogan2').addClass('animated');
            $('.slogan3').addClass('animated');
        } else {
            $('.slogan1').removeClass('animated');
            $('.slogan2').removeClass('animated');
            $('.slogan3').removeClass('animated');
        }
    });

});
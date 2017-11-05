$(document).ready(function(){
    if ($(window).width() > 960) {
        $('.e-list a').slideUp(1);
        $('.examples-list').on('inview', function(event, visible) {
            if (visible) {
                $('.e-list a').slideDown(800);
            } else {
                $('.e-list a').slideUp(1);
            }
        });
    }
});
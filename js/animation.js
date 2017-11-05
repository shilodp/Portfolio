$(document).ready(function(){
    $('.slogan').on('inview', function(event, visible) {
        if (visible) {
            $('.navbar-var.one').addClass('bg2');
        } else {
            $('.navbar-var.one').removeClass('bg2');
        }
    });
    $('.examples-list').on('inview', function(event, visible) {
        if (visible) {
            $('.navbar-var.two').addClass('bg2');
        } else {
            $('.navbar-var.two').removeClass('bg2');
        }
    });
    $('.information-list').on('inview', function(event, visible) {
        if (visible) {
            $('.navbar-var.three').addClass('bg2');
        } else {
            $('.navbar-var.three').removeClass('bg2');
        }
    });
});
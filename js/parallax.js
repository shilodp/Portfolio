$(document).ready(function(){
    var scrolled;
    var $parallaxElements = $('div.return');
    $parallaxElements.css({ opacity: '0'});
    $(window).scroll(function() {
        scrolled = $(window).scrollTop();
        if (scrolled>200){
            $parallaxElements.css({ opacity: '1' });
        };
        if (scrolled<200){
            $parallaxElements.css({ opacity: '0' });
        };
    });
});
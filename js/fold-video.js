function closeVideoFunction() {
    $(".video-page").fadeOut(800);
    $(".video-frame").slideUp(400);
    $(".video-player").attr("src", "");
}
function openVideoFunction() {
    $(".video-page").fadeIn(100);
    $(".video-frame").slideDown(400);
    $(".video-player").attr("src", "https://www.youtube.com/embed/lr2T12F9euE?rel=0&amp;showinfo=0&autoplay=1&modestbranding=1&controls=0&enablejsapi=1");
}

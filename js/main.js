$(document).ready(function () {
    $('.menu-opener').on('click', function(e) {
        e.preventDefault() 
        $('.header').toggleClass('mobile-menu-active');
    })
});
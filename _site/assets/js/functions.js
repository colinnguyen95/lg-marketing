$( document ).ready(function() {

    var scrollLink = $('.scroll');
    
    //Smooth scrolling
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top    
        }, 1000);
    });

});

$('.menu-toggle').click(function(){
    $('.site-nav').toggleClass('site-nav--open', 350);
    $(this).toggleClass('open');
});
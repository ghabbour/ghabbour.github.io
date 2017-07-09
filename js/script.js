$(function () {
    $('.materialboxed').materialbox();

    // scroll to About
    $('header .hero i').click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });


    // Initialize collapse button
    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
    });


    
    // scroll to top 

    // caching scroll top element 
    var scrollButton = $("#scroll-top");

    $(window).scroll(function() {
        $(this).scrollTop() >= 600 ? scrollButton.show() : scrollButton.hide();
    });

    // click on button to scroll top 
    
    scrollButton.click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 600);
    });
    // end scroll to top 

});

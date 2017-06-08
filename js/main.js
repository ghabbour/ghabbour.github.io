$(function(){
    'use strict';
    $(window).scroll(function(){
       var navbar = $('.navbar');
        // condition ? true : false ;
        $(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled');
    });
    
    // Deal with Tabs
    $('.tab-switch li').click(function(){
        // add selected class to active link
       $(this).addClass('selected').siblings().removeClass('selected'); 
        // Hide all divs
       $('.tabs-section .tabs-content > div').hide();
        // show div connected with this link 
       $($(this).data('class')).show();
    });
    
    // smooth scroll
    
    $('a').click(function(){
        
        $('html,body').animate({
            scrollTop: $( $(this).attr('href')).offset().top
            },800);
        });
   
    
});
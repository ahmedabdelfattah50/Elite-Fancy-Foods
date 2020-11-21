$(window).on('load', function(){
    $('.page_over_lay .sk-folding-cube').fadeOut(1500, function(){
        $(this).parent().fadeOut(700,function(){
            $('body').css({'overflow':'auto' , 'overflow-X':'hidden !important'});
            $(this).remove();
        });
    });
});    

$(document).ready(function(){
    // ################# Global #################    

    // this for insilize the init of wow.js plugn
    new WOW().init();  
    
    var goUp = $('.go_up'),
        navBar = $('.navbar');

    // when click on the menu bar icon
    var navbarMenuBtn = $('#navbarMenuBtn');

    navbarMenuBtn.click(function(){
        $('.navbar').toggleClass('mobileNavbar');
    });

    $(window).scroll(function(){

        // navbar change
        if($(this).scrollTop() > 120){
            navBar.addClass('navChange');
            navBar.addClass('fixed-top');
        } else {
            navBar.removeClass('navChange');
            navBar.removeClass('fixed-top');
        }

        // this for icon to go up when scroll
        if($(this).scrollTop() > 100){
            if(goUp.is(":hidden")){
                goUp.fadeIn();
            }
        } else {
            goUp.fadeOut();
        }
    });

    // this for the animation of the icon go up
    goUp.click(function(event){
        event.preventDefault();

        $('html , body').animate({
            scrollTop: 0
        },1000);
    });

    // ################# Global ################# 

    $('.navbar .dropdown a').click(function(){
        $('.prodTotalLayer').toggle();
    }); 

    $('.prodTotalLayer').click(function(){
        $(this).hide();
    });

    // ################# totalProds Page #################    

    $('.prodInfo-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3, 
        arrows: true,
        infinite: true,
        autoplaySpeed: 2500,
        autoplay: true,
        responsive: [
          {
            breakpoint: 992, 
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768, 
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1.7
            }
          }
        ]
      });
     

    // ================ owl-prodInfo

    $('.prodInfo-slider a').click(function(e){
        e.preventDefault();
        alert("Elite Product");
    });
});
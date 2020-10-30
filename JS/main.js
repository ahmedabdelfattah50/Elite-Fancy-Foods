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
        $('.homeAllLayer').toggle();
    }); 

    $('.homeAllLayer').click(function(){
        $(this).hide();
    });

    $('.navbar .dropdown a').click(function(){
        $('.contactAllLayer').toggle();
    }); 

    $('.contactAllLayer').click(function(){
        $(this).hide();
    });

    $('.navbar .dropdown a').click(function(){
        $('.newsEventsLayer').toggle();
    }); 

    $('.newsEventsLayer').click(function(){
        $(this).hide();
    });

    $('.navbar .dropdown a').click(function(){
        $('.eventsLayer').toggle();
    }); 

    $('.eventsLayer').click(function(){
        $(this).hide();
    });

    $('.navbar .dropdown a').click(function(){
        $('.cashVanLayer').toggle();
    }); 

    $('.cashVanLayer').click(function(){
        $(this).hide();
    });

    $('.navbar .dropdown a').click(function(){
        $('.HyperLayer').toggle();
    }); 

    $('.HyperLayer').click(function(){
        $(this).hide();
    });

    $('.navbar .dropdown a').click(function(){
        $('.WholesaleLayer').toggle();
    }); 

    $('.WholesaleLayer').click(function(){
        $(this).hide();
    });

    $('.navbar .dropdown a').click(function(){
        $('.NewsLayer').toggle();
    }); 

    $('.NewsLayer').click(function(){
        $(this).hide();
    });

    $('.navbar .dropdown a').click(function(){
        $('.monthlyLayer').toggle();
    }); 

    $('.monthlyLayer').click(function(){
        $(this).hide();
    });

    $('.navbar .dropdown a').click(function(){
        $('.SuccessLayer').toggle();
    }); 

    $('.SuccessLayer').click(function(){
        $(this).hide();
    });
    // ################# home Page #################    

    const nextIconBalls = "<img src='./images/home/arrow_rightHome.svg'>",
          prevIconBalls = "<img src='./images/home/arrow_leftHome.svg'>";

    $('.owl-ourBlogs').owlCarousel({
        loop:true,
        nav:true,
        autoplay:false,
        center: false,
        addClassActive: false,
        navText: [
            prevIconBalls,
            nextIconBalls
        ],
        responsive:{
            0:{
                items:1
            },
            567:{
                items:1
            },
            768:{
                items:2
            },
            910:{
                items:2
            },
            995:{
                items:3
            },
            1198:{
                items:3
            },
            1400:{
                items:4
            }
        }
    })


    // ################# ourNews Page #################    

    const nextIconNews = "<img src='./images/our_news/rightArrow.png'>",
          prevIconNews = "<img src='./images/our_news/leftArrow.png'>";

    $('.owl-ourNews').owlCarousel({
        loop:true,
        nav:true,
        autoplay:false,
        center: false,
        addClassActive: false,
        navText: [
            prevIconNews,
            nextIconNews
        ],
        responsive:{
            0:{
                items:1
            },
            567:{
                items:1
            },
            768:{
                items:2
            },
            910:{
                items:2
            },
            995:{
                items:3
            },
            1198:{
                items:3
            },
            1400:{
                items:4
            }
        }
    })


    // ################# whereToBuy Page #################    

    const prodNextIcon = "<img src='./images/our_news/rightArrow.png'>",
          prodPrevIcon = "<img src='./images/our_news/leftArrow.png'>";

    $('.owl-three').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        center: true,
        addClassActive: false,
        navText: [
            prodPrevIcon,
            prodNextIcon
        ],
        responsive:{
            0:{
                items:2
            },
            567:{
                items:3
            },
            768:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    
});
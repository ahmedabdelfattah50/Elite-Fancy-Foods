// $(window).on('load', function(){
//     $('.page_over_lay .sk-folding-cube').fadeOut(1200, function(){
//         $(this).parent().fadeOut(700,function(){
//             $('body').css({'overflow':'auto' , 'overflow-X':'hidden !important'});
//             $(this).remove();
//         });
//     });
// });

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

    // ################# Home Page #################
    // ================ this for slider by owl plugin
    /*const nextIcon_1 = "<img src='./images/main_page/right_arrow_green.png'>",
          prevIcon_1 = "<img src='./images/main_page/left_arrow_green.png'>",
          nextIcon = "<img src='./images/main_page/right_arrow.png'>",
          prevIcon = "<img src='./images/main_page/left_arrow.png'>";


    $('.owl-one').owlCarousel({
        loop:false,
        nav:false,
        autoplay:false,
        center: false,
        addClassActive: false,
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
                items:4
            },
            1400:{
                items:5
            }
        }
    })

    $('.owl-one_1').owlCarousel({
        loop:false,
        nav:false,
        autoplay:false,
        center: false,
        addClassActive: false,
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

    $('.owl-one_2').owlCarousel({
        loop:false,
        nav:false,
        autoplay:false,
        center: false,
        addClassActive: false,
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
            841:{
                items:3
            },
            1400:{
                items:5
            },
            1500:{
                items:6
            }
        }
    })

    $('.owl-two').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        navText: [
            prevIcon_1,
            nextIcon_1
        ],
        responsive:{
            0:{
                items:1
            },
            567:{
                items:2
            },
            768:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

    $('.owl-three').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        center: true,
        addClassActive: false,
        navText: [
            prevIcon,
            nextIcon
        ],
        responsive:{
            0:{
                items:1
            },
            567:{
                items:1
            },
            768:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })*/

    // ################# about_us Page #################    
    /*const nextIconInfo = "<img src='./images/about_us/right_arrow.svg'>",
    prevIconInfo = "<img src='./images/about_us/left_arrow.svg'>";
    
    $('.owl-four').owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        center: false,
        addClassActive: false,
        navText: [
            prevIconInfo,
            nextIconInfo
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
            1000:{
                items:3
            }
        }
    })*/

    // ################# Careers Page #################    
    // const nextIconInfo = "<img src='./images/about_us/right_arrow.svg'>",
    // prevIconInfo = "<img src='./images/about_us/left_arrow.svg'>";
    
    /*$('.owl-five').owlCarousel({
        loop:true,
        nav:false,
        autoplay:true,
        center:true,
        addClassActive: false,
        responsive:{
            0:{
                // loop: false,
                autoplay:true,
                center: true,
                addClassActive: false,
                items:1.2
            },
            567:{
                loop: true,
                center: true,
                addClassActive: true,
                autoplay:true,
                items:2
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

    var $itemSliderFive = $('.career_slider .owl-five .owl-item');

    $itemSliderFive.click(function(){
        var $myTarget = $(this).children('.item').data('target');
        $(".sliderTotalArticles .slider_article"+$myTarget).show(200).siblings().hide(200);
    }); */
    // ============== Start account_manager ===============

    /*var accountManagerImg = $('.account_manager .accountManagerSection img');

    $(accountManagerImg).click(function(){
        $(this).parent().addClass('changePosition');
        $('.account_manager .applyNowMessage').show(300);
    });*/


    // ################# balls product Page #################    

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

    // ################# rings product Page #################    

   /* const nextIconRings = "<img src='./images/rings_products/right_arrow.png'>",
          prevIconRings = "<img src='./images/rings_products/left_arrow.png'>";

    $('.owl-seven').owlCarousel({
        loop:true,
        nav:true,
        autoplay:false,
        center: false,
        addClassActive: false,
        navText: [
            prevIconRings,
            nextIconRings
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
                items:4
            },
            1400:{
                items:5
            }
        }
    })*/

    // ################# Can product Page #################    

    /*const nextIconCan = "<img src='./images/can_products/right_arrow.png'>",
          prevIconCan = "<img src='./images/can_products/left_arrow.png'>";

    $('.owl-eight').owlCarousel({
        loop:true,
        nav:true,
        autoplay:false,
        center: false,
        navText: [
            prevIconCan,
            nextIconCan
        ],
        addClassActive: false,
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
            841:{
                items:3
            },
            1400:{
                items:5
            },
            1500:{
                items:6
            }
        } 
    })*/

    // ################# Puffs product Page #################    

    /*const nextIconPuffs = "<img src='./images/puffs_products/right_arrow.png'>",
          prevIconPuffs = "<img src='./images/puffs_products/left_arrow.png'>";

    $('.owl-nine').owlCarousel({
        loop:true,
        nav:true,
        autoplay:false,
        center: false,
        addClassActive: false,
        navText: [
            prevIconPuffs,
            nextIconPuffs
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
                items:4
            },
            1400:{
                items:5
            }
        }
    })
*/
});
/*------------------------*\
    MENU
\*------------------------*/

/* Aparecer ou esconder ao Scroll */
var zero = 0
$(document).ready(function(){
    $(window).on('scroll', function(){
        $('.navbar').toggleClass('hide', $(window).scrollTop() > zero);
        zero =  $(window).scrollTop();
    })
});

/* Deslizar suavemente ao Scroll */
$('nav #menu a').click(function(e){
    $(".navbar-toggler").click();
      e.preventDefault();
      var id = $(this).attr('href'),
          targetOffSet = $(id).offset().top;
         /* menuHeight = $('nav').innerHeight(); */
      $('html, body').animate({
          scrollTop: targetOffSet,
      }, 700);
      if (targetOffSet > 0){
        $('html, body').animate({
            scrollTop: targetOffSet  + 1,
        }, 1);
      }
  });

/*------------------------*\
    OWL CAROUSEL DEPOIMENTOS
\*------------------------*/

$(".owl-clientes-quote").owlCarousel({
    autoplay: true,
    autoplayTimeout:6000,
    loop:true,
    margin:10,
    responsiveClass:true,
    dots:false,
    nav: true,
    navContainerClass: 'owl-nav',
    navClass: ['owl-prev', 'owl-next'],
    responsive:{
    0:{
        items:1
    },
    960:{
        items:2
    }
    }
});

/*------------------------*\
    OWL CAROUSEL DEPOIMENTOS
\*------------------------*/

$(".owl-moda").owlCarousel({
    items:3,
    autoplay: true,
    autoplayTimeout:6000,
    loop:true,
    nav: true,
    navContainerClass: 'owl-nav',
    navClass: ['owl-prev', 'owl-next'],
    margin: 10,
    dots: false,
    responsiveClass:true,
    responsive:{
    0:{
        items:1
    },
    480:{
        items:2
    },
    960:{
        items:3
    },
    1500:{
        items:4
    },
    2200:{
        items:5
    }
    }
});
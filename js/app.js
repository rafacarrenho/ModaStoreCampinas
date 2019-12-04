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
    OWL CAROUSEL
\*------------------------*/

$(".owl-clientes-quote").owlCarousel({
    autoplay: true,
    autoplayTimeout:6000,
    loop:true,
    margin:10,
    dots: false,
    responsiveClass:true,
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
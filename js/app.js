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
    /* $(".navbar-toggler").click(); */
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

/*------------------------*\
  #MODAL-GALERIA
\*------------------------*/

$('.owl-carousel .item img').click(function(){
    let modal = document.getElementById("modal-galeria");
    let modalImg = document.getElementById("img");
    let captionText = document.getElementById("caption");

    $("#modal-galeria").fadeToggle()
    
    modalImg.src = $(this).attr("src");
    captionText.innerHTML = $(this).attr("alt");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

});

$('#modal-galeria').click(function(){
    $("#modal-galeria").fadeToggle()
})

/*------------------------*\
  FORMULARIO
\*------------------------*/
function checkName(){
    let checkName = ($("#formName").val()) == '' ? "Preencha o seu nome." : "";
      $('#formErrorName').html(checkName)
  }
  
  function checkEmail(){
    let sEmail = $('#formEmail').val();
    let filter = /^[\w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/
    let checkEmail = filter.test(sEmail) ? "" : "Preencha com um E-mail válido";
    $('#formErrormail').html(checkEmail);
  }
  
  function checkTel(){
    let CheckTel = $('#formTel').val().length < 14 ? "Preencha com o seu telefone com DDD." : "";
      $('#formErrorTel').html(CheckTel)
  }
  

  function limpaForm(){
    $('#formContact input, #formContact textarea').val('');
  }

  function checkForm(){
    checkName();
    checkEmail();
    checkTel();
  
    let verifyError = ($('form small')).text().length
    if (verifyError != 0){
      return
    } else{
      /* Coletando dados */
      var nome  = $('#formName').val();
      var sobrenome  = $('#formSName').val();
      var email = $('#formEmail').val();
      var telefone = $('#formTel').val();
      var mensagem = $('#formMessage').val();

      /* construindo url */
      var urlData = "&nome=" + nome +
      "&sobrenome=" + sobrenome +
      "&email=" + email +
      "&telefone=" + telefone +
      "&mensagem=" + mensagem ;

      limpaForm();

      /* Ajax */
      $.ajax({
            type: "POST",
            url: "processa_envio.php", /* endereço do script PHP */
            async: true,
            data: urlData, /* informa Url */
            success: function(data) { /* sucesso */
                
            },
            beforeSend: function() { /* antes de enviar */
                $('.modal-success').fadeToggle();
            },
            complete: function(){ /* completo */
                $('.modal-success').fadeToggle();
            }
        });
      }
      
  }
  
  //NOME
  $('#formName').blur(checkName)
  
  //  EMAIL
  $('#formEmail').blur(checkEmail)
    
  // TELEFONE
  $(document).ready(function(){
      var SPMaskBehavior = function (val) {
      return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    spOptions = {
      onKeyPress: function(val, e, field, options) {
          field.mask(SPMaskBehavior.apply({}, arguments), options);
        }
    };
    $('.sp_celphones').mask(SPMaskBehavior, spOptions);
  });
  
  $('#formTel').blur(checkTel)
  
  $('#formSubmit').click(checkForm)
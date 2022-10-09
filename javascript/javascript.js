$(document).ready(function(){

    
        //Coordenadas Acerca de
        $('#botonAcercaDe').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
    
            scrollTop: 685 /* para que al hacer click suba el elemento*/
            }, 500); /*tiempo que se demora*/
        });
    
        //Coordenadas cartillas y guías
        $('#botonDocumentos').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 1310
            });
        });
        //Coordenadas fotografías
        $('#botonFotografias').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 1950
            });
        });
        //coordenadas radio
        $('#botonRadio').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 3050
            });
        });
        //Coordenadas contacto
        $('#botonContacto').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 3500
            });
        });

    // Efecto del Header
        if ($(window).width() > 800){
            $('header .textos').css({
                opacity: 0,
                marginTop: 0
            });
    
            $('header .textos').animate({
                opacity: 1,
                marginTop: '-50px'
            },2000); //tiempo que se demora en aparecer
        }
        
        //Pluggin efecto lupa
        $(document).ready(function() {
			$('.zoom').magnify();
		});
    
    });
    
    
    
   
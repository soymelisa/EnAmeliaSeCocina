$(document).ready(function(){
    
    //EFECTO MENÚ
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });
        $(this).animate({
            top:'0'
        }, 2000 + (index * 500));
    });
    
    
    //EFECTO HEADER
    if( $(window).width() > 800){
        $('header .textos').css({
            opacity:0,  
            marginTop:0
        });
        $('header .textos').animate({
            opacity:1,  
            marginTop:'-52px'
        }, 1500);
        
       }
// SCROLL ELEMENTOS MENÚ
    /*así es como que estamos calculando la posición en pantalla de la sección ACERCA DE,*/
    var acercaDe= $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;
    
    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
       $('html, body').animate({
           scrollTop: acercaDe -100
           //580
       }, 500); 
    });
    
    //empieza
    $('#btn-menu').on('click', function(e){
        e.preventDefault();
       $('html, body').animate({
           scrollTop: menu
           //580
       }, 500); 
    });
    
    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
       $('html, body').animate({
           scrollTop: galeria
           //580
       }, 500); 
    });
    
    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
       $('html, body').animate({
           scrollTop: ubicacion
           //580
       }, 500); 
    });
    
    
});









$(document).ready(function(){
    /*evento de scroll y calcular el ancho de la ventana para que el efecto parallax no esté en dispositivos móviles*/
    $(window).scroll(function(){
        var windowWidth = $(window).width();
        
        if(windowWidth > 800){
            var scroll = $(window).scrollTop();
            /*desde la consola se va a ver que scroll detectaría el evento, pero con scrollTop, me da el ancho de alto, 912 o 0 según la posición de la barra. Luego lo vamosa dividir entre un % para que se mueva a velocidad diferente*/
                $('header .textos').css({
                    'transform': 'translate(0px, ' + scroll / 3 +'%)'
                    //hasta aquí el salto es muy brusco y ya no se modifica el movimiento, sin el scroll
                });
            $('.acerca-de article').css({
                    'transform': 'translate(0px, -' + scroll / 6 +'%)'
            });
           }
    });
    
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth < 800){
            $('.acerca-de article').css({
                    'transform': 'translate(0px, 0px)'
            });
        }
    });
    
});
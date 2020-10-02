/**************  burger  *************/

jQuery('#burger').click(function () {
    jQuery(this).toggleClass('close');

})



/** Partie du texte caché article 1 **/


$('#suite').click(function(e){
    e.preventDefault()
    $(this).parent().addClass('masque');
    $(this).parent().parent().addClass('visible');
})


    

     

/****  Disparition et ré-apparition du header au scroll ****/


$(document).ready(function(){
	
    
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 6500 ) {
                $('header').fadeOut(700);
            } else {
                $('header').fadeIn(700);
            }
        });
    });
})



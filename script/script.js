/*****************  Partie du texte caché article 1 ********************/


    $('#suite').click(function(e){
        e.preventDefault()
        $(this).parent().addClass('masque')
    })


    

     

/******************  Disparition et ré-apparition du header au scroll *********/


$(document).ready(function(){
	
    
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 6200 ) {
                $('header').fadeOut(500);
            } else {
                $('header').fadeIn(500);
            }
        });
    });
})



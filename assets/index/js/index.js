$(document).ready(function () {

/*slider*/ 
$('.mobile-tab').hide();

$('.burg').on('click', function(){
    $('.mobile-tab').slideToggle();
})


/*button-up*/ 
$(document).ready(function(){
    /**
     * При прокрутке страницы, показываем или срываем кнопку
     */
    $(window).scroll(function () {
        // Если отступ сверху больше 50px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > 150) {
            $('.btn-up').fadeIn();
        } else {
            $('.btn-up').fadeOut();
        }
    });
    
    /** При нажатии на кнопку мы перемещаемся к началу страницы */
    $('.btn-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    
});


/*Slider*/ 
 $('.section-menu').slick({
    arrows: false,
    autoplay:true,
    autoplaySpeed: 2000,
 });

}); // Конец ready
$(document).ready(function(){
    $('.header__button').on('click', function (){
        $('.modal').toggleClass('modal__hidden');
    });
    
    $('.modal__close').on('click', function (){
        $('.modal').toggleClass('modal__hidden');
    });
})

// <!------------- Доп. задание -------------!>
// $("#button-callback").leanModal({
//     closeButton: ".modal__close"
// });

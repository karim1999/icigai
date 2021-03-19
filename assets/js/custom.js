$(document).ready(function() {
    $('.progressWrapper progress').each(function() {
        var prgsVal = $(this).data('value');
        var maxN = $(this).attr('max');
        var pop = prgsVal / maxN * 100;

        $(this).prev().css('left', pop + '%').text(prgsVal);
        $(this).val(prgsVal);
    });

});



// var slideIndex1 = 1;
// showSlides1(slideIndex1);
//
// function plusSlides1(n) {
//     showSlides1(slideIndex1 += n);
// }
//
// function currentSlide1(n) {
//     showSlides1(slideIndex1 = n);
// }
// function showSlides1(n) {
//     var i;
//     var slides = document.getElementsByClassName("ss1");
//     var dots = document.getElementsByClassName("dot1");
//     if (n > slides.length-1) { slideIndex1 = 1 }
//     if (n < 1) { slideIndex1 = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex1 - 1].style.display = "block";
//     dots[slideIndex1 - 1].className += " active";
// }

var typedAnimation = (function() {
    'use strict';
    var typedAnimationElements = [];

    function isScrolledIntoView(elem)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    function mapOverElements(identifier, uniqueName, speed) {
        $(identifier).map(function(index) {
            let name= uniqueName+'-typed-animation-'+index;
            if(!$(this).hasClass(name)){
                $(this).addClass(name)
            }
            if(isScrolledIntoView($(this)))
            {
                if(!typedAnimationElements[index]){
                    // console.log(identifier+':nth-child('+(index+1)+')');

                    typedAnimationElements[index]= new Typed('.'+name, {
                        strings: ['', $(this).data('string')],
                        typeSpeed: speed
                    });
                }
            }else{
                // if(typedAnimationElements[index]){
                //     typedAnimationElements[index].destroy();
                //     typedAnimationElements[index]= null
                // }
            }
        });
    }
    function addListeners(identifier, uniqueName, speed) {
        $(window).scroll(function() {
            mapOverElements(identifier, uniqueName, speed)
        });
    }

    return {
        init: function(identifier, uniqueName, speed=40) {
            mapOverElements(identifier, uniqueName, speed);
            addListeners(identifier, uniqueName, speed);
        }
    };
})();
typedAnimation.init('.typed-animation', 'h1-animation');

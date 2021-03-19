$(document).ready(function() {
    $('.progressWrapper progress').each(function() {
        var prgsVal = $(this).data('value');
        var maxN = $(this).attr('max');
        var pop = prgsVal / maxN * 100;

        $(this).prev().css('left', pop + '%').text(prgsVal);
        $(this).val(prgsVal);
    });

});

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

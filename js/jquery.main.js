$(function(){

    $('.swiper-container').each(function () {
        Slider($(this));
    });

    $(".feedback-message").on({
        'click': function(){
            var curElem = $(".popup" );

            curElem.fadeIn(300);
            return false;
        }
    });
    $(".popup, .popup__send, .popup__close").on({
        'click': function(){
            var curElem = $(".popup" );

            curElem.fadeOut(300);
        }
    });

    $(".popup__wrap").on({
        'click': function(event){
            event = event || window.event

            if (event.stopPropagation) {
                event.stopPropagation()
            } else {
                event.cancelBubble = true
            }

        }
    });

    $('.gallery__item a').on({
        'click':function(){
            $('.lb-dataContainer').prependTo( $('.lightbox') );
            console.log(1)

        }
    });
} );

$(window).on({
    load: function () {
        
    }
});

var Slider = function (obj) {

    //private properties
    var _self = this,
        _obj = obj;

    //private methods
    var _addEvents = function () {

        },
        _init = function () {
            _addEvents();
        };
    if (_obj.hasClass('gallery__wrap')) {
        var _slider = new Swiper(_obj, {
            nextButton: '.gallery__next',
            prevButton: '.gallery__prev',
            loop: true,
            slidesPerView: 5,
            breakpoints: {
                1024: {
                    slidesPerView: 3
                },
                767: {
                    slidesPerView: 2
                },
                500: {
                    slidesPerView: 1
                }
            }
        });

    }
    if (_obj.hasClass('customer__wrap')) {
        var __slider = new Swiper(_obj, {
            nextButton: '.customer__next',
            prevButton: '.customer__prev',
            loop: true,
            slidesPerView: 5,
            breakpoints: {
                1024: {
                    slidesPerView: 4
                },
                767: {
                    slidesPerView: 2
                },
                500: {
                    slidesPerView: 1
                }
            }

        });

    }
    if (_obj.hasClass('promo__wrap')) {
        var _slider1 = new Swiper(_obj, {
            nextButton: '.promo__next',
            prevButton: '.promo__prev',
            pagination: '.promo__pagination',
            loop: true,
            paginationClickable: true

        });

    }

    //public properties

    //public methods

    _init();
};
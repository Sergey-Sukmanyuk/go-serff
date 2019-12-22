$(function () {

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class = "slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="Arrow">',
        nextArrow: '<img class = "slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="Arrow">',
        asNavFor: '.slider__dots'
    });

    $('.slider__dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider'
    })

    $('.surf__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class = "slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="Arrow">',
        nextArrow: '<img class = "slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="Arrow">',
        asNavFor: '.slider-map'

    })

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf__slider',
        focusOnSelect: true
    });

    $('.travel__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class = "slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="Arrow">',
        nextArrow: '<img class = "slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="Arrow">',
    });

});
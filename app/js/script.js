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

    $('.holder__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class = "slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="Arrow">',
        nextArrow: '<img class = "slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="Arrow">',
    });


    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt="plus"></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt="minus"></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

});
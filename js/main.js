$(function () {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="arrow-slider arrow-slider__left" src="img/arrow-left.svg" alt="arrow-right">',
    nextArrow:
      '<img class="arrow-slider arrow-slider__right" src="img/arrow-right.svg" alt="arrow-right">',
    asNavFor: ".slider-dots-head",
  });

  $(".slider-dots-head").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider",
    responsive: [
      {
        breakpoint: 700,
        settings: "unslick",
      },
    ],
  });
  $(".serf-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class="arrow-slider arrow-slider__left" src="img/arrow-left.svg" alt="arrow-right">',
    nextArrow:
      '<img class="arrow-slider arrow-slider__right" src="img/arrow-right.svg" alt="arrow-right">',
    asNavFor: ".slider-map",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".slider-map").slick({
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: ".serf-slider",
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".holder__slider, .shop__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<img class="arrow-slider arrow-slider__left" src="img/arrow-left.svg" alt="arrow-right">',
    nextArrow:
      '<img class="arrow-slider arrow-slider__right" src="img/arrow-right.svg" alt="arrow-right">',
  });
  $(
    '<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>'
  ).insertAfter(".quantity input");
  $(".quantity").each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
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
  $(".quantity-button").on("click", function () {
    let summ =
      Number($(".night").val()) * $(".summ").data("night") +
      (Number($(".guest").val()) - 1) * $(".summ").data("guest");
    $(".summ").html("$" + summ);
    console.log(summ);
  });
  let summ =
    Number($(".night").val()) * $(".summ").data("night") +
    (Number($(".guest").val()) - 1) * $(".summ").data("guest");
  $(".summ").html("$" + summ);

  $(".serfboard-box__circle").on("click", function () {
    $(this).toggleClass("active");
  });
  $(".menu-btn").on("click", function () {
    $(".menu__list").toggleClass("swoh_menu");
  });
});

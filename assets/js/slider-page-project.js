$(document).ready(function () {
  $('.slider-banner').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slideToShow: 1,
    slideToScroll: 1,
    speed: 800,
    easing: 'linear',
    infinite: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: true,
    touchThreshold: 10,
    touchMove: true,
    waitForAnimate: true,
    // centerMode: true,
    // variableWidth: true,
  });
  $('.slider-projects').slick({
    arrows: true,
    dots: false,
    adaptiveHeight: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 800,
    easing: 'linear',
    infinite: true,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    draggable: true,
    touchThreshold: 10,
    touchMove: true,
    waitForAnimate: true,
    centerMode: false,
    variableWidth: false,
    rows: 1,
    // slidesPerRow: 1,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          rows: 2,
          slidesPerRow: 1,
        },
      },
    ],
  });
});

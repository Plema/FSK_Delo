$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'linear',
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    draggable: false,
    swipe: true,
    waitForAnimate: false,
    centerMode: false,
    variableWidth: false,
    vertical: true,
    verticalSwiping: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: false,
          // vertical: false,
          // verticalSwiping: false,
          // horizontal: true,
        },
      },
    ],
  });
});

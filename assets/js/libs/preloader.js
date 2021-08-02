// $(window).load(function () {
//   setTimeout(function () {
//     $('#preloader').fadeOut('slow', function () {});
//   }, 1000);
// });

// $(window).on('load', function () {
//   $('#preloader').fadeOut().end().delay(2000).fadeOut('slow');
// });
$(window).on('load', function () {
  $('body').addClass('loaded_hiding');
  window.setTimeout(function () {
    $('body').addClass('loaded');
    $('body').removeClass('loaded_hiding');
  }, 1500);
});

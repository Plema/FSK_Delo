$(function () {
  if ($(window).width() >= 1005) {
    $('.main').css({
      'padding-left': $('.header-decktop').width(),
    });
  }
});
// $(function () {
//   var i = $('.contacts__informations').height();
//   $('.map').height(i),
//     $(window).resize(function () {
//       $('.map').height(i);
//     });
// });

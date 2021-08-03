$(function () {
  if ($(window).width() >= 1000) {
    $('.main').css({
      'padding-left': $('.header-decktop').width(),
    });
  }
});

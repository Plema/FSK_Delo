$(function () {
  if ($(window).width() >= 1024) {
    $('.main').css({
      'padding-left': $('.header-decktop').width(),
    });
  }
});

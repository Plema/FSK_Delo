$(function () {
  $('.header-burger').click(function (event) {
    $('.header-burger,.header-menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.arrow').click(function (event) {
    $('.project-list').slideToggle('slow');
    $('.arrow').toggleClass('show-list');
    $('.arrow, .header-link_project').toggleClass('header-link_project-bold');
  });
  $('.footer-mobile-button, .footer-decktop-button').click(function (event) {
    $('.back-call').addClass('show-window');
  });
  $('.close-window').click(function (event) {
    $('.back-call').toggleClass('show-window');
  });
  // $('.button').click(function (event) {
  //   $('.thanks-window').toggleClass('thanks-window-show');
  // });
  // $('.close-window-thx').click(function (event) {
  //   $('.thanks-window').toggleClass('thanks-window-show');
  // });

  if ($(window).width() >= 1024) {
    $('.main-page').css({
      'padding-left': $('.header-decktop').width(),
    });
  }
});

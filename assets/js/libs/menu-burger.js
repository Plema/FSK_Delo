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
    // $('body').toggleClass('lock');
  });
  $('.close-window').click(function (event) {
    $('.back-call').toggleClass('show-window');
    // $('body').toggleClass('lock');
  });
  $('.button').click(function (event) {
    $('.thanks-window').toggleClass('thanks-window-show');
  });
  $('.close-window-thx').click(function (event) {
    $('.thanks-window').toggleClass('thanks-window-show');
  });

  // $('.back-call-wrapper').on('click', '.button', function (event) {
  //   $('.back-call-wrapper').find('.thanks-window').addClass('thanks-window-show');
  // });
  // $('.back-call-wrapper').on('click', '.close-window-thx', function (event) {
  //   $('.back-call-wrapper').find('.thanks-window').removeClass('thanks-window-show');
  // });

  if ($(window).width() >= 950) {
    $('.main-page').css({
      'padding-left': $('.header-decktop').width(),
    });
  }

  $('*[placeholder="Ваш телефон"]*').mask('+7(000)000-00-00');
});

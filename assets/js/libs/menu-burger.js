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

  if ($(window).width() >= 1024) {
    $('.main-page').css({
      'padding-left': $('.header-decktop').width(),
    });
  }
});

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

  $('.wrapper').css({
    'margin-left': $('.header-decktop').width(),
  });
});

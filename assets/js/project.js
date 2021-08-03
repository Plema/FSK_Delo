$(function () {
  if ($(window).width() >= 1000) {
    $('.main').css({
      'padding-left': $('.header-decktop').width(),
    });
  }

  // $('.tabs-triggers__item').click(function (e) {
  //   e.preventDefault();

  //   $('.tabs-triggers__item').removeClass('.tabs-triggers__item--active');
  //   $('.tabs-content__item').removeClass('.tabs-content__item--active');

  //   $(this).addClass('.tabs-triggers__item--active');
  //   $($(this).attr('href')).addClass('tabs-content__item--active');
  // });
  // $('.tabs-triggers__item').click();
});

// document.querySelectorAll('.tabs-triggers__item').forEach(item =>
//   item.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = e.target.getAttribute('href').replace('#', '');

//     document.querySelectorAll('.tabs-triggers__item').forEach(child => child.classList.remove('.tabs-triggers__item--active'));
//     document.querySelectorAll('.tabs-content__item').forEach(child => child.classList.remove('.tabs-content__item--active'));

//     item.classList.add('.tabs-triggers__item--active');
//     document.getElementById().classList.add('.tabs-content__item--active');
//   }),
// );

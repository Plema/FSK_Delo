let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

$(function () {
  $('*[placeholder="Ваш телефон*"]').mask('+7(000)000-00-00');
});

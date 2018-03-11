$(function () {
  $('h2').hide().slideDown();

  var elLi = $('li');
  elLi.hide().each(function (index) {
    $(this).delay(700*index).fadeIn(700);
  });
  elLi.on('click', function () {
    $(this).fadeOut(700);
  })
});
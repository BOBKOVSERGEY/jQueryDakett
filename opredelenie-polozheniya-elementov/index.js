$(function () {
  var elWindow = $(window);
  var slideAdd = $('#slideAd');

  var endZone = $('#footer').offset().top - elWindow.height() - 500;

  elWindow.on('scroll', function () {
    console.log('Скролл ' + elWindow.scrollTop());
    console.log('Footer ' + endZone);
    if ((endZone) < elWindow.scrollTop()) {
      slideAdd.animate({'right': '0'}, 250);
    } else {
      slideAdd.stop(true).animate({'right': '-360px'}, 250)
    }
  })
});
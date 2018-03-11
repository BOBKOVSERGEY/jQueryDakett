$(function () {
  var elH2 = $('h2');
  $('ul').hide();
  elH2.append(' <a href="#">Показать</a>')
 elH2.on('click', function () {
   elH2.next().fadeIn(500).children('.hot').addClass('complete');
   elH2.find('a').fadeOut();
 })
});
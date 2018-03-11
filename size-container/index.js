$(function () {
  var listHeight = $('#page').height();
  console.log(listHeight);

  $('ul').append('<p>Высота:' + listHeight + 'px</p>');

  $('li').width('60%');

  $('li#one').width(200);
  $('li#two').width('75%');
});
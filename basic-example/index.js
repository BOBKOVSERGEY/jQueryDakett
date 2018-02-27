$(function () {
  $(':header').addClass('headline');
  $('li:lt(3)').hide().delay(1500).fadeIn(1500);

  $('li').on('click', function () {
    $(this).remove();
  });
  //$('li').html('Update');

  var list = $('ul').html(), // извлекает то что находится в ul
      listItem = $('li').html();
  console.log(list);
  console.log(listItem);

  var listText = $('ul').text(); // извлекает только текст
  console.log(listText);

  var listItemText = $('li').text(); // извлекает только текст
  console.log(listItemText);

  var listHtml = $('ul').html(); // получил то что находится в ul
  console.log(listHtml);
  $('ul').append(listHtml);

  var listNewText = $('ul').text();
  $('ul').append('<p>' + listNewText + '</p>');
});
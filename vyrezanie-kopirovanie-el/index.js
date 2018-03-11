$(function () {
  var elP = $('p');

  var clonedQuote = elP.clone();

  elP.remove();

  clonedQuote.insertAfter('h2');

  var moveItem = $('#one').detach();
  moveItem.appendTo('ul');
});
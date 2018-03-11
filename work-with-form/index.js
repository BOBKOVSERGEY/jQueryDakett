$(function () {
  var newItemBtn = $('#newItemButton');
  var newItemForm = $('#newItemForm');
  var textInput = $('input:text');

  newItemBtn.show();
  newItemForm.hide();

  $('#showForm').on('click', function () {
    newItemBtn.hide();
    newItemForm.show();
  });

  newItemForm.on('submit', function (e) {
    e.preventDefault();

    var newText = $('input:text').val();

    $('li:last').after('<li>' + newText + '</li>');

    newItemForm.hide();
    newItemBtn.show();

    textInput.val('');
  })
});
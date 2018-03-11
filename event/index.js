/*$(function () {
  $('li').on('click', function () {
    $(this).addClass('complete');
  })
  var ids = '';
  var listItem = $('li');
  listItem.on('mouseover click', function () {
    ids = this.id;
    listItem.children('span').remove();
    $(this).append(' <span class="priority">' +ids+ '</span>')
  });

  listItem.on('mouseout', function () {
    $(this).children('span').remove();
  })
});*/

$(function () {
  var elData = '';
  var listItem = $('li');
  listItem.on('mouseover click', function () {
    elData = $(this).data('overlay');
    listItem.children('span').remove();
    $(this).append(' <span class="priority">' +elData+ '</span>')
  });

  listItem.on('mouseout', function () {
    $(this).children('span').remove();
  })
});
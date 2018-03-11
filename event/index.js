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
 /* var elData = '';
  var listItem = $('li');
  listItem.on('mouseover click', function () {
    elData = $(this).data('overlay');
    listItem.children('span').remove();
    $(this).append(' <span class="priority">' +elData+ '</span>')
  });

  listItem.on('mouseout', function () {
    $(this).children('span').remove();
  })

  $('li').on('click', function (e) {
    $('li span').remove();
    var date = new Date();
    date.setTime(e.timeStamp);
    var clicked = date.toDateString();
    $(this).append('<span class="date">'+ clicked + ' ' + e.type +'</span>')
  })
  */
 var listItem, itemStatus, eventType;

  $('ul').on('click mouseover', ':not(#four)', {status:'important'}, function (e) {
    listItem = 'Элемент: ' + e.target.textContent + '<br>';
    itemStatus = 'Состояние: ' + e.data.status + '<br>';
    eventType = 'Событие: ' + e.type + '<br>';
    $('#notes').html(listItem + itemStatus + eventType);
  })
});
$(function () {
  var elList, newItemForm, newItemBtn;

  var item = '';

  elList = $('ul');
  newItemForm = $('#newItemForm');
  newItemBtn = $('#newItemButton');

  // скрываем пункты, затем плвно их выводим
  $('li').hide().each(function (index) {
    $(this).delay(450 * index).fadeIn(1600);
  })

    // счетчик пунктов
  function updateCount() {
    var items = $('li[class!=complete]').length;
    $('#counter').text(items);
  }
  updateCount();

  // подготовка новых пунктов меню
  newItemBtn.show();
  newItemForm.hide();

  $('#showForm').on('click', function () {
    newItemBtn.hide();
    newItemForm.show();
  })

  // добавляем в список новый пункт
  newItemForm.on('submit', function (e) {
    e.preventDefault();
    var text = $('input:text').val();
    elList.append('<li>' + text + '</li>');
    $('input:text').val('');
    updateCount();
  })

  // обработка щелчка

  elList.on('click', 'li', function () {
    var elThis = $(this);
    var complete = elThis.hasClass('complete');

    if (complete === true) {
      elThis.animate({
        opacity: .0,
        paddingLeft: '+=180'
      }, 500, 'swing', function () {
        elThis.remove();
      })
    } else {
      item = elThis.text();
      elThis.remove();
      elList.append('<li class="complete">'+ item +'</li>').hide().fadeIn(300);
      updateCount();
    }
  })
});
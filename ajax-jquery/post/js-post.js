$(function () {
  $('#register').on('submit', function (e) { // при отправке формы
    e.preventDefault(); // предотвращаем ее отправку
    var data = $('#register').serialize(); // сериализум ее данные
    $.post('register.php', data, function (data) { // отправляем с помощью метода post
      $('#register').html(data); // выводим результат
    })
  })
})
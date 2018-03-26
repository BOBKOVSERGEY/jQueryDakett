$(function () {
  $('#exchangerates').append('<div class="rates"></div><div id="reload"></div>');

  function loadRates() {
    $.getJSON('data/rates.json')
      .done(function (data) {
        var d = new Date();
        var hrs = d.getHours(); // ge hours
        var mins = d.getMinutes(); // ge minutes

        var msg = '<h2>Exchange Rates</h2>'; // начало сообщения

        $.each(data, function (key, val) {
          msg += '<div class="' + key + '">' + key + ': ' + val + '</div>'; // добавляем курс
        });

        msg += '<br>Last update: ' + hrs + ':' + mins + '<br>';

        $('#rates').html(msg);

      }).fail(function () {
      $('#rates').append('Sorry we cannot load rates');
    }).always(function () {
      var reload = '<a id="refresh" href="#">';

      reload += '<img src="img/refresh.png" alt="refresh"></a>';
      $('#reload').html(reload);
      $('#refresh').on('click', function (e) {
        e.preventDefault();
        loadRates();
      })
    })
  }
  loadRates();
});
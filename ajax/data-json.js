window.onload = function() {
  var elgetData = document.getElementById('getData');

  elgetData.addEventListener('click', function () {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);

        // формируем строку с новым контентом
        var newContent = '';

        for (var i = 0; i < responseObject.events.length; i++) {
          newContent += '<div class="event">';
          newContent += '<img src="' + responseObject.events[i].map + '" ';
          newContent += 'alt="' + responseObject.events[i].location + '" >';
          newContent += '<p><b>' + responseObject.events[i].location + '</b></p>';
          newContent += '<p><b>' + responseObject.events[i].date + '</b></p>'
          newContent += '</div>';
        }

        document.getElementById('content').innerHTML = newContent; // обновляем страницу с новым контентом
      }
    };

  xhr.open('GET', 'data/data.json', true); // подготавливаем запрос
  xhr.send(null); // отправляем запрос
  })
};
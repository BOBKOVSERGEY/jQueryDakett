var elButton = document.getElementById('gettime');

elButton.addEventListener('click', function () {
  // создаем объект
  var xhr = new XMLHttpRequest();

// когда ответ загрузиться
  xhr.onload = function () {
    if (xhr.status === 200) {
      document.getElementById('content').innerHTML = xhr.responseText;
    }
  }

  xhr.open('POST', 'data/data.php', true);
  xhr.send(null);
})

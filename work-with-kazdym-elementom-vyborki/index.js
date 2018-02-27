$(function () {
  $('li').each(function () {
    var ids = this.id;
    $(this).append(' <em class="order">' + ids + '</em>')
  });
});
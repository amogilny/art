function declOfNum(n, titles) {
  return titles[n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2];
}

// Countdown
$('#clock').countdown('2017/12/31').on('update.countdown', function(event) {
    var $this = $(this).html(event.strftime(''
    + '<div><span>%-w</span>' + declOfNum(event.strftime('%-w'), ['неделя', 'недели', 'недель']) + '</div>'
    + '<div><span>%-d</span>' + declOfNum(event.strftime('%-d'), ['день', 'дня', 'дней']) + '</div>'
    + '<div><span>%H</span>' + declOfNum(event.strftime('%-H'), ['час', 'часа', 'часов']) + '</div>'
    + '<div><span>%M</span>' + declOfNum(event.strftime('%-M'), ['минута', 'минуты', 'минут']) + '</div>'
    ));
});

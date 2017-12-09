// Countdown
function declOfNum(n, titles) {
  return titles[n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2];
}
$('#clock').countdown('2017/12/20').on('update.countdown', function(event) {
    var $this = $(this).html(event.strftime(''
    + '<div><span>%-w</span>' + declOfNum(event.strftime('%-w'), ['week', 'weeks', 'weeks']) + '</div>'
    + '<div><span>%-d</span>' + declOfNum(event.strftime('%-d'), ['day', 'days', 'days']) + '</div>'
    + '<div><span>%H</span>' + declOfNum(event.strftime('%-H'), ['hour', 'hours', 'hours']) + '</div>'
    + '<div><span>%M</span>' + declOfNum(event.strftime('%-M'), ['min', 'mins', 'mins']) + '</div>'
    ));
});

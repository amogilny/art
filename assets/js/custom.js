// Countdown
// function declOfNum(n, titles) {
//   return titles[n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2];
// }
// $('#clock').countdown('2017/12/20').on('update.countdown', function(event) {
//     var $this = $(this).html(event.strftime(''
//     + '<div><span>%-w</span>' + declOfNum(event.strftime('%-w'), ['неделя', 'недели', 'недель']) + '</div>'
//     + '<div><span>%-d</span>' + declOfNum(event.strftime('%-d'), ['день', 'дня', 'дней']) + '</div>'
//     + '<div><span>%H</span>' + declOfNum(event.strftime('%-H'), ['час', 'часа', 'часов']) + '</div>'
//     + '<div><span>%M</span>' + declOfNum(event.strftime('%-M'), ['минута', 'минуты', 'минут']) + '</div>'
//     ));
// });

/*
 * Replace all SVG images with inline SVG
 */
$('img.svg').each(function(){
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});

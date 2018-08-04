$(function() {
    let roadCount = $('.roadmap-item').length;
    let top = 30;
    let interval = 60;
    let bottom = 50;
    let iconHeight = 14;

    $('.roadmap-content').css('height', `${top + (interval + iconHeight) * (roadCount - 1) + bottom}px`)
    let index = 0;
    while(index < roadCount) {
        $($('.roadmap-item')[index]).css('top', `${top + (interval + iconHeight) * index}px`);
        index++;
    }

});
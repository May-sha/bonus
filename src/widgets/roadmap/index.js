$(function() {
    let roadCount = $('.roadmap-item').length;
    //基准线距左右5%；左右留5%的空隙，所以左侧有10%的空隙；剩余百分比一共80%
    let interval = 75 / (roadCount - 1);
    let left = 8; 

    let index = 0;
    while(index < roadCount) {
        $($('.roadmap-item')[index]).css('left', `${left + interval * index}%`);
        if (index % 2 > 0) {
            $($('.roadmap-item')[index]).find('.item-content').css('top', `20px`);
        } else {
            $($('.roadmap-item')[index]).find('.item-content').css('bottom', `20px`);
        }
        index++;

    }

});
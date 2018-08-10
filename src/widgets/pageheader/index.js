$(function(){
    $('.mobile-nav-icon').on('click', function(e) {
        $('.nav-list').slideToggle(300);
    })
    $('.nav-item').on('click', function(e){
        let $navItem = $(this);
        
        if ($('.mobile-nav-icon').width() > 0) {
            $('.nav-list').slideToggle(300);
        } else {
            $('.nav-item').removeClass('active');
            $navItem.addClass('active');
        }
    })

    let time = 200;
    let timeClock = null;

    let anchors = [];
    for (let i = 0; i < ('.nav-item').length; i++) {
        anchors.push($($('.nav-item')[i]).attr('anchor'));
    }
    let getCurrentAnchors = () => {
        let scrollTop = $(window).scrollTop();
        let i = 0;
        while (anchors[i]) {
            if ($(`#${anchors[i]}`).offset().top > scrollTop + 60) {
                break;
            }
            i++;
        }
        i = (i > 0) ? i - 1 : 0;
        return anchors[i];
    }
    
    $(window).on('load scroll', function() {
        if ($('.mobile-nav-icon').width() > 0 || timeClock) {
            return;
        }
        timeClock = setTimeout(() => {
            clearTimeout(timeClock);
            timeClock = null;
            var shouldCheckedNav = getCurrentAnchors();
            $(`.nav-item[anchor='${shouldCheckedNav}']`).click();
        }, time)
    })
})
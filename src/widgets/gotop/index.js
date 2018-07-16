function throttle(method, context) {
    clearTimeout(method.tId);

    method.tId = setTimeout(function() {
        method.call(context);
    },50);
}

function showBtn() {
    var len = $(window).scrollTop()

    if (len >= 100) {
        $('.gotop-content').css('display', 'flex');
        $('.contacts-list-container').css({
            "bottom": "145px"
        });
    } else{
        $('.gotop-content').hide();
        $('.contacts-list-container').css({
            "bottom": "50px"
        });
    }
}

$(function() {
    $('.gotop-href').click(function () {
        $('html,body').animate({
            scrollTop:0
        }, 'slow');
    });
    
    $(window).scroll(function() {
        throttle(showBtn);
    });
});
$(function() {
    if(navigator.userAgent.match(/MicroMessenger|Android|webOS|iPhone|iPod|BlackBerry/)){
        var windowWidth = $(window).width();
        $('.news').css({
            'min-width': windowWidth
        })
    }
});


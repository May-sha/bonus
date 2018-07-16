var o = {
    zIndex: 0,
    activeIndex: 0,
    schemeList: $('.scheme-content-div .scheme-content-img'),
    /*  使用懒加载代替 */
    // renderSolutionPartImgs: function () {
    //     let titleIcon = $('.scheme-content-div .scheme-content-img').find('.title-icon-img');
    //     let cooperationImg = $('.scheme-content-div .scheme-content-img').find('.cooperation-img');
    //     titleIcon.map(function (item, index) {
    //         $(this).attr('src', $(this).data('src'));
    //     });
    //     cooperationImg.map(function (item, index) {
    //         $(this).attr('src', $(this).data('src'));
    //     });
    // },
    getDom: function  (index) {
        index = index ? index : 0;
        let length = this.schemeList.length
        return {
            active: $(this.schemeList[index]),
            prev: $(this.schemeList[(index - 1 + length) % length]),
            next: $(this.schemeList[(index + 1) % length])
        };
    },
    render: function (index, from) {
        var _this = this;
        this.activeIndex = index;

        function ren (renderIndex, direction) {
            var obj = _this.getDom(renderIndex);

            obj.prev.css('background-image') === 'none' && obj.prev.css('background-image', `url(${obj.prev.data('background')})`);
            obj.next.css('background-image') === 'none' && obj.next.css('background-image', `url(${obj.next.data('background')})`);
            obj.active.css('background-image') === 'none' && obj.active.css('background-image', `url(${obj.active.data('background')})`);

            _this.schemeList.removeClass('prev active next to-top to-bottom');

            obj.prev.addClass(`prev ${direction || ''}`);
            obj.next.addClass(`next ${direction || ''}`);
            obj.active.addClass(`active ${direction || ''}`);
        }
        if(index > from) {
            ren(index, 'to-top')
        } else if (index < from) {
            ren(index, 'to-bottom')
        } else {
            ren(index);
        }
    },
    event: function () {
        var _this = this;
        $('.scheme-right-side .right-side-item').on('mouseover', function(e) {
            if ($(this).hasClass('active')) {
                return;
            }
            $(this).siblings().removeClass('active');
            $(this).addClass('active');

            _this.render($(this).index(), _this.activeIndex);
        })

        $('.scheme-content-div .scheme-content-img').on('click', function (e) {
            if ($(this).hasClass('active')) {
                return;
            }
            var thisDom = $($('.scheme-right-side .right-side-item')[$(this).index()]);
            thisDom.siblings().removeClass('active');
            thisDom.addClass('active');

            _this.render($(this).index(), _this.activeIndex);
        })
    },
    init: function () {
        //第一个参数表示即将播放的index，第二个参数表示当前显示的index
        this.render(0, this.activeIndex);
        this.event();
        $($('.scheme-right-side .right-side-item')[0]).addClass('active');
        // this.renderSolutionPartImgs();
    }
}

$(function() {
    o.init();
});
$(function () {
    var interval = null;
    var index = 0;
    var sliderIcons = []; //轮播icon的html容器
    var iconCount = 0; //标识icon个数，即有效banner个数
    var iconContainer = $('.banner-container .slider-icons');

    Array.prototype.map.call( $('.slide-list'), function (item, index$) {
        if($(item).data('timeinterval')) {
            var time = $(item).data('timeinterval').split(',');
            //如果没有start，则将start设置为1ms之前，酱紫确保没有start，而end在未来时可以播放
            var start = time && time[0] ? time[0] : (new Date() - 1) ;
            var end = time && time[1] ? time[1] : null;
            //不在banner显示时间区间的元素删除
            if (!moment().isBetween(moment(start), moment(end))) {
                $(item).remove();
            } else {
                sliderIcons.push(`<li class="icons" value="${iconCount++}" title=""></li>`);
            }
        } else {
            sliderIcons.push(`<li class="icons" value="${iconCount++}" title=""></li>`);
        }
    })
    iconContainer.html(sliderIcons.join(''));

    var lazyLoadImg = function (index) {
        /*****
        ** 此处应该增加移动端判断，确定src赋值data.src 还是 data.msrc；
        ** 待单独提供移动端尺寸图片后另行增加 
        *****/
        let activeSlider = $($('.slide-list img')[index]);
        let nextSlider = $($('.slide-list img')[index + 1]);
        if (typeof activeSlider.attr('data-loaded') === "undefined" || !activeSlider.attr('data-loaded')) {
            activeSlider.attr('src', activeSlider.data('src'));
            activeSlider.attr('data-loaded', 'true')
        }
        if (typeof nextSlider.attr('data-loaded') === "undefined" || !nextSlider.attr('data-loaded')) {
            nextSlider.attr('src', nextSlider.data('src'));
            nextSlider.attr('data-loaded', 'true')
        }
    };
    var slider = function(index, iconCount) {
        $('.slide-list.active').removeClass('active');
        $($('.slide-list')[index]).addClass('active');
        $('.banner-container').attr('style', `${
            $($('.slide-list')[index]).data('background') ? `background: ${
                $($('.slide-list')[index]).data('background')
            };` : ''
        }`);
        lazyLoadImg(index);
    };
    var iconChange = function(index, iconCount){
        $('.slider-icons .icons.active').removeClass('active');
        $('.slider-icons .icons[value='+ index +']').addClass('active');
    };
    var setinterval = function(index, iconCount){
        return setInterval(function(){
            index = (index + 1) % iconCount;
            slider(index, iconCount);
            iconChange(index, iconCount);
        }, 5000);
    };

    if (iconCount > 0) {
        interval = setinterval(index, iconCount);

        $('.slider-display').on('mouseenter', function(e){
            clearInterval(interval);
        });
        $('.slider-display').on('mouseleave', function(e){
            clearInterval(interval);
            interval = setinterval(index, iconCount);
        });

        $('.slider-icons .icons').on('click', function(e){
            if($(e.target).hasClass('active')){
                return;
            } else {
                index = $(e.target).attr('value') % iconCount;
                slider(index, iconCount);
                iconChange(index, iconCount);
            }
        });

        $(iconContainer.find('.icons')[index]).click();
    }
});
import paramTest from '../../components/paramTest/index.js';
var $ = require('jquery')(require("jsdom").jsdom().defaultView);
var moment = require('moment');

/**
 ** name: ,//标识slider项内容，用于查看，不作为具体展示
 ** start: '2016-08-29 00:00:00', //可选参数， 如果设置，则在此时间之后才显示banner
 ** end: '', //可选参数， 如果设置，则在此时间之后不再显示banner
 ** url: '', //banner的链接地址
 ** fullImgUrl: '', //整个图片地址
 ** mobileUrl: '', //手机端使用的图片url
 ** rightImgUrl: '', //用于填写右侧图片的url
 ** leftLabel: { //用于填写左侧文字部分
 **   title: '', //左侧文字的标题
 **   conteng: '' //左侧文字的内容
 ** },
 ** leftImgUrl: '', //用于标识左侧图片url
 ** target: '' a label target
 **/
var bannerJson = {
    name: 'banner',
    dataNumber: 0,
    json: [{
            name: '边缘计算',
            url: '/',
            type: 'fullImg',
            leftLabel: {
                title: 'BonusCloud',
                class: 'row-2',
                content: 'The next generation computing system.'
            },
            // rightImgUrl: '/maincloud/img/banner/bonus/banner_product_pic.png',
            // mobileUrl: '/maincloud/img/banner/bonus/banner_product_pic.png'
        }
    ]
};
export default (option) => {
    option = bannerJson;

    let getDOM = (item, index) => {
        var datetime = '',
            listEl = '', 
            itemEl = '';

        //不同baner可以单独设置背景色，如果设置了background则以此为准
        var backgroundData = "";
        if (!!item.background) {
            backgroundData = 'data-background="' + item.background + '"';
        }
        //不同banner可以设置展示时间，在生成时，过滤掉不在展示区间内的banner
        if (item.start || item.end) {
            datetime = `data-timeInterval="${item.start || ''},${item.end || ''}"`;
        }

        // if (item.mobileUrl && item.mobileUrl.length > 0) {
        //     listEl += '<img alt="' + item.name + '" class="full-img" data-src="' + item.mobileUrl + '">';
        // } else {
        
        function validateItem(param) {
            if (typeof param !== 'undefined' && !!param) {
                return true;
            } else {
                return false;
            }
        }

        //如果banner在结束时间之前，或者没有开始结束时间，则认为banner为有效banner
        if (!item.end || moment().isBefore(moment(item.end))) {
            let src = '/maincloud/img/default.png';
            if (!!index && index === 0) {
                item.fullImgUrl && (src = item.fullImgUrl);
            }
            if (validateItem(item.fullImgUrl)) {
                listEl += `<img alt="${item.name || ''}" class="full-img" src="${src}" data-src="${item.fullImgUrl}" data-msrc="${item.mobileUrl || ''}" />`;
            }
            if (validateItem(item.leftLabel)) {
                listEl += `<div class="desc ${item.leftLabel.class}">
                    <p class="title">${item.leftLabel.title}</p>
                    <p class="detail">${item.leftLabel.content}</p>
                </div>`;
            }
            if (validateItem(item.leftImgUrl)) {
                listEl += `<div class="left-image">
                    <img class="left-img" alt="${item.name || ''}" data-src="${item.leftImgUrl}" data-msrc="${item.mobileUrl || ''}" />
                </div>`;
            }
            if (validateItem(item.leftBigImgUrl)) {
                listEl += `<div class="left-image">
                    <img class="left-big-img" alt="${item.name || ''}" data-src="${item.leftBigImgUrl}" data-msrc="${item.mobileUrl || ''}" />
                </div>`;
            }
            if (validateItem(item.rightImgUrl)) {
                listEl += `<div class="right-image">
                    <img class="right-img" alt="${item.name || ''}" data-src="${item.rightImgUrl}" data-msrc="${item.mobileUrl || ''}" />
                </div>`;
            }

            itemEl = `<li ${backgroundData} class="slide-list" ${datetime}>
                <a href="${item.url}" target="${item.target || '_self'}">${listEl}</a>
            </li>`;
        }
        return itemEl;
    };

    let indexInit = (sliderList) => {
        var sliderEl = '',
            iconEl = '';

        //补充部分下阶段需要的数据
        $.each(sliderList, function(index, sliderItem) {
            if (!sliderItem.url || sliderItem.url.length <= 0) {
                sliderItem.url = "javascript:void(0);";
            }
            if (sliderItem.leftLabel && !sliderItem.leftLabel.class) {
                sliderItem.leftLabel.class = '';
            }
            sliderEl += getDOM(sliderItem, index);
        });
        
        return {
            dom: `<div class="slider-container container">
                    <div class="slider-display">
                        <ul class="slider-content">
                            ${sliderEl}
                        </ul>
                        <ul class="slider-icons">
                            ${iconEl}
                        </ul>
                    </div>
                </div>`,
        };
    };
    try {
        let containerClass = '';
        //如果传递了 name, 将生成组件的容器class
        if (option['name'] && option['name'].length > 0) {
            containerClass = option['name'] + '-container';
        }
        //如果传递了 json, 将对数据进行遍历
        // console.log(paramTest(option['json'], 'array'));
        if (paramTest(option['json'], 'array') && option['json'].length > 0) {
            return indexInit(option['json']);
        } else {
            return `<div class=${containerClass}>组件没有传递正确的json参数</div>`;
        }
    } catch (e) {
        console.log(e, 'no option');
    }
}
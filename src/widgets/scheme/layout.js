function templateHtml (obj) {
    return  {
        imgTamplate: `<div class="scheme-content-img" data-background="${obj.left.bg}">
            <div class="scheme-img-instruction">
                <div class="img-instruction-title">
                    <img class="title-icon-img lazyload-el" src="/maincloud/img/default.png" data-src="${obj.left.titleIcon || ''}">
                    ${obj.left.title}
                </div>
                <div class="img-instruction-p">
                    ${obj.left.text}
                </div>
                <a href="${obj.left.href}" class="img-instruction-about">了解更多</a>
                <div class="cooperation-div">
                    ${obj.left.imgLogo.map(function (item) {
                        return `<div class="cooperation-logo">
                                    <img class="cooperation-img lazyload-el" src="/maincloud/img/default.png" data-src="${item}">
                                </div>`
                    }).join('')}
                </div>
            </div>
            </div>`,
        barTemplate: `<li class="right-side-item">
                        <span class="side-item-pointer">
                            <span class="pointer-i"></span>
                        </span>
                        <span class="side-item-text">${obj.right.text}</span>
                    </li>`
    }
}
function templateH5Html (obj) {
    return  `<div class="scheme-content-h5">
        <ul class="scheme-h5-ul">
            ${obj.map(function (item) {
                return `<li>
                    <a href="${item.href}">
                        ${
                            item.img ? `<img class="lazyload-el" src="/maincloud/img/default.png" data-src="${item.img}" />` : ``
                        }
                        <p>${item.text || ''}</p>
                    </a>
                </li>`;
            }).join('')}
        </ul>
    </div>`;
}
var data = [
    {
        left: {
            title: '餐饮云解决方案',
            titleIcon: '/maincloud/img/scheme/title-img/food-title-icon.png',
            text: 'Bonus帮助餐饮企业快速上云，体验高性能、低成本云化服务带来的更安全',
            href: "/solution/catering",
            imgLogo: ['/maincloud/img/scheme/logo/canxingjian.png', '/maincloud/img/scheme/logo/zhaishisong.png'],
            bg: '/maincloud/img/scheme/bg/food-bg.jpg'
        },
        right: {
            text: '餐饮云'
        }
    },
    {
        left: {
            title: '酒店云',
            titleIcon: '/maincloud/img/scheme/title-img/hotel-title-icon.png',
            text: 'Bonus酒店解决方案是新一代整合了多方系统的IT平台。不但提供酒店PMS系统（包含前台预订、APP预订、前台收银、房屋管家等）业务支撑，同时覆盖了互联网营销、数据分析等新领域。',
            href: "/solution/hotel",
            imgLogo: ['/maincloud/img/scheme/logo/huazhu-logo.png'],
            bg: '/maincloud/img/scheme/bg/hotel-bg.jpg'
        },
        right: {
            text: '酒店云'
        }
    },
    {
        left: {
            title: '交通云',
            titleIcon: '/maincloud/img/scheme/title-img/traffic-title-icon.png',
            text: '随着DT时代的到来，数据的价值被进一步认知与发掘。数据采集作为大数据处理环节中不可缺少的一环，在整个数据生产过程中越来越被重视。交通（车票、机票）领域更是一个对于数据敏感的行业，票务信息瞬息万变，如何准确地获取数据、打通供应方与需求方之间的信息渠道恰恰是整个交通行业的核心价值所在。',
            href: "/solution/traffic",
            imgLogo: ['/maincloud/img/scheme/logo/hangtianhuayou.png', '/maincloud/img/scheme/logo/hangbanguanjia.png', '/maincloud/img/scheme/logo/qiangfangkeji.png', '/maincloud/img/scheme/logo/maipiao.png', '/maincloud/img/scheme/logo/PATEO.png'],
            bg: '/maincloud/img/scheme/bg/traffic-bg.jpg'
        },
        right: {
            text: '交通云'
        }
    },
    {
        left: {
            title: 'O2O电商解决方案',
            titleIcon: '/maincloud/img/scheme/title-img/O2O-title-icon.png',
            text: 'O2O是线下商务机会与互联网的深度结合。Bonus以其稳定的虚拟化底层架构、优质的机房、硬件以及网络带宽资源，以及专业的工程师咨询服务，能够满足电商网站的日常业务需求，也能够成为电商网站在双十一等高峰流量时期弹性扩容的首选云服务商。',
            href: "/solution/o2o",
            imgLogo: ['/maincloud/img/scheme/logo/zhaimi-logo.png', '/maincloud/img/scheme/logo/zhuba-logo.png'],
            bg: '/maincloud/img/scheme/bg/O2O-bg.jpg'
        },
        right: {
            text: 'O2O电商'
        }
    },
    {
        left: {
            title: '智慧教育',
            titleIcon: '/maincloud/img/scheme/title-img/education-title-icon.png',
            text: 'Bonus为用户定制混合云解决方案，并借助Bonus优质的CDN节点，让课程内容稳定、高效、安全地分发给全国用户。Bonus后端支持所有主流格式的音视频转码、视频切片处理，并支持多种终端以及不同的视频码率。',
            href: "/solution/education",
            imgLogo: ['/maincloud/img/scheme/logo/xindongfang.png', '/maincloud/img/scheme/logo/haoweilai.png', '/maincloud/img/scheme/logo/eduise.png', '/maincloud/img/scheme/logo/beijingyuyandaxue.png', '/maincloud/img/scheme/logo/demengjiaoyu.png', '/maincloud/img/scheme/logo/huawenzaixian.png'],
            bg: '/maincloud/img/scheme/bg/education-bg.jpg'
        },
        right: {
            text: '智慧教育'
        }
    },
    {
        left: {
            title: '混合云解决方案',
            titleIcon: '/maincloud/img/scheme/title-img/company-title-icon.png',
            text: 'Bonus全面的混合云解决方案，可使客户在充分利用原有资源的基础之上，获得灵活的系统架构，无忧应对业务突发情况，同时业务始终运行在高安全性环境之下，给客户带来稳定、放心的体验。',
            href: "/solution/hybridcloud",
            imgLogo: ['/maincloud/img/scheme/logo/shiqu.png'],
            bg: '/maincloud/img/scheme/bg/company-bg.jpg'
        },
        right: {
            text: '混合云'
        }
    },
    {
        left: {
            title: '网站解决方案',
            titleIcon: '/maincloud/img/scheme/title-img/internet-title-icon.png',
            text: 'Bonus网站解决方案帮助客户实现快速建站，只需关注网站系统的开发及维护，无需顾虑底层基础设施建设，灵活、快速的部署，安全稳定的系统环境，使传统行业快速步入互联网+时代。',
            href: "/solution/website",
            imgLogo: ['/maincloud/img/scheme/logo/zhonghe.png'],
            bg: '/maincloud/img/scheme/bg/internet-bg.jpg'
        },
        right: {
            text: '网站'
        }
    },
]
var html = data.reduce(function (html, item, index, dataArr) {
    var thisHtml = templateHtml(item);
    html.leftHtml += thisHtml.imgTamplate;
    html.rightHtml += thisHtml.barTemplate;
    return {
        leftHtml: html.leftHtml,
        rightHtml: html.rightHtml
    }
}, {
    leftHtml: '',
    rightHtml: ''
})

var h5Data = [
    {
        img: '/maincloud/img/scheme/h5/catering.png',
        text: '餐饮方案',
        href: '/solution/catering'
    },
    {
        img: '/maincloud/img/scheme/h5/hotel.png',
        text: '酒店方案',
        href: '/solution/hotel'
    },
    {
        img: '/maincloud/img/scheme/h5/website.png',
        text: '网站方案',
        href: '/solution/website'
    },
    {
        img: '/maincloud/img/scheme/h5/mixcloud.png',
        text: '混合云方案',
        href: '/solution/hybridcloud'
    },
    {
        img: '/maincloud/img/scheme/h5/bdmarket.png',
        text: '大数据方案',
        href: '/solution/bdmarket'
    },
    {
        img: '/maincloud/img/scheme/h5/tour.png',
        text: '旅游方案',
        href: '/solution/tour'
    },
    {
        img: '/maincloud/img/scheme/h5/education.png',
        text: '教育方案',
        href: '/solution/education'
    },
    {
        img: '/maincloud/img/scheme/h5/traffic.png',
        text: '交通方案',
        href: '/solution/traffic'
    },
    {
        img: '/maincloud/img/scheme/h5/O2O.png',
        text: 'O2O方案',
        href: '/solution/o2o'
    }
]
var h5Html = templateH5Html(h5Data);
export default (option) => {

    return `<div class="scheme">
                <div class="bonus-title">满足、解决业务需求方案</div>
                <div class="bonus-title-bottom"></div>
                ${h5Html}
                <div class="scheme-content">
                    <div class="scheme-content-position">
                        <div class="scheme-content-div">
                        ${html.leftHtml}
                        </div>
                        <div class="scheme-content-right">
                            <div class="side-item-bar"></div>
                            <ul class="scheme-right-side">
                                ${html.rightHtml}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`;
}
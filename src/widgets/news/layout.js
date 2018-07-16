function templateHtml (obj) {
    var newsItem = '';
    if (obj && obj.type && obj.type === 'img-type') {
        newsItem = `
        <li class="news-item ${obj.type || ''}">
            <div class="with-image">
                <a href="${obj.news}">
                    <div class="news-img">
                        <img class="lazyload-el" src="/maincloud/img/default.png" data-src="${obj.imgSrc}">
                    </div>
                    <div class="news-desc">
                        <p class="news-title">${obj.title}</p>
                        <div class="news-desc-content">${obj.text}</div>
                    </div>
                </a>
            </div>
        </li>`;
    } else {
        newsItem = `<li class="news-item">
            <div class="no-image">
                <a class="news-desc" href="${obj.news}">
                    <p class="news-date">${obj.title}</p>
                    <div class="news-desc-content">${obj.text}</div>
                </a>
            </div>
        </li>`;
    }
    return newsItem;
}
function templateH5Html (obj) {
    var newsItem = '';
    if (obj && obj.type && obj.type === 'img-type') {
        newsItem = `<li class="news-item">
            <div class="news-h5-left">
                ${
                    obj.imgSrc ? `<img class="lazyload-el" src="/maincloud/img/default.png" data-src="${obj.imgSrc}">` : ''
                }
            </div>
            <div class="news-h5-right">
                <a href="${obj.news}">
                    <p class="news-desc">${obj.text}</p>
                    <p class="news-time">${obj.title} </p>
                </a>
            </div>
        </li>`;
    }
    return newsItem;
}
var data = [{
    type: 'img-type',
    imgSrc: '/maincloud/img/news/news-1.png',
    text: 'BonusCloud created & Whitepaper 1.0 release in August, 2018BonusCloud created & Whitepaper 1.0 release in August, 2018BonusCloud created & Whitepaper 1.0 release in August, 2018',
    title: '07.20 BonusCloud created & Whitepaper',
    news: '/doc/articles/news/453fdab0-7375-11e7-893c-a90193dab80f'
}, {
    type: 'img-type',
    imgSrc: '/maincloud/img/news/news-2.png',
    text: 'BonusCloud created & Whitepaper 1.0 release in August, 2018BonusCloud created & Whitepaper 1.0 release in August, 2018BonusCloud created & Whitepaper 1.0 release in August, 2018',
    title: '07.27 BonusCloud created & Whitepaper',
    news: '/doc/articles/news/e671e740-7599-11e7-893c-a90193dab80f'
}, {
    type: 'img-type',
    imgSrc: '/maincloud/img/news/news-3.png',
    text: 'BonusCloud created & Whitepaper 1.0 release in August, 2018BonusCloud created & Whitepaper 1.0 release in August, 2018BonusCloud created & Whitepaper 1.0 release in August, 2018',
    title: '07.26 BonusCloud created & Whitepaper',
    news: '/doc/articles/news/05d845b0-737f-11e7-893c-a90193dab80f'
}];
var liHtml = data.reduce(function (html, item, index, dataArr) {
    return html + templateHtml(item)
}, '')
var liH5Html = data.reduce(function (html, item, index, dataArr) {
    return html + templateH5Html(item)
}, '')

export default (option) => {
    return `<div class="news">
        <div class="cloud-title">News</div>
        <div class="news-content">
            <ul class="news-ul-pc">
                ${ liHtml }
            </ul>
            <ul class="news-ul-h5">
                ${ liH5Html }
            </ul>
        </div>
    </div>`;
}

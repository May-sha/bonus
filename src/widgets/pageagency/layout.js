function templateHtml (data) {
    let html = `
        <div class="agency-part-wrapper content-part-wrapper">
            <div class="agency-title-wrapper content-title-wrapper">
                <h3>AGENCY</h3>
                <span class="title-line"></span>
            </div>
            <div class="agency-container">
                ${data.map(function (item) {
                    return `<div class="agency-item">
                        <a class="agency-item-content" href="${item.link || 'javascript:void(0);'}">
                            <img class="lazyload-el" alt="${item.name}" src="${item.picture}" data-src="${item.picture}">
                        </a>
                    </div>`
                }).join('')}
            </div>
        </div>`
    return html;
}

let datas = [{
//     name: 'FENBUSH',
//     link: '',
//     picture: '/maincloud/img/pageagency/1.png'
// }, {
    name: 'ONEBOAT Capital',
    link: '',
    picture: '/maincloud/img/pageagency/oneboat.png'
// }, {
//     name: 'Huobi Capital',
//     link: '',
//     picture: '/maincloud/img/pageagency/3.png'
// }, {
//     name: 'OK blockchain capital',
//     link: '',
//     picture: '/maincloud/img/pageagency/4.png'
}];

export default () => {
    let html = templateHtml(datas);

    return html;
}

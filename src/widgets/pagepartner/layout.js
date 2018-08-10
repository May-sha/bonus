function templateHtml (data) {
    let html = `
        <div class="partner-part-wrapper content-part-wrapper">
            <div class="partner-title-wrapper content-title-wrapper">
                <h3>PARTNER</h3> 
                <span class="title-line"></span>
            </div>
            <div class="partner-container">
                ${data.map(function (item) {
                    return `<div class="partner-item">
                        <a class="partner-item-content" href="${item.link || 'javascript:void(0);'}">
                            <img class="lazyload-el" alt="${item.name}" src="${item.picture}" data-src="${item.picture}">
                        </a>
                    </div>`
                }).join('')}
            </div>
        </div>`
    return html;
}

let datas = [{
    name: 'iTechClub',
    link: '',
    picture: '/maincloud/img/pagepartner/1.png'
}];

export default () => {
    let html = templateHtml(datas);

    return html;
}

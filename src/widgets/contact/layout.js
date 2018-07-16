function templateHtml (obj) {
    return  `
        <div class="contact-content">
            <ul class="contact-list">
                ${obj.map(function (item) {
                    return `<li class="contact-item">
                            <div class="bg">
                                <img class="lazyload-el" src="/maincloud/img/default.png" data-src="${item.bg}" alt="">
                            </div>
                            <div class="right-div">
                                <p class="contact-item-desc">
                                    ${item.title + ':'} 
                                    <span class="contact-item-value">${item.span}</span>
                                </p>
                                <p class="contact-item-detail">${item.detail}</p>
                            </div>
                        </li>`
                }).join('')}
            </ul>
        </div>
    `;
}



var data = [{
    bg: '/maincloud/img/contacts/tel.png',
    title: 'Telphone',
    span: '1121323244',
    detail: 'Online Time：9:00-18:00'
}, {
    bg: '/maincloud/img/contacts/email.png',
    title: 'Email',
    span: 'XXX@bonus.com',
    detail: ''
}, {
    bg: '/maincloud/img/contacts/address.png',
    title: 'Address',
    span: 'Beijing Wangjing',
    detail: ''
}];

module.exports = function () {
    return templateHtml(data);
}

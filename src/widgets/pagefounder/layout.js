function templateHtml (data) {
    let html = `
        <div class="team-part-wrapper content-part-wrapper">
            <div class="team-title-wrapper content-title-wrapper">
                <h3>FOUNDER</h3> 
                <span class="title-line"></span>
            </div>
            <div class="team-members-container">
                ${
                    data.map(function (item) {
                        return `
                        <div class="team-member" id="introduction">
                            <div class="team-member-pic">
                                <img class="lazyload-el" src="/maincloud/img/default.png" data-src="${item.picture}">
                            </div>
                            <div class="team-member-content">
                                <p class="team-member-name">${item.name}</p>
                                <p class="team-member-introduction">
                                    ${item.introduction}
                                </p>
                            </div>
                        </div>
                    `
                    }).join('')
                }
            </div>
        </div>`
    return html;
}

let datas = [{
    name: 'Psymon Li',
    position: 'CEO',
    introduction: `CEO of Meituan Cloud, former director of Network Department of Alibaba, former chairman of Baidu System Technology Committee. `,
    picture: '/maincloud/img/pagefounder/1.png'
}, {
    name: 'Sid WONG',
    position: 'CTO',
    introduction: `former director of network product research and development of Ali Cloud and Alipay.`,
    picture: '/maincloud/img/pagefounder/2.png'
}, {
    name: 'Grace Gao',
    position: 'COO',
    introduction: `Grace Gao, general manager of CISCO XaaS and Cloud Partner Greater China, former chief director of global technology strategy cooperation of Alibaba.`,
    picture: '/maincloud/img/pagefounder/3.png'
}];

export default () => {
    let html = templateHtml(datas);

    return html;
}

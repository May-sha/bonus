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
                                <img class="lazyload-el" src="${item.picture}" data-src="${item.picture}">
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
    // position: 'CEO',
    introduction: `CEO of Meituan Cloud, former director of Network Department of Alibaba, former chairman of Baidu System Technology Committee.`,
    picture: '/maincloud/img/pagefounder/ceo.png'
}, {
    name: 'Grace Gao',
    // position: 'COO',
    introduction: `general manager of CISCO XaaS and Cloud Partner Greater China, former chief director of global technology strategy cooperation of Alibaba.`,
    picture: '/maincloud/img/pagefounder/grace.jpeg'
}, {
    name: 'Sid WONG',
    // position: 'CTO',
    introduction: `former director of network product research and development of Ali Cloud and Alipay.`,
    picture: '/maincloud/img/pagefounder/sid.png'
}, {
    name: 'Sean Ley',
    // position: 'CTO',
    introduction: `Former head of SRE and Devops of Meituan Cloud, Meituan Dianping technical expert , former senior system engineer of Baidu.`,
    picture: '/maincloud/img/pagefounder/ley.png'
}, {
    name: 'Will Wong',
    // position: 'CTO',
    introduction: `Former Meituan Dianping network and security technical expert，former senior network and security engineer of Sangfor.`,
    picture: '/maincloud/img/pagefounder/will.png'
}, {
    name: 'Felix Ying',
    // position: 'CTO',
    introduction: `Former head of Storage team of Meituan Cloud. Meituan Dianping technical expert. Abundant experience in distributed systems and high concurrency systems.`,
    picture: '/maincloud/img/pagefounder/ying.jpeg'
}, {
    name: 'Geiger Gau',
    // position: 'CTO',
    introduction: `A senior IT industry expert with more than 15 years of experience in Information Communications Technology. He was responsible for planning and designing multiple carrier-level products.`,
    picture: '/maincloud/img/pagefounder/geiger.png'
}, {
    name: 'Shawn Wong',
    // position: 'CTO',
    introduction: `Senior brand public relations expert and public opinion big data expert,has many years of experience in the field of Internet marketing and new media communication.For SMG, Youku and dozens of first-line stars, many years of marketing public relations and public opinion big data services.`,
    picture: '/maincloud/img/pagefounder/Shawn.png'
}, {
    name: 'Di Lee',
    // position: 'CTO',
    introduction: `Senior media and digital currency mine construction expert,has many years of experience in media marketing, distribution and publicity，And has many years of mine construction, node deployment experience.`,
    picture: '/maincloud/img/pagefounder/lidi.png'
}];

export default () => {
    let html = templateHtml(datas);

    return html;
}

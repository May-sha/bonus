function templateHtml (data) {
    let html = `
        <div class="team-part-wrapper content-part-wrapper">
            <div class="team-title-wrapper content-title-wrapper">
                <h3>ADVISOR</h3> 
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
    name: 'Binsheng Wang',
    introduction: `Consultant of Blockchain Development Organization, professor at Graduate School of Chinese Academy of Social Sciences.`,
    picture: '/maincloud/img/pagefounder/binsheng.jpeg'
}, {
    name: 'Coly Li',
    introduction: `Linux Kernel Maintainer, former founder of Taobao kernel team.`,
    picture: '/maincloud/img/pagefounder/coly.jpeg'
}];

export default () => {
    let html = templateHtml(datas);

    return html;
}

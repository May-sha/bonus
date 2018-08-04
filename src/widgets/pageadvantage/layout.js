
function templateHtml (data) {
    let mobileDom = `<div class="advantage-wrapper">
        <section class="regular slider">
            ${data.map((item) => {
                return `
                    <div class="slide-item">
                        <img src="${item.iconlink}">
                        <div class="content-wrapper">
                            <p class="title">${item.title}</p>
                            <p class="introduction">${item.introduction}</p>
                        </div>
                    </div>`;
                }).join('')}
        </section>
    </div>`;

    let pcDom = `
        <div class="pc-advantage-wrapper">
            <ul class="pc-icon-wrapper">
                ${data.map((item, index) => {
                    return `
                    <li class="pc-icon" index="${index}">
                        <img normal-src="${item.iconlink}" active-src="${item.activelink}" src="${item.iconlink}">
                    </li>`;
                }).join('')}
            </ul>
        </div>`;
    return pcDom + mobileDom;
}

let data = [{
    iconlink: '/maincloud/img/pageadvantage/1.png',
    activelink: '/maincloud/img/pageadvantage/1_active.png',
    title: 'Wide user coverage',
    introduction: 'users can join networks with various devices more flexibly.'
}, {
    iconlink: '/maincloud/img/pageadvantage/2.png',
    activelink: '/maincloud/img/pageadvantage/2_active.png',
    title: 'Cloud computing experience',
    introduction: '10 years of experience in cloud computing, independently completed R & D of cloud computing platform including virtualization,resource scheduling, SDN networks and cloud storage, etc. Experience of operating more than 500 thousand servers.'
}, {
    iconlink: '/maincloud/img/pageadvantage/3.png',
    activelink: '/maincloud/img/pageadvantage/3_active.png',
    title: 'Cross platform R & D experience',
    introduction: 'software and hardware R & D experience on platforms like X86, ARM, GPU and FPGA.'
}, {
    iconlink: '/maincloud/img/pageadvantage/4.png',
    activelink: '/maincloud/img/pageadvantage/4_active.png',
    title: 'All-around team',
    introduction: 'cloud computing company team with years of tacit cooperation in R & D, operation, marketing,BD,and sales, etc. Years of experience in Blockchain industry and network security.'
}, {
    iconlink: '/maincloud/img/pageadvantage/5.png',
    activelink: '/maincloud/img/pageadvantage/5_active.png',
    title: 'Customer resources',
    introduction: 'core members of the team have served as head of sales in large IT companies such as Alibaba and CISCO. Lots of customer resources at Top 500 Global Corporations.'
}];


export default () => {
    return `<div class="advantage-part-wrapper content-part-wrapper">
        <div class="advantage-title-wrapper content-title-wrapper">
            <h3>ADVANTAGE</h3> 
            <span class="title-line"></span>
        </div>
        ${
            templateHtml(data)
        }
    </div>`;
}
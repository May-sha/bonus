function templateHtml (data) {
    let html = `
        <div class="team-content">
            <div class="cloud-title">Core Team</div>
            ${
                data.map(function (item) {
                    return `
                    <div class="team-memeber-container" id="introduction">
                        <div class="team-memeber-pic">
                            <img class="lazyload-el" src="/maincloud/img/default.png" data-src="${item.picture}">
                        </div>
                        <div class="team-memeber-content">
                            <p class="team-memeber-name">${item.name}</p>
                            <p class="team-memeber-position">${item.position}</p>
                            <p class="team-memeber-introduction">
                                ${item.introduction}
                            </p>
                        </div>
                    </div>
                    
                `
                }).join('')
            }
        </div>`
    return html;
}

let datas = [{
    name: 'Shuang Li',
    position: 'CEO',
    introduction: `The internet is in the middle of a revolution: centralized proprietary services are being replaced with
    decentralized open ones; trusted parties replaced with verifiable computation; brittle location addresses
    replaced with resilient content addresses; inefficient monolithic services replaced with peer-to-peer algorithmic
    markets. Bitcoin, Ethereum, and other blockchain networks have proven the utility of decentralized
    transaction ledgers. `,
    picture: '/maincloud/img/team/avatar.png'
}, {
    name: 'Xinpu Wang',
    position: 'CTO',
    introduction: `These public ledgers process sophisticated smart contract applications and
    transact crypto-assets worth tens of billions of dollars. These systems are the first instances of internetwide
    Open Services, where participants form a decentralized network providing useful services for pay,
    with no central management or trusted parties. IPFS has proven the utility of content-addressing by
    decentralizing the web itself, serving billions of files used across a global peer-to-peer network. It liberates
    data from silos, survives netw`,
    picture: '/maincloud/img/team/avatar.png'
}, {
    name: 'Grace Gao',
    position: 'COO',
    introduction: `These public ledgers process sophisticated smart contract applications and
    transact crypto-assets worth tens of billions of dollars. These systems are the first instances of internetwide
    Open Services, where participants form a decentralized network providing useful services for pay,
    with no central management or trusted parties. IPFS has proven the utility of content-addressing by
    decentralizing the web itself, serving billions of files used across a global peer-to-peer network. It liberates
    data from silos, survives netw`,
    picture: '/maincloud/img/team/avatar.png'
}];

export default () => {
    let html = templateHtml(datas);

    return html;
}

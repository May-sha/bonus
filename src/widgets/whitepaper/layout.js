function productItem (obj) {

    let {buttons = []} = obj.buttons ? obj : {buttons: []};

    let button_html = buttons.map((item) => {
        return `<a href="${item.url}" target="${item.new_tab ? '_blank' : '_self'}" class="whitepaper-link">
                    ${item.text}
                </a>`;
    }).join('');

    return  `
        <div class="whitepaper-container" id="introduction">
            <div class="whitepaper-left">
                <div class="whitepaper-book">
                    <div class="whitepaper-title">BonusCloud WhitePaper</div>
                    <p class="whitepaper-introduction">
                        ${obj.mainContent}
                    </p>
                </div>
            </div>
            <div class="whitepaper-right">
                <div class="whitepaper-intro-title">${obj.title}</div>
                <p class="whitepaper-intro-content">
                    ${obj.text}
                </p>
                ${button_html}
            </div>
        </div>
        
    `;
}

let whitePaper = {
    mainContent: `The internet is in the middle of a revolution: centralized proprietary services are being replaced with
    decentralized open ones; trusted parties replaced with verifiable computation; brittle location addresses
    replaced with resilient content addresses; inefficient monolithic services replaced with peer-to-peer algorithmic
    markets. Bitcoin, Ethereum, and other blockchain networks have proven the utility of decentralized
    transaction ledgers. These public ledgers process sophisticated smart contract applications and
    transact crypto-assets worth tens of billions of dollars. These systems are the first instances of internetwide
    Open Services, where participants form a decentralized network providing useful services for pay,
    with no central management or trusted parties. IPFS has proven the utility of content-addressing by
    decentralizing the web itself, serving billions of files used across a global peer-to-peer network. It liberates
    data from silos, survives netw`,
    title: 'BonusCloud White Paper',
    text: `The internet is in the middle of a revolution: centralized proprietary services are being replaced with
    decentralized open ones; trusted parties replaced with verifiable computation; brittle location addresses
    replaced with resilient content addresses`,
    buttons: [{
        text: 'View More>>',
        new_tab: true,
        url: '#'
    }]
};

function templateHtml () {
    let html = '';
    let productTitle = '<div class="cloud-title">The New WhitePaper</div>'
    return productTitle + productItem(whitePaper);
}

export default () => {
    let html = templateHtml();

    return html;
}

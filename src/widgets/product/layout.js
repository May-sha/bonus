function productItem (obj) {

    let {buttons = []} = obj.buttons ? obj : {buttons: []};

    let button_html = buttons.map((item) => {
        return `<a href="${item.url}" target="${item.new_tab ? '_blank' : '_self'}" class="product-banner-a">
                    ${item.text}
                </a>`;
    }).join('');

    return  `
        <div class="product-banner-container" id="introduction">
            <div class="product-banner-img">
                <img class="lazyload-el" src="/maincloud/img/default.png" data-src="${obj.banner}">
            </div>
            <div class="product-banner-content">
                <div class="product-banner-title">${obj.title}</div>
                <p class="product-banner-text">
                    ${obj.text}
                </p>
                ${button_html}
            </div>
        </div>
        
    `;

}

// import './index.less';
function templateHtml (products) {
    let html = '';
    let productTitle = '<div class="cloud-title">Product Introduction</div>'
    for (var index in products) {
        html += productItem(products[index]);
    }
    return productTitle + html;
}

let products = [{
    title: 'Network',
    text: `The internet is in the middle of a revolution: centralized proprietary services are being replaced with
    decentralized open ones; trusted parties replaced with verifiable computation; brittle location addresses
    replaced with resilient content addresses; inefficient monolithic services replaced with peer-to-peer algorithmic
    markets. Bitcoin, Ethereum, and other blockchain networks have proven the utility of decentralized
    transaction ledgers. `,
    banner: 'https://cdn.ripple.com/wp-content/themes/ripple-beta/assets/img/home/blockchain.png'
}, {
    title: 'Storage',
    text: `These public ledgers process sophisticated smart contract applications and
    transact crypto-assets worth tens of billions of dollars. These systems are the first instances of internetwide
    Open Services, where participants form a decentralized network providing useful services for pay,
    with no central management or trusted parties. IPFS has proven the utility of content-addressing by
    decentralizing the web itself, serving billions of files used across a global peer-to-peer network. It liberates
    data from silos, survives netw`,
    banner: 'https://cdn.ripple.com/wp-content/themes/ripple-beta/assets/img/home/blockchain.png'
}, {
    title: 'Security',
    text: `These public ledgers process sophisticated smart contract applications and
    transact crypto-assets worth tens of billions of dollars. These systems are the first instances of internetwide
    Open Services, where participants form a decentralized network providing useful services for pay,
    with no central management or trusted parties. IPFS has proven the utility of content-addressing by
    decentralizing the web itself, serving billions of files used across a global peer-to-peer network. It liberates
    data from silos, survives netw`,
    banner: 'https://cdn.ripple.com/wp-content/themes/ripple-beta/assets/img/home/blockchain.png'
}];

export default () => {
    let html = templateHtml(products);

    return html;
}

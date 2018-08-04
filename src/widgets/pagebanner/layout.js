export default () => {
    try {
        return `<div class="page-banner-part">
            <div class="banner-text-wrapper">
                <div class="banner-text">
                    <p class="title">BONUS CLOUD</p>
                    <p class="desc">BLOCKCHAIN-DRIVEN EDGE COMPUTING AND DECENTRALIZED CLOUD SERVICE</p>
                </div>
            </div>
            <div class="page-banner-wrapper">
                <img src="/maincloud/img/pagebanner/banner_pc.png" />
            </div>
        </div>`
    } catch (e) {
        console.log(e, 'no option');
    }
}
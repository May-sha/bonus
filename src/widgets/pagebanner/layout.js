export default () => {
    try {
        return `<div id="home" class="page-banner-part content-part-wrapper">
            <div class="banner-text-wrapper">
                <div class="banner-text">
                    <p class="title">BONUS CLOUD</p>
                    <p class="desc">BLOCKCHAIN-DRIVEN EDGE COMPUTING AND DECENTRALIZED CLOUD SERVICE</p>
                </div>
            </div>
            <div class="page-banner-wrapper">
                <img src="/maincloud/img/pagebanner/banner.png" />
            </div>
        </div>`
    } catch (e) {
        console.log(e, 'no option');
    }
}
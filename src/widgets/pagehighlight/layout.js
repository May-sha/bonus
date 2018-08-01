export default () => {
    try {
        return `<div id="highlight" class="page-highlight-part content-part-wrapper">
            <p class="hightlight-title-wrapper">
               <h5>HIGHLIGHT</h5> 
            </p>
            <div class="page-highlight-wrapper">
                <div class="hightlight-item-wrapper storage-part">
                    <img class="pc-img" src="/maincloud/img/pagehighlight/highlight1.png" />
                    <img class="mobile-img" data-src="" />
                </div>
                <div class="hightlight-item-wrapper network-part">
                    <img class="pc-img" src="/maincloud/img/pagehighlight/highlight2.png" />
                    <img class="mobile-img" data-src="" />
                </div>
                <div class="hightlight-item-wrapper percent-part">
                    <img class="pc-img" src="/maincloud/img/pagehighlight/highlight3.png" />
                    <img class="mobile-img" data-src="" />
                </div>
                <div class="hightlight-item-wrapper platform-part">
                    <img class="pc-img" src="/maincloud/img/pagehighlight/highlight4.png" />
                    <img class="mobile-img" data-src="" />
                </div>
            </div>
        </div>`
    } catch (e) {
        console.log(e, 'no option');
    }
}
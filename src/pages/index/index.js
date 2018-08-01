
// import banner from '../../widgets/banners/layout.js';
import product from '../../widgets/product/layout.js';
import whitepaper from '../../widgets/whitepaper/layout.js';
import roadmap from '../../widgets/roadmap/layout.js';
import news from '../../widgets/news/layout.js';
import team from '../../widgets/team/layout.js';
import contact from '../../widgets/contact/layout.js';
import gotop from '../../widgets/gotop/layout.js';



import pageheader from '../../widgets/pageheader/layout.js';
import pagebanner from '../../widgets/pagebanner/layout.js';
import pagehighlight from '../../widgets/pagehighlight/layout.js';

let link = `<link rel="stylesheet" href="/maincloud/pages/index/index.css">`;
let script = `<script src="/maincloud/pages/index/$index.js"></script>`;
module.exports = () => {
	return  link + `<div class="main-container">
	<div class="header-container">${pageheader()}</div>
	<div class="banner-container">${pagebanner()}</div>
	<div class="highlight-container">${pagehighlight()}</div>
	
	<div id="product" class="content-block product-container">${product()}</div>
	<div class="content-block whitepaper-container">${whitepaper()}</div>
	<div class="content-block roadmap-container">${roadmap()}</div>
	<div id="news" class="content-block news-container">${news()}</div>
	<div id="team" class="content-block team-container">${team()}</div>
	<div id="contact" class="content-block contact-container">${contact()}</div>
	<div class="gotop-container">${gotop()}</div>
</div>${script}`;
}

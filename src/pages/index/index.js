
// import banner from '../../widgets/banners/layout.js';
// import product from '../../widgets/product/layout.js';
// import whitepaper from '../../widgets/whitepaper/layout.js';
// import roadmap from '../../widgets/roadmap/layout.js';
// import news from '../../widgets/news/layout.js';
// import team from '../../widgets/team/layout.js';
// import contact from '../../widgets/contact/layout.js';
// import gotop from '../../widgets/gotop/layout.js';


import pageheader from '../../widgets/pageheader/layout.js';
import pagebanner from '../../widgets/pagebanner/layout.js';
import pagehighlight from '../../widgets/pagehighlight/layout.js';
import pageadvantage from '../../widgets/pageadvantage/layout.js';
import pagefounder from '../../widgets/pagefounder/layout.js';
import pageadvisor from '../../widgets/pageadvisor/layout.js';
import pageagency from '../../widgets/pageagency/layout.js';
import pagepartner from '../../widgets/pagepartner/layout.js';
import pagewhitepaper from '../../widgets/pagewhitepaper/layout.js';
import pageroadmap from '../../widgets/pageroadmap/layout.js';
import pagecontact from '../../widgets/pagecontact/layout.js';


let link = `<link rel="stylesheet" href="/maincloud/pages/index/index.css">`;
let script = `<script src="/maincloud/pages/index/$index.js"></script>`;

/* <div id="product" class="content-block product-container">${product()}</div>
<div class="content-block whitepaper-container">${whitepaper()}</div>
<div class="content-block roadmap-container">${roadmap()}</div>
<div id="news" class="content-block news-container">${news()}</div>
<div id="team" class="content-block team-container">${team()}</div>
<div id="contact" class="content-block contact-container">${contact()}</div>
<div class="gotop-container">${gotop()}</div> */

module.exports = () => {
	return  link + `<div class="main-container">
		<div id="home" class="header-container">${pageheader()}</div>
		<div class="banner-container">${pagebanner()}</div>
		<div id="highlight" class="highlight-container">${pagehighlight()}</div>
		<div id="advantage" class="advantage-container">${pageadvantage()}</div>
		<div id="team" class="team-container">${pagefounder()}</div>
		<div id="advisor" class="advisor-container">${pageadvisor()}</div>
		<div id="agency" class="agency-container">${pageagency()}</div>
		<div id="partner" class="partner-container">${pagepartner()}</div>
		<div id="whitepaper" class="whitepaper-container">${pagewhitepaper()}</div>
		<div id="roadmap" class="roadmap-container">${pageroadmap()}</div>
		<div class="contact-container">${pagecontact()}</div>
	</div>
	${script}
	<script type="text/javascript" src="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.0/slick/slick.min.js"></script>`;
}

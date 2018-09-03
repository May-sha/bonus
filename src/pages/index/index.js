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
import pagefooter from '../../widgets/pagefooter/layout.js';


let link = `<link rel="stylesheet" href="/maincloud/pages/index/index.css">`;
let script = `<script src="/maincloud/pages/index/$index.js"></script>`;

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
		<div class="footer-container">${pagefooter()}</div>
	</div>
	${script}
	<script type="text/javascript" src="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.0/slick/slick.min.js"></script>`;
}

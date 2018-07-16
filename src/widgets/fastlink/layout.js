import _ from 'lodash';
import $ from 'jquery';

var fastLinkJson = [
	{
		name: 'enterprise-certificate',
		title: '企业认证',
		desc: '开启专属您的云资源',
		url: '/enterprise-person-authentication'
	}, {
		name: 'service',
		title: '用心服务',
		desc: '7×24小时专家客服',
		url: '/about/service'
	}, {
		name: 'postpay',
		title: '按需付费',
		desc: '秒级计费，低至包月价格',
		url: '/firework/postpay-reduction?site=bonuscloud&traffic_source=bonuscloud'
	}, {
		name: 'personal-certificate',
		title: '个人认证',
		desc: '开启专属您的云资源',
		url: '/enterprise-person-authentication'
	}
];
export default (dom) => {
	var fastlinktpl = `<div class="fastlink-list clearfix <%- name %>-list">
		<a class="fastlink-href" href="<%- url %>">
			<div class="fastlink-col fastlink-logo"></div>
			<div class="fastlink-col fastlink-line"></div>
			<div class="fastlink-col fastlink-content">
				<h2 class="fastlink-title"><%- title %></h2>
				<p class="fastlink-desc"><%- desc %></p>
			</div>
		</a>
		<div style="display: none;">
		<img class="lazyload-el" src="/maincloud/img/default.png" data-src="/maincloud/img/fastlink/enterprise-certificate-active.png"/>
		<img class="lazyload-el" src="/maincloud/img/default.png" data-src="/maincloud/img/fastlink/service-active.png"/>
		<img class="lazyload-el" src="/maincloud/img/default.png" data-src="/maincloud/img/fastlink/postpay-active.png"/>
		<img class="lazyload-el" src="/maincloud/img/default.png" data-src="/maincloud/img/fastlink/personal-certificate-active.png"/>
		</div>
	</div>`;
	var dom = '';
	_.each(fastLinkJson, function (item, index) {
		dom += _.template(fastlinktpl)(item);
	})
	return `<div class="fastlink-list-container">${dom}</div>`;
}
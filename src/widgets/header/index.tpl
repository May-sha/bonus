<div class="header-part <%- transparentType %> <%- mobileTransType %> <%- responseType %>">
    <div class="bonuscloud-header">
        <div class="container base-nav-container clearfix">
            <div class="logo-container">
                <a class="bonuscloud-logo" href="/" id="logo"></a>
            </div>
            <div class="header-list-container">
                <a href="javascript:void(0)" class="mobile-nav-icon"></a>
                <ul class="header-list header-left">
                    <li>
                        <a href="/">HOME</a>
                    </li>
                    <li>
                        <a id='products_url' href="#product">PRODUCT</a>
                    </li>
                    <li>
                        <a id='solution_url' href="#news">NEWS</a>
                    </li>
                    <li>
                        <a href="#team">ABOUT</a>
                    </li>
                    <li>
                        <a href="#contact">CONTACT</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- <div class="bonuscloud-header-mobile">
        <div class="container base-nav-container">
            <div class="mobile-header-container <%- bgcolorType %>">
                <a class="bonuscloud-logo" href="/" id="logo"></a>
                <a href="javascript:void(0)" class="mobile-nav-icon"></a>
            </div>
            <div class="header-list-container" style="z-index:100;">
                <ul class="header-list header-nav">
                    <li<% if(curPage=='index'){ %> class="active" <% } %>>
                        <a href="/">首页</a>
                    </li>
                    <li class="nav-first<% if(curPage=='products'){ %> active<% } %>">
                        <span class="rec-icon blue"></span>
                        <a id='products_url' href="javascript:void(0)">
                            产品服务
                            <span class="nav-icon"></span>
                        </a>
                        <div class="nav-first-container">
                            <ul class="sub-nav">
                                <li class="nav-second">
                                    <a href="javascript:void(0);">
                                        计算
                                        <span class="nav-icon"></span>
                                    </a>
                                    <div class="nav-second-container">
                                        <ul class="sub-nav-second">
                                            <li>
                                                <a href="/product/server">
                                                    <span class="sub-third-icon"></span>云主机
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/product/myserver">
                                                    <span class="sub-third-icon"></span>独享云主机
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-second">
                                    <a href="javascript:void(0);">
                                        网络
                                        <span class="nav-icon"></span>
                                    </a>
                                    <div class="nav-second-container">
                                        <ul class="sub-nav-second">
                                            <li>
                                                <a href="/product/network">
                                                    <span class="sub-third-icon"></span>网络
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/product/vpc">
                                                    <span class="sub-third-icon"></span>私有网络
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/product/nat">
                                                    <span class="sub-third-icon"></span>NAT网关
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/product/elb">
                                                    <span class="sub-third-icon"></span>负载均衡
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-second">
                                    <a href="javascript:void(0);">
                                        存储与分发
                                        <span class="nav-icon"></span>
                                    </a>
                                    <div class="nav-second-container">
                                        <ul class="sub-nav-second">
                                            <li>
                                                <a href="/product/disk">
                                                    <span class="sub-third-icon"></span>云硬盘
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/product/mss">
                                                    <span class="sub-third-icon"></span>对象存储
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/product/rabbitmq">
                                                    <span class="sub-third-icon"></span>消息队列
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/product/cdn">
                                                    <span class="sub-third-icon"></span>CDN
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/product/mdm">
                                                    <span class="sub-third-icon"></span>数据迁移
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-second">
                                    <a href="javascript:void(0);">
                                        数据库
                                        <span class="nav-icon"></span>
                                    </a>
                                    <div class="nav-second-container">
                                        <ul class="sub-nav-second">
                                            <li>
                                                <a href="/product/mysql">
                                                    <span class="sub-third-icon"></span>MySQL
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/product/mongodb">
                                                    <span class="sub-third-icon"></span>MongoDB
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/product/datatrans">
                                                    <span class="sub-third-icon"></span>数据传输
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-second">
                                    <a href="javascript:void(0);">
                                        缓存
                                        <span class="nav-icon"></span>
                                    </a>
                                    <div class="nav-second-container">
                                        <ul class="sub-nav-second">
                                            <li>
                                                <a href="/product/redis">
                                                    <span class="sub-third-icon"></span>Redis
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/product/memcached">
                                                    <span class="sub-third-icon"></span>Memcached
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-second">
                                    <a href="javascript:void(0);">
                                        安全防护
                                        <span class="nav-icon"></span>
                                    </a>
                                    <div class="nav-second-container">
                                        <ul class="sub-nav-second">
                                            <li>
                                                <a href="/product/websafe">
                                                    <span class="sub-third-icon"></span>Web应用防火墙
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/product/ddossafe">
                                                    <span class="sub-third-icon"></span>DDoS基础防护
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-first<% if(curPage=='solution'){ %> active" <% } %>">
                        <span class="rec-icon blue"></span>
                        <a id='solution_url' href="javascript:void(0)">
                            解决方案
                            <span class="nav-icon"></span>
                        </a>
                        <div class="nav-first-container">
                            <ul class="sub-nav">
                                <li>
                                    <a href="/solution/catering">餐饮云</a>
                                </li>
                                <li>
                                    <a href="/solution/hotel">酒店云</a>
                                </li>
                                <li>
                                    <a href="/solution/traffic">交通云</a>
                                </li>
                                <li>
                                    <a href="/solution/o2o">O2O电商</a>
                                </li>
                                <li>
                                    <a href="/solution/education">智慧教育</a>
                                </li>
                                <li>
                                    <a href="/solution/hybridcloud">混合云</a>
                                </li>
                                <li>
                                    <a href="/solution/website">网站</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-first<% if(curPage=='price'){ %> active<% } %>">
                        <span class="rec-icon blue"></span>
                        <a href="javascript:void(0)">
                            价格
                            <span class="nav-icon"></span>
                        </a>
                        <div class="nav-first-container">
                            <ul class="sub-nav">
                                <li class="nav-second">
                                    <a href="javascript:void(0)">
                                        价格计算器
                                        <span class="nav-icon"></span>
                                    </a>
                                    <div class="nav-second-container">
                                        <ul class="sub-nav-second">
                                            <li>
                                                <a href="/buy/server"><span class="sub-third-icon"></span>云主机</a>
                                            </li>
                                            <li>
                                                <a href="/buy/physical"><span class="sub-third-icon"></span>物理主机</a>
                                            </li>
                                            <li>
                                                <a href="/buy/ebs"><span class="sub-third-icon"></span>云硬盘</a>
                                            </li>
                                            <li>
                                                <a href="/buy/rds"><span class="sub-third-icon"></span>数据库</a>
                                            </li>
                                            <li>
                                                <a href="/buy/cache"><span class="sub-third-icon"></span>缓存服务</a>
                                            </li>
                                            <li>
                                                <a href="/buy/elb"><span class="sub-third-icon"></span>负载均衡</a>
                                            </li>
                                            <li>
                                                <a href="/buy/vrouter"><span class="sub-third-icon"></span>路由器</a>
                                            </li>
                                            <li>
                                                <a href="/buy/mss"><span class="sub-third-icon"></span>对象存储</a>
                                            </li>
                                            <li>
                                                <a href="/buy/mds"><span class="sub-third-icon"></span>大数据</a>
                                            </li>
                                            <li>
                                                <a href="/buy/rabbitmq"><span class="sub-third-icon"></span>消息队列</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a class="console console-entry" href="javascript:void(0)">控制台</a>
                    </li>
                    <li class="nav-first <% if(curPage=='doc'){ %> active<% } %>">
                        <span class="rec-icon blue"></span>
                        <a id='doc_url' href="javascript:void(0)">
                            技术支持
                            <span class="nav-icon"></span>
                        </a>
                        <div class="nav-first-container">
                            <ul class="sub-nav">
                                <li>
                                    <a href="/doc/products">产品文档</a>
                                </li>
                                <li>
                                    <a href="/doc/api">API文档</a>
                                </li>
                                <li>
                                    <a href="/doc/sdk">SDK文档</a>
                                </li>
                                <li>
                                    <a href="/library">知识库</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li<% if(curPage=='beian'){ %> class="active" <% } %>>
                        <a href="/beian/">备案</a>
                    </li>
                    <li class="nav-first<% if(curPage=='about'){ %> active" <% } %>">
                        <span class="rec-icon blue"></span>
                        <a href="javascript:void(0)">
                            关于
                            <span class="nav-icon"></span>
                        </a>
                        <div class="nav-first-container">
                            <ul class="sub-nav">
                                <li>
                                    <a href="/about/knowus">平台介绍</a>
                                </li>
                                <li>
                                    <a href="/about/contact">联系我们</a>
                                </li>
                                <li>
                                    <a href="/about/channel_sale">渠道合作</a>
                                </li>
                                <li>
                                    <a href="/about/cooperation">合作伙伴</a>
                                </li>
                                <li>
                                    <a href="/about/friendlinks">友情链接</a>
                                </li>
                                <li>
                                    <a href="/about/terms">用户协议</a>
                                </li>
                                <li>
                                    <a href="/about/sla">服务等级协议</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <ul class="header-list header-info" id="mheaderAccountContainer">
                    <li id='nav_login'<% if(curPage == 'login'){ %> class="active"<% } %>>
                        <a class="u-login" href="javascript:void(0)">登录</a>
                    </li>
                    <li id='nav_signup' class="account-signin">
                        <a href="/uf_signup">注册</a>
                    </li>
                </ul>
            </div>
        </div>
    </div> -->
</div>
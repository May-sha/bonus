
node v7.0+ 支持async


##安装及运行 测试环境

安装 node，mac/linux 推荐用 nvm

在构建目录下(/maincloud/build) `npm i`

之后就可以在项目目录下 npm run watch 启动，然后访问 http://localhost:3000/
端口默认3000 端口占用时，可使用 PORT=3001 npm run watch 指定启动端口

##说明

###规范
待完善

###目录结构

####/build／目录
项目构建目录，存放打包上线文件及中间生成文件
/build 打包路径
/build/dist-build 打包临时文件
/build/output 静态页输出包

####/src/目录
这个文件下存放官网源文件

/src 官网代码主目录
/src/css 公共样式文件
/src/img 官网所需图片
/src/pages 
/src/widgets 各个小模块 
/src/components 
/src/preload.js 前端公共js 样式
####/src/pages
以功能为模块，每个功能一个文件夹

####/src/pages/**/*.js 
该文件将会打包生成静态html文件
注：该文件代码将会在服务端运行打包，不可以写只有浏览器端才可以运行的代码，例如：window.* 、DOM.width

####/src/pages/**/$*.js
该文件将会生成页面引用的js文件
引用方式 <script src="/maincloud/pages/**/**.js"></script>

####/src/pages/**/*.less
less 代码会被打包成css文件，在引用时请使用css引用，例如：<link rel="stylesheet" href="/maincloud/pages/**/*.css">

##问题 



##项目新增记录
添加pre-push钩子，git push 时构建代码检查错误 2017-03-26

##线上路由规则
以 '/about', '/index', '/product', '/solution' 开始的为静态html资源文件，访问时不带.html 后缀，映射到/maincloud/build/output/pages 下
例如：资源 /pages/product/server.html 访问时路径为 /product/server

静态js,css,img 文件以/maincloud 开头，去掉/maincloud, 映射到/maincloud/build/output 下即可
例如：资源 /pages/index/index.css 访问url /maincloud/pages/index/index.css，

注：首页为 /  不带 '/index/index'

部署脚本 /maincloud/init.sh

##不展示页面说明
/pages/solution/enterprise.html 企业级应用
/pages/solution/internetplus.html 互联网+


##本地watch
src/pages/*.js
src/widgets/layout.js
src/widgets/index.js
src/pages/*.less
src/widgets/*.less

supervisor build/koa.js



build-source 构建源文件
require('babel-polyfill')
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const Promise = require('bluebird');
const path = require('path')
const send = require('koa-send')

const fs = Promise.promisifyAll(require('fs'));
const port = Number(process.env.PORT) || 3000;
const pageFile = require('./lib/s.js')()
const router = new Router();
pageFile.forEach(async function (fileName) {
  var iPath = new RegExp('^/' + fileName);
  router.get(iPath, function(ctx, next){
    var fileName = ctx.path.replace(/\//, '') + '.html';
    return fs.readFileAsync(path.join(__dirname, '../output/pages', fileName), 'utf-8').then(function (file) {
        ctx.body = file;
    })
  });
});
let p = path.join(__dirname, '../output/pages');


router.get(/^\/maincloud/, async function (ctx, next){
    ctx.path = ctx.path.replace(/\/maincloud/, '');
    await send(ctx, ctx.path, { root: path.join(__dirname, '../output') })
});

router.get('/', function(ctx, next){
    var fileName = 'index/index.html'
    return fs.readFileAsync(path.join(__dirname, '../output/pages', fileName), 'utf-8').then(function (file) {
        ctx.body = file;
    })
});

app.use(router.routes())
    .use(router.allowedMethods())

app.listen(port, function () {
  console.log("server listening at http://127.0.0.1:%d",
        this.address()
        .port);
});
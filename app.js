const port = 3002;
const Koa = require('koa');
const app = new Koa();

// assets 静态资源

// xtemplate 模板使用
var xtpl = require('xtpl/lib/koa');
xtpl(app,{
  views: 'views'
});

// bodyParser
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

// controller
const controller = require('./controller');
app.use(controller());

app.listen(port);

console.log(`app started at port ${port}...`);
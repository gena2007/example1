const Koa = require('koa');

const app = new Koa();
const port = 3002;

app.use(async (ctx, next) => {
  await next();
  ctx.response.type = 'text/html';
  ctx.response.body = '<h1>hello gena</h1>';
});

app.listen(port);
console.log(`app started at port ${port}...`);
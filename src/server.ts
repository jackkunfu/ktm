import koa = require('koa')

const app = new koa()

app.use((ctx) => {
  ctx.body = '111'
})

app.listen(3000)
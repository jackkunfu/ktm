import KoaRouter = require('koa-router')

const router = new KoaRouter()

interface CTX {
  req: {}, res: {}
}

router.get('/', (ctx: any) => {
  ctx.body = '111'
  // await ctx.render('index', {
  //   title: '111'
  // })
})

module.exports = router
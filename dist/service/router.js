"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KoaRouter = require("koa-router");
const router = new KoaRouter();
router.get('/', (ctx) => {
    ctx.body = '111';
    // await ctx.render('index', {
    //   title: '111'
    // })
});
module.exports = router;
//# sourceMappingURL=router.js.map
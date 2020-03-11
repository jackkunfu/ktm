const Koa = require('koa');
const KoaRouter = require('koa-router');
const router = new KoaRouter();
const Redis = require('koa-redis');
const Store = new Redis().client;
const baseSus = { code: '1', msg: '操作成功' };
const baseErr = { code: '1', msg: '操作失败' };
router.prefix('/user'); // 接口前缀 服务接口可以多个文件去处理
router.get('/list', (ctx) => {
    ctx.body = Object.assign(Object.assign({}, baseSus), { list: [
            { id: 1, name: '1' }
        ] });
});
router.post('/login', (ctx) => {
    ctx.cookies.set('cc', 'ckvalue'); // 设置cookie
    if (ctx.req == '/daf') {
        ctx.body = Object.assign(Object.assign({}, baseSus), { cookie: ctx.cookies.set('cc') // 获取cookie
         });
    }
    else {
        ctx.body = Object.assign(Object.assign({}, baseErr), { cookie: ctx.cookies.set('cc') // 获取cookie
         });
        baseErr;
    }
});
module.exports = router;
//# sourceMappingURL=user.js.map
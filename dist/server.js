const koa = require('koa');
const index = require('./service/router');
const user = require('./service/user');
const app = new koa();
const session = require('koa-generic-session');
const Redis = require('koa-redis');
const mongos = require('mongoose');
const db = require('./model/config.js');
app.keys = ['session', 'redis'];
app.use(session({
    key: 'rs',
    prefix: 'sessionprefix',
    store: new Redis()
}));
app.use((ctx) => {
    ctx.body = '111';
});
mongos.connect(db.dbs, { useNerUrlParser: true });
app.listen(3000);
//# sourceMappingURL=server.js.map
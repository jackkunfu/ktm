const koa = require('koa')
const index = require('./service/router')
const user = require('./service/user')
const app = new koa()

const session = require('koa-generic-session')
const Redis = require('koa-redis')

const mongos = require('mongoose')
const db = require('./model/config.js')

app.keys = ['session', 'redis']
app.use(
  session({
    key: 'rs', // 浏览器cookie 中 redis 自动生成的字段key
    prefix: 'sessionprefix', // session 存储在redis里的特征（前缀）
    store: new Redis()
  })
)

app.use((ctx: any) => {
  ctx.body = '111'
})

mongos.connect(
  db.dbs, { useNerUrlParser: true }
)

app.listen(3000)
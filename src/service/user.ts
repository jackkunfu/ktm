// const Koa = require('koa')
const KoaRouter = require('koa-router')
const router = new KoaRouter()

import * as Redis from 'koa-redis'
const Store = new Redis().client

const baseSus = { code: '1', msg: '操作成功' }

const baseErr = { code: '1', msg: '操作失败' }

router.prefix('/user') // 接口前缀 服务接口可以多个文件去处理

router.get('/list', (ctx: Koa.BaseContext) => {
  ctx.body = {
    ...baseSus,
    list: [
      { id: 1, name: '1' }
    ]
  }
})

router.post('/login', (ctx: any) => {
  ctx.cookies.set('cc', 'ckvalue') // 设置cookie
  if (ctx.req == '/daf') {
    ctx.body = {
      ...baseSus,
      cookie: ctx.cookies.set('cc') // 获取cookie
    }
  } else {
    ctx.body = {
      ...baseErr,
      cookie: ctx.cookies.set('cc') // 获取cookie
    }
    baseErr
  }
})

module.exports = router
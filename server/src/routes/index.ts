import * as Router from 'koa-router'

const router = new Router()

router
  .get('/', async ctx => {
    ctx.body = 'Hello, TS!'
  })

export default function routes() {
  return router.routes()
}

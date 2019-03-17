import * as compose from 'koa-compose'
import * as serve from 'koa-static'
import * as logger from 'koa-logger'
import errors from './errors'
import * as session from 'koa-session'
import {mongoose} from '../libs'
import * as mongooseStore from 'koa-session-mongoose'
import * as bodyParser from 'koa-bodyparser'

export default function(app) {
  return compose([
    serve('.'),
    logger(),
    errors,
    session({
      signed: false,

      store: mongooseStore.create({
        name: 'Session',
        expires: 3600 * 4,
        connection: mongoose
      })
    }, app),
    bodyParser()
  ])
}

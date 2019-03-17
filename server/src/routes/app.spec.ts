import * as assert from 'assert'
import app from '../app'
import {mongoose} from '../libs'
import * as request from 'request-promise'

let req = request.defaults({
  resolveWithFullResponse: true,
  simple: false,
  json: true
})

function getURL(path) {
  return `http://localhost:7000${path}`
}

describe('Testing routes', () => {
  let server

  before(done => {
    server = app.listen(7000, done)
  })

  after(done => {
    server.close(done)
    mongoose.disconnect()
  })

  describe('GET /', () => {
    it('should return hello world', async () => {
      const res = await req.get(getURL('/'))
      assert.strictEqual(res.statusCode, 200)
      assert.strictEqual(res.body, 'Hello, TS!')
      assert.strictEqual(res.headers['content-type'], 'text/plain; charset=utf-8')
    })
  })
})

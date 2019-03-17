import app from './app'
import * as http from 'http'
import * as config from 'config'

const server = http.createServer(app.callback())

server.listen(config.get('port'))

process.on('unhandledRejection', (err: any) => {
  console.log('unhandledRejection', err.message)
})

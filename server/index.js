const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const compression = require('compression')
const helmet = require('helmet')
const morgan = require('morgan')
const config = require('../config/app')
const importControllers = require('./utils')

const codeErrorHandler = require('./middleware/code-error-handler')

const server = express()

server.use(morgan('dev'))
server.use(compression())
server.use(helmet())
server.set('etag', false);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: false
}))

importControllers(server)

server.get('/health-check', (req, res) => {
  return res.status(200).json({
    message: 'EU SOU CANTORA',
    time: new Date()
  })
})

server.use('/', express.static(path.resolve(__dirname, '..', 'public')))
server.use(codeErrorHandler())

const listen = () => {
  server.listen(config.port, err => {
      if (err) {
        console.error(err)
      }
      console.log('\n')
      console.log(new Array(30).join('★☆'))
      console.log(`»»» vocês vão ter que me aturar na v${config.version} e na porta: ${config.port}`)
      console.log(new Array(30).join('★☆'))
      console.log('\n')
  })
}

module.exports = { server, listen }
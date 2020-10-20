const next = require('next');

const { server, listen } = require('./server');
const { node_env } = require('./config/app');

const dev = node_env !== 'production';
const app = next({ dev, dir: 'src' })
const nextHandler = app.getRequestHandler();

app.prepare().then(() => {
    server.get('/', (req, res) => {
        app.render(req, res, '/', {
            ...req.query,
            ...req.params,
        })
    })

    server.get('*', nextHandler)

    listen()
})
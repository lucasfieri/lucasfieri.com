require('dotenv').config()

const env = require('env-var');
const pkg = require('../package.json')

module.exports = Object.freeze({
  name: 'lucasfieri.com',
  version: pkg.version,
  description: 'Lukita api to serve frontend',
  port: env.get('PORT').default('3000').asIntPositive(),
  node_env: env.get('NODE_ENV').asString(),
});


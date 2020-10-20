const debug = require('debug')

module.exports = (...args) => debug(
  ['NEXT', ...args].join(':'),
)

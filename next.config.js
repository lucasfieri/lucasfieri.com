const path = require('path')

module.exports = {
  poweredByHeader: false,
  generateEtags: false,
  webpack: (config, options) => {
    config.plugins = config.plugins || []
    config.node = { fs: 'empty' };
    config.resolve.modules.push(path.resolve(__dirname, 'src'))
    return config
  },
}

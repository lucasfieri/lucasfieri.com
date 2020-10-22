const path = require('path')
const withImages = require('next-images');

module.exports = withImages({
  serverless: true,
  poweredByHeader: false,
  generateEtags: false,
  exportTrailingSlash: true,
  webpack: (config, options) => {
    config.plugins = config.plugins || []
    config.node = { fs: 'empty' };
    config.resolve.modules.push(path.resolve(__dirname, 'src'))
    return config
  },
})

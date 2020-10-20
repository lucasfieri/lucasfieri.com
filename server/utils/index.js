const fs = require('fs')
const path = require('path')
const config = require('../../config/app')
function getAvailableRoutes(app) {
  return app._router.stack
    .filter(r => r.route)
    .map(r => {
      return {
        method: Object.keys(r.route.methods)[0].toUpperCase(),
        path: r.route.path
      };
    });
}

function logAvailableRoutes(app) {
  console.log('Avaiables Routes:', JSON.stringify(getAvailableRoutes(app), null, 2));
}

function importControllers(app) {
  fs.readdirSync(path.resolve(__dirname, '../controllers')).forEach(file => {
    import(`../controllers/${file}`).then((route) => {
      route.default(app)
      if (config.node_env == 'development') {
        logAvailableRoutes(app)
      }
    })
  });  
}
module.exports = importControllers
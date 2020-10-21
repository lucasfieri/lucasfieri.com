const fs = require('fs')
const path = require('path')

function importControllers(app) {
  fs.readdirSync(path.resolve(__dirname, '../controllers')).forEach(file => {
    import(`../controllers/${file}`).then((route) => {
      route.default(app)
    })
  });
}
module.exports = importControllers

var production = require('./webpack_config/production.config.js')
var development = require('./webpack_config/development.config.js')

module.exports = { production, development }[process.env.NODE_ENV]

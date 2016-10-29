var production = require('./webpack_config.mt/production.config.js')
var development = require('./webpack_config.mt/development.config.js')

module.exports = { production, development }[process.env.NODE_ENV]

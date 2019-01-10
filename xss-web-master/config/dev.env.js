var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
  BASE_API: '"http://localhost:8082"',
  BASE_UPLOAD: '"http://test.028bmz.com/upload-web"'
})

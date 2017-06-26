var webpack = require('webpack'),
  path = require('path'),
  DEV = path.resolve(__dirname, 'dev'),
  OUTPUT = path.resolve(__dirname, 'output'),
  config = {
    entry: DEV + '/app.jsx',
    output: {
      path: OUTPUT,
      filename: 'bundle.js'
    },
    module: {
      loaders: [{
        include: DEV,
        loader: 'babel-loader'
      }]
    }
}

module.exports = config

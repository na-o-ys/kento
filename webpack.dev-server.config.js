const webpack = require('webpack')
const path = require('path')
const buildPath = path.resolve(__dirname, 'build')
const nodeModulesPath = path.resolve(__dirname, 'node_modules')
const TransferWebpackPlugin = require('transfer-webpack-plugin')

const config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/material/index.js'),
  ],
  devServer: {
    contentBase: 'sample/mt',
    devtool: 'eval',
    hot: true,
    inline: true,
    port: 3000,
    host: 'localhost',
  },
  devtool: 'eval',
  output: {
    path: buildPath,
    filename: 'app.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new TransferWebpackPlugin([
      {from: 'mt'},
    ], path.resolve(__dirname, 'sample')),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader/webpack', 'babel-loader'],
        exclude: [nodeModulesPath],
      },
    ],
  },
}

module.exports = config

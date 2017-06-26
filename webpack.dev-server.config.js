const webpack = require('webpack')
const path = require('path')
const buildPath = path.resolve(__dirname, 'build')
const nodeModulesPath = path.resolve(__dirname, 'node_modules')
const TransferWebpackPlugin = require('transfer-webpack-plugin')

const config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src'),
  ],
  devServer: {
    contentBase: 'sample',
    devtool: 'eval',
    hot: true,
    inline: true,
    port: 3000,
    host: 'localhost',
  },
  devtool: 'eval',
  output: {
    path: buildPath,
    filename: 'app.js'
  },
  devServer: {
    contentBase: 'dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new TransferWebpackPlugin([
      {from: '.'},
    ], path.resolve(__dirname, 'sample')),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loaders: ['react-hot-loader/webpack', 'babel-loader'],
      },
      {
        test: /\.ts(x)?$/,
        exclude: [/node_modules/],
        loaders: ["react-hot-loader/webpack", "ts-loader"],
      }
    ],
  },
}

module.exports = config

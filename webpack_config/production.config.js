var webpack = require('webpack')
var path = require('path')
var AssetsPlugin = require('assets-webpack-plugin')
var root_path = path.resolve("./")

module.exports = {
  context: root_path + "/app/assets/javascripts/src",
  entry: ["babel-polyfill", "./index.js"],
  output: {
    path: root_path + "/public/javascripts",
    filename: "bundle_[chunkhash].js"
  },
  resolve: {
    root: [
      root_path + "/app/assets/javascripts/src"
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      "NODE_ENV",
    ])
  ]
}

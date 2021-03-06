const webpack = require('webpack')
const path = require('path')

const project_root = path.resolve("./")
const javascripts_root = project_root + "/src/javascripts"

module.exports = {
  context: javascripts_root,
  entry: ["babel-polyfill", "./index.js"],
  output: {
    path: project_root + "/dist/javascripts",
    filename: "./kento_client.min.js"
  },
  resolve: {
    root: [
      javascripts_root
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /json-kifu-format/],
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      "NODE_ENV",
    ])
  ]
}

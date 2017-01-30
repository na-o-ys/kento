const webpack = require('webpack')
const path = require('path')

const project_root = path.resolve("./")
const javascripts_root = project_root + "/src"

module.exports = {
  context: javascripts_root,
  entry: ["babel-polyfill", "./index.ts"],
  output: {
    path: project_root + "/dist/javascripts",
    filename: "./kento.min.js"
  },
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: "babel-loader"
      },
      {
        test: /\.ts(x)?$/,
        exclude: [/node_modules/],
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      "NODE_ENV",
    ])
  ]
}

'use strict'
var debug = process.env.NODE_ENV !== "production";
const path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: debug ? "inline-sourcemap" : "source-map",
  entry: ["./src/js/app.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.min.js"
  },
  devServer: {
	contentBase: "./dist",
	compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: debug ? [/*if not production do nothing*/] : [
	/*if production do below */
	new UglifyJSPlugin({ sourceMap: true }), //to minify your js code , remove comments
  ]
};
var webpack = require("webpack");
var path = require('path');

module.exports = {
  entry: './public/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../js')
  }
}
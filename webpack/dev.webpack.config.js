var webpack = require("webpack");
var path = require('path');

module.exports = {
  entry: './public/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../src/main/webapp/resources/js')
  },
  module: {
    rules: [{
      test: /\.js$/, //Check for all js files
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }]
    },
    {
      test: /\.(sass|scss)$/, //Check for sass or scss file names
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ]
    },
    {
      test: /\.json$/,
      loader: "json-loader" //JSON loader
    }
    ]
  },
  //To run development server
  devServer: {
    contentBase: path.resolve(__dirname, '../')
  },
  devtool: 'source-map',
  plugins: [
    /*new webpack.DllReferencePlugin({
      context: '.',
      manifest: require(path.resolve(__dirname, '../src/main/webapp/resources/js/moment-manifest.json'))
    }),*/
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require(path.resolve(__dirname, '../src/main/webapp/resources/js/angular-manifest.json'))
    }),
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require(path.resolve(__dirname, '../src/main/webapp/resources/js/jquery-manifest.json'))
    }),
    /*new webpack.DllReferencePlugin({
      context: '.',
      manifest: require(path.resolve(__dirname, '../src/main/webapp/resources/js/lodash-manifest.json'))
    }),*/
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require(path.resolve(__dirname, '../src/main/webapp/resources/js/bootstrap-manifest.json'))
    })
  ]
};

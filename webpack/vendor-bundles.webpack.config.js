var webpack = require('webpack')
var path = require('path');

module.exports = {
  entry: {
    // create two library bundles, one with jQuery and
    // another with Angular and related libraries
    'jquery': ['jquery'],
    'angular': ['angular', 'angular-ui-router', 'angular-ui-notification'],
    //'moment': ['moment'],
    'fileupload': ['ng-file-upload'],
    'bootstrap': ['bootstrap']
	
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../src/main/webapp/resources/js/'),

    // The name of the global variable which the library's
    // require() function will be assigned to
    library: '[name]_lib',
  },
  node: {
    fs: "empty"
  },
  plugins: [
    new webpack.DllPlugin({
      // The path to the manifest file which maps between
      // modules included in a bundle and the internal IDs
      // within that bundle
      path: path.resolve(__dirname, '../src/main/webapp/resources/js/[name]-manifest.json'),
      // The name of the global variable which the library's
      // require function has been assigned to. This must match the
      // output.library option above
      name: '[name]_lib'
    }),
  ],
}

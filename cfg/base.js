'use strict';
let path = require('path');
let defaultSettings = require('./defaults');

module.exports = {
  port: defaultSettings.port,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'bundle.js',
    publicPath: defaultSettings.publicPath
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: false
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      actions: `${defaultSettings.srcPath}/actions/`,
      components: `${defaultSettings.srcPath}/components/`,
      config: `${defaultSettings.srcPath}/config/` + process.env.REACT_WEBPACK_ENV,
      layouts: `${defaultSettings.srcPath}/layouts/`,
      middleware: `${defaultSettings.srcPath}/middleware/`,
      stores: `${defaultSettings.srcPath}/stores/`,
      utils: `${defaultSettings.srcPath}/utils/`,
      styles: `${defaultSettings.srcPath}/styles/`,
      views: `${defaultSettings.srcPath}/utils/`,
      'react/lib/ReactMount': 'react-dom/lib/ReactMount'
    }
  },
  module: {}
};

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
      config: `${defaultSettings.srcPath}/config/` + process.env.REACT_WEBPACK_ENV,
      i18n: `${defaultSettings.srcPath}/i18n/`,
      modules: `${defaultSettings.srcPath}/modules/`,
      routes: `${defaultSettings.srcPath}/routes/`,
      static: `${defaultSettings.srcPath}/static/`,
      store: `${defaultSettings.srcPath}/store/`,
      theme: `${defaultSettings.srcPath}/theme/`,
      utils: `${defaultSettings.srcPath}/utils/`,
      lib: path.join(__dirname, '/../lib/'),
      'react/lib/ReactMount': 'react-dom/lib/ReactMount'
    }
  },
  module: {}
};

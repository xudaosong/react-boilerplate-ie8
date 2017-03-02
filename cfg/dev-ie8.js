'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

let config = Object.assign({}, baseConfig, {
  entry: [
    './src/index'
  ],
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: defaultSettings.getDefaultModules()
});

config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  include: [path.join(__dirname, '/../src')]
});

config.module.postLoaders.push({
  test: /\.(js|jsx)$/,
  loaders: ['es3ify-loader'],
  include: [path.join(__dirname, '/../src')]
});

module.exports = config;

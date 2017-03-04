'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');
let config = Object.assign({}, baseConfig, {
  entry: path.join(__dirname, '../src/index'),
  cache: false,
  devtool: false,
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      },
      output: {
          comments: false
      }
    }),
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
    // new webpack.optimize.DedupePlugin(),
    // new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false
    //   }
    // }),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.AggressiveMergingPlugin(),
    // new webpack.NoErrorsPlugin()
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
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

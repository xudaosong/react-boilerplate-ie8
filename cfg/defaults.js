'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const defaultPort = 8000;

function getDefaultModules() {
  return {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      }, {
        test: /\.sass/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      }, {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
      }, {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader'
      }, {
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader'
      }, {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      }, {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      }
    ],
    postLoaders: []
  };
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  port: defaultPort,
  getDefaultModules: getDefaultModules
};

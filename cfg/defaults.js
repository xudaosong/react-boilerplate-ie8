'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const defaultPort = 8000;
let postcssModulesValue = require('postcss-modules-values');
let autoprefixer = require('autoprefixer');

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
        exclude: path.resolve(__dirname, '/../src/styles'),
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      }, {
        test: /\.css$/,
        include: path.resolve(__dirname, '/../src/styles'),
        loader: 'style-loader!css-loader!postcss-loader'
      }, {
        test: /\.sass/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      }, {
        test: /\.scss/,
        exclude: path.resolve(__dirname, '/../src/styles'),
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader?outputStyle=expanded!postcss-loader'
      }, {
        test: /\.scss/,
        include: path.resolve(__dirname, '/../src/styles'),
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded!postcss-loader'
      }, {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader!postcss-loader'
      }, {
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader!postcss-loader'
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

function getDefaultPostcss() {
  return [
    postcssModulesValue,
    autoprefixer({ browsers: ["> 5%", "ie >= 8"] })
  ]
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  port: defaultPort,
  getDefaultModules: getDefaultModules,
  getDefaultPostcss: getDefaultPostcss
};

'use strict';

let path = require('path');
let srcPath = path.join(__dirname, '/../src/');

// Add needed plugins here

module.exports = {
  devtool: 'eval',
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'isparta-instrumenter-loader',
        include: [path.join(__dirname, '/../src')]
      }
    ],
    loaders: [
      {
        test: /\.(png|jpg|gif|woff|woff2|css|sass|scss|less|styl)$/,
        loader: 'null-loader'
      }, {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [].concat([
          path.join(__dirname, '/../src'),
          path.join(__dirname, '/../test')
        ])
      }
    ]
  },
  resolve: {
    extensions: [
      '', '.js', '.jsx'
    ],
    alias: {
      actions: `${srcPath}/actions/`,
      components: `${srcPath}/components/`,
      config: `${srcPath}/config/` + process.env.REACT_WEBPACK_ENV,
      layouts: `${srcPath}/layouts/`,
      middleware: `${srcPath}/middleware/`,
      stores: `${srcPath}/stores/`,
      utils: `${srcPath}/utils/`,
      styles: `${srcPath}/styles/`,
      views: `${srcPath}/views/`,
      'react/lib/ReactMount': 'react-dom/lib/ReactMount',
      helpers: path.join(__dirname, '/../test/helpers')
    }
  },
  plugins: []
};

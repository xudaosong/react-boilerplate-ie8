/*eslint no-console:0 */
'use strict';
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const open = require('open');
const rewriteJson = require('./mock/routes.json')

// let server = jsonServer.create()

/**
 * Flag indicating whether webpack compiled for the first time.
 * @type {boolean}
 */
let isInitialCompilation = true;
let app = express();

const compiler = webpack(config);

app.use(express.static(path.join(__dirname, '/')));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

if(process.argv.join(' ').indexOf(' --mock') > 0){
  const jsonServer = require('json-server');
  let router = jsonServer.router('./mock/db.json');
  let middlewares = jsonServer.defaults();
  let rewriter = jsonServer.rewriter(rewriteJson);
  app.use(middlewares)
  app.use(rewriter)
  app.use(router)
}

app.listen(8080, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:8080');
});

// new WebpackDevServer(compiler, config.devServer)
// .listen(config.port, '192.168.248.64', (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('Listening at localhost:' + config.port);
// });

// compiler.plugin('done', () => {
//   if (isInitialCompilation) {
//     // Ensures that we log after webpack printed its stats (is there a better way?)
//     setTimeout(() => {
//       console.log('\n✓ The bundle is now ready for serving!\n');
//       console.log('  Open in iframe mode:\t\x1b[33m%s\x1b[0m',  'http://localhost:' + config.port + '/webpack-dev-server/');
//       console.log('  Open in inline mode:\t\x1b[33m%s\x1b[0m', 'http://localhost:' + config.port + '/\n');
//       console.log('  \x1b[33mHMR is active\x1b[0m. The bundle will automatically rebuild and live-update on changes.')
//     }, 350);
//   }
//   isInitialCompilation = false;
// });

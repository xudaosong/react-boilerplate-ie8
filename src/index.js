require('es6-promise').polyfill()

const React = require('react')
const render = require('react-dom').render
const Provider = require('react-redux').Provider
const hashHistory = require('react-router').hashHistory
const configureStore = require('./store/configureStore')
const routes = require('./routes')
const store = configureStore()

render(
  <Provider store={store}>
    {routes(hashHistory)}
  </Provider>,
  document.getElementById('app')
)

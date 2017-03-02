require('es6-promise').polyfill()

const React = require('react')
const render = require('react-dom').render
const Provider = require('react-redux').Provider
const hashHistory = require('react-router').hashHistory
const syncHistoryWithStore = require('react-router-redux/lib/sync').default
const configureStore = require('./store/configureStore')
const routes = require('./routes')
const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    {routes(history)}
  </Provider>,
  document.getElementById('app')
)

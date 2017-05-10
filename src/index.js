import 'theme/styles/app.css'
if (typeof global.Promise === 'undefined') {
  require.ensure([], function () {
    require('es6-promise/auto')
  })
}

const React = require('react')
const render = require('react-dom').render
const Provider = require('react-redux').Provider
const syncHistoryWithStore = require('react-router-redux/lib/sync').default
const configureStore = require('./store/configureStore')
const routes = require('./routes')
const routerHistory = require('react-router').useRouterHistory
const createHistory = require('history').createHashHistory
const store = configureStore()
// 移除react-router自动添加的_k=xxx参数
const hashHistory = routerHistory(createHistory)({queryKey: false})
const history = syncHistoryWithStore(hashHistory, store)

render((
  <Provider store={store}>
    {routes(history)}
  </Provider>
), document.getElementById('app'))

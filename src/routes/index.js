import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import Frame from 'modules/shared/layouts/frame'
import Intl from 'i18n/intl'

const ExampleList = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('modules/example/list'))
  }, 'ExampleList')
}
const ExampleDetail = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('modules/example/detail'))
  }, 'ExampleDetail')
}

const routes = history => (
  <Router history={history}>
    <Route component={Intl}>
      <Route path='/' component={Frame}>
        <IndexRoute getComponent={ExampleList} />
        <Route path='/detail/:id' getComponent={ExampleDetail} />
      </Route>
    </Route>
  </Router>
)

export default routes

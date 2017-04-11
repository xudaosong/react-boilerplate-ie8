import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import Frame from 'layouts/frame'

const Home = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('views/home'))
  }, 'Home')
}
const News = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('views/news'))
  }, 'News')
}
const NewsForm = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('views/newsForm'))
  }, 'NewsForm')
}
const Detail = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('views/detail'))
  }, 'Detail')
}
const routes = history => (
  <Router history={history}>
    <Route path="/" component={Frame}>
      <IndexRoute getComponent={Home}/>
      <Route path="/news" getComponent={News}/>
      <Route path="/news/add" getComponent={NewsForm}/>
      <Route path="/detail/:id" getComponent={Detail}/>
    </Route>
  </Router>
)

export default routes

import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import Frame from '../layouts/frame'

// import Home from '../views/Home'
// import Detail from '../views/Detail'
//
// const routes = history => (
//   <Router history={history}>
//     <Route path="/" component={Frame}>
//       <IndexRoute component={Home} />
//       <Route path="/detail/:id" component={Detail} />
//     </Route>
//   </Router>
// )

const Home = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('../views/home'))
  }, 'Home')
}
const Detail = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('../views/detail'))
  }, 'Detail')
}
const routes = history => (
  <Router history={history}>
    <Route path="/" component={Frame}>
      <IndexRoute getComponent={Home}/>
      <Route path="/detail/:id" getComponent={Detail}/>
    </Route>
  </Router>
)

export default routes

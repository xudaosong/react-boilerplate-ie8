import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import ThunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import {hashHistory} from 'react-router'
import {routerReducer} from 'react-router-redux/lib/reducer'
import routerMiddleware from 'react-router-redux/lib/middleware'
import FetchMiddleware from '../middleware/redux-fetch-middleware'
// import {createFetchMiddleware} from '../middleware/redux-composable-fetch'

// const FetchMiddleware = createFetchMiddleware({
//   afterFetch({action, result}) {
//     if (result.status !== 200) {
//       throw new Error('请求失败')
//     }
//     return result.json().then(data => {
//       return Promise.resolve({action, result: data})
//     })
//   }
// })

const finalCreateStore = compose(applyMiddleware(ThunkMiddleware, FetchMiddleware, routerMiddleware(hashHistory)))(createStore)

const reducer = combineReducers({
  ...rootReducer,
  routing: routerReducer
})

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState)
  return store
}

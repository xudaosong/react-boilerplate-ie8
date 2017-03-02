import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import ThunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'
// import {browserHistory} from 'react-router'
// import {syncHistory, routerReducer} from 'react-router-redux'
// import {routerReducer} from 'react-router-redux/lib/reducer'
import FetchMiddleware from '../middleware/redux-composable-fetch'
// const HistoryMiddleware = syncHistory(browserHistory)

const finalCreateStore = compose(
  applyMiddleware(ThunkMiddleware, FetchMiddleware, createLogger())
)(createStore)

const reducer = combineReducers({
  ...rootReducer
})

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState)
  // HistoryMiddleware.listenForReplays(store)
  return store
}

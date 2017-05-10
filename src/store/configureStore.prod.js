import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import ThunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import {hashHistory} from 'react-router'
import {routerReducer} from 'react-router-redux/lib/reducer'
import routerMiddleware from 'react-router-redux/lib/middleware'

const finalCreateStore = compose(applyMiddleware(
  ThunkMiddleware,
  routerMiddleware(hashHistory)
))(createStore)

const reducer = combineReducers({
  ...rootReducer,
  routing: routerReducer
})

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState)
  return store
}

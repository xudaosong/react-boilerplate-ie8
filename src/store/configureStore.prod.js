import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import ThunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import FetchMiddleware from '../middleware/redux-composable-fetch'

const finalCreateStore = compose(applyMiddleware(ThunkMiddleware, FetchMiddleware))(createStore)

const reducer = combineReducers({
  ...rootReducer
})

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState)
  return store
}

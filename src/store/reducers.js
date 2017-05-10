import { combineReducers } from 'redux'
import { reducers as exampleReducers } from 'modules/example'

export default combineReducers({
  ...exampleReducers
})

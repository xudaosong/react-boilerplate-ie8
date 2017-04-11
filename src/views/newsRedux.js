import { combineReducers } from 'redux'

// 引入 reducer 及 actionCreator
import list, { getNews, postNews } from '../components/news/newsRedux'

export default combineReducers({
  list
})

export const actions = {
  getNews,
  postNews
}

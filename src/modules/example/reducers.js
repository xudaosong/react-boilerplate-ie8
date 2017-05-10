import * as T from './actionTypes'
const initialState = {
  loading: true,
  error: false,
  articleList: []
}
export default function previewList(state = initialState, action) {
  switch (action.type) {
    case T.LOAD_ARTICLES:
      {
        return {
          ...state,
          loading: true,
          error: false
        }
      }

    case T.LOAD_ARTICLES_SUCCESS:
      {
        return {
          ...state,
          loading: false,
          error: false,
          articleList: action.payload
        }
      }

    case T.LOAD_ARTICLES_ERROR:
      {
        return {
          ...state,
          loading: false,
          error: true
        }
      }

    default:
      return state
  }
}

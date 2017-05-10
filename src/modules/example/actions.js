import * as T from './actionTypes'

export function loadArticles() {
  return {
    types: [
      T.LOAD_ARTICLES, T.LOAD_ARTICLES_SUCCESS, T.LOAD_ARTICLES_ERROR
    ],
    url: '/articles'
  }
}

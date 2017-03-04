import fetch from 'isomorphic-fetch'

const FetchMiddleware = () => next => action => {
  if (!action.url || !Array.isArray(action.types)) {
    return next(action)
  }
  const [LOADING,
    SUCCESS,
    ERROR] = action.types

  next({type: LOADING, loading: true})

  fetch(action.url, {params: action.params}).then(result => {
    if (result.status !== 200) {
      throw new Error('服务器异常')
    }
    result.json().then(data => {
      next({type: SUCCESS, loading: false, payload: data})
    })
  }).catch(error => {
    next({type: ERROR, loading: false, error: error})
  })
}
export default FetchMiddleware

const initialState = {
  pending: true,
  error: false,
  newsList: []
}

const NEWS = 'GET_NEWS'

export function getNews() {
  return {
    type: NEWS,
    payload: fetch('/news').then(response => {
      return response.json()
    })
  }
}

export function postNews(model) {
  return {
    type: NEWS,
    payload: fetch('/news', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(model)
    })
  }
}

export default function newsList(state = initialState, action) {
  switch (action.type) {
    case `${NEWS}_SUCCESS`:
      return {
        ...state,
        pending: false,
        error: false,
        newsList: action.payload
      }

    case `${NEWS}_ERROR`:
      return {
        ...state,
        pending: false,
        error: true
      }

    case `${NEWS}_PENDING`:
      return {
        ...state,
        pending: true,
        error: false
      }

    default:
      return state
  }
}

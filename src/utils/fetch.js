export function getJSON(url) {
  return fetch(url).then(response => {
    return response.json()
  })
}

export function postJSON(url, data) {
  let body = data
  if (typeof data === 'object') {
    body = JSON.stringify(data)
  }
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body
  })
}

export function postJSON(url, data) {
  let body = data
  if (typeof data === 'object') {
    body = JSON.stringify(data)
  }
  return fetch(url, {
    method: 'PUT',
    headers: {
      
      'Content-Type': 'application/json'
    },
    body: body
  })
}

export const get = api => {
  if (typeof api !== 'string') {
    throw new Error('Get request expects argument of type string.')
  }
  const response = fetch(api)
  return response.json()
}

export const post = async (api, request) => {
  if (typeof api !== 'string') {
    throw new Error('Get request expects first argument of type string.')
  }
  if (typeof request !== 'object' || Array.isArray(request)) {
    throw new Error('Get request expects second argument of type object literal.')
  }
  const response = fetch(api, {
    type: 'post',
    body: JSON.stringify(request),
    header: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}


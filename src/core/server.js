function server() {
  const get = api => {
    if (typeof api !== 'string') {
      throw new Error('Get request expects argument of type string.')
    }
    const response = fetch(api)
    return response.json()
  }
  
  const post = (api, request) => {
    if (typeof api !== 'string') {
      throw new Error('Post request expects first argument of type string.')
    }
    if (typeof request !== 'object' || Array.isArray(request)) {
      throw new Error('Post request expects second argument of type object literal.')
    }
    const response = fetch(api, {
      method: 'post',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.json()
  }
  
  const put = (api, request) => {
    if (typeof api !== 'string') {
      throw new Error('Put request expects first argument of type string.')
    }
    if (typeof request !== 'object' || Array.isArray(request)) {
      throw new Error('Put request expects second argument of type object literal.')
    }
    const response = fetch(api, {
      method: 'put',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.json()
  }
  
  const delete = api => {
    if (typeof api !== 'string') {
      throw new Error('Delete request expects first argument of type string.')
    }
    const response = fetch(api, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.json()
  }
  
  return {get, post, put, delete}
}

export default Server()

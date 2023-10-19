function server() {
  return {
    async get(api) {
      if (typeof api !== 'string') {
        throw new Error('Get request expects argument of type string.')
      }
      const response = await fetch(api)
      return response.json()
    },
    async post(api, request) {
      if (typeof api !== 'string') {
        throw new Error('Post request expects first argument of type string.')
      }
      if (typeof request !== 'object' || Array.isArray(request)) {
        throw new Error('Post request expects second argument of type object.')
      }
      const response = await fetch(api, {
        method: 'post',
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return response.json()
    },
    async put(api, request) {
      if (typeof api !== 'string') {
        throw new Error('Put request expects first argument of type string.')
      }
      if (typeof request !== 'object' || Array.isArray(request)) {
        throw new Error('Put request expects second argument of type object.')
      }
      const response = await fetch(api, {
        method: 'put',
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return response.json()
    },
    async delete(api) {
      if (typeof api !== 'string') {
        throw new Error('Delete request expects first argument of type string.')
      }
      const response = await fetch(api, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return response.json()
    }
  }
}

export default server()

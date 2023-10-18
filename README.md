# Server
A simple JavaScript library for performing HTTP requests.  

## Usage  

import library 
```javascript
import server from '@sswahn/server'
```
Now, access to the get, post, put, and delete methods.  

### Get Request
```javascript
const response = await server.get(api)
```

### Post Request
```javascript
const request = {
  username: state.username.
  password: state.password
}
const response = await server.post(api, request)
```

### Put Request
```javascript
const request = {
  username: state.username.
  password: state.password
}
const response = await server.put(api, request)
```

### Delete Request
```javascript
const response = await server.delete(api)
```

## Dependencies
This library utilizes the Fetch API. Ensure your target browsers support it, or include a polyfill.

## Licence
Server is [MIT Licensed](https://github.com/sswahn/server/blob/main/LICENSE)

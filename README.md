# Server 
A simple, robust, and extendable server utility for performing HTTP requests and streamlining CRUD operations.  

## Features
- Concise methods for GET, POST, PUT, and DELETE requests.
- Built-in type checking for better error handling.
- Customizable headers for each request.
- Simplified JSON responses.  

## Installation
Using npm:
```bash
npm install @sswahn/server
```

## Usage  
### Import Server  
```javascript
import server from '@sswahn/server'
```

### Get Request
```javascript
const response = await server.get(api)
```

### Post Request
```javascript
const response = await server.post(api, request)
```

### Put Request
```javascript
const response = await server.put(api, request)
```

### Delete Request
```javascript
const response = await server.delete(api)
```

### Custom Headers
For any request, you can provide custom headers:  
```javascript
const customHeaders = {
  'Authorization': 'Bearer YOUR_TOKEN'
}
server.get(api, customHeaders)
```

## Dependencies
This is a promise-based library that utilizes the Fetch API. Ensure your target browsers support it, or include a polyfill.

## License
Server is [MIT Licensed](https://github.com/sswahn/server/blob/main/LICENSE)

# Server · [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/sswahn/server/blob/main/LICENSE) ![npm version](https://img.shields.io/npm/v/@sswahn/server) ![Weekly Downloads](https://img.shields.io/npm/dw/@sswahn/server)
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

## License
Server is [MIT Licensed](https://github.com/sswahn/server/blob/main/LICENSE)

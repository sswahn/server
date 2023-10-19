# Server
A simple JavaScript library for performing HTTP requests.  

## Installation  
```
npm i @sswahn/server
```

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

## Dependencies
This is a promise-based library that utilizes the Fetch API. Ensure your target browsers support it, or include a polyfill.

## Licence
Server is [MIT Licensed](https://github.com/sswahn/server/blob/main/LICENSE)

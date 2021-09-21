# Lecture Notes

## Node
- Allows us to run JS outside the browser
- The environment we use for creating JS servers
- run `node fileName.js` from the terminal

## Server
- listens for requests
- serves responses

## Express Library
- the library we use in node to set up our server
- npm i express


### Standard Express Wiring
``` js
'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());


// listener is typically the last thing on the server page
app.listen(PORT, () => console.log(`I am listening on port ${PORT}`));
```

#### Route functions syntax
``` js
app.get('/', (request, response) => {
  response.status(200).send('Whoohoo!');
})

```

## Nodemon Library
- allows you to make live updates to your server
- npm i nodemon
- `nodemon server.js` rather than `node server.js`

## dotenv Library
- allows us to use the config method to access our .env file
- .env file syntax `KEY=value` **You must use the = sign! No semi-colon**
- convention for the key to be capitol and snake case

## CORS
- cross origin resource sharing
- allows another place/origin to make requests from your server
- middleware (lives between the request and the response)

## Request
- query is a property of the request. It comes back as an object containing whatever key value pairs follow the ? after the route path
  - example `http://coolthings.com?banjo=awesome`
  ```js
  {
    banjo: 'awesome'
  }
  ```

## .find()
- takes a callback function that looks for a truthy condition and returns the first element that matches the condition
- works like filter but only returns a single element rather than an array
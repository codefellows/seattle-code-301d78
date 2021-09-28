'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const axios = require('axios');

const PORT = process.env.PORT;

app.get('/books', getBooks);

<!-- we need a url -->

function getBooks(request, response) {

  <!-- let result = await axios.get(url) -->
  axios
    .get(url)
    .then(results => {
      response.status(400).send(results.data);
    }).catch(error) {
      console.error(error);
    }
}

app.listen(PORT, () => { console.log(' listening on ' + PORT);})
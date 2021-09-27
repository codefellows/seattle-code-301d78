'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT;

const app = express();
app.use(cors());

// initialize mongoose, from node_modules, it's a library, similar to express that way
const mongoose = require('mongoose');
const Cat = require('./models/cat');

mongoose.connect('mongodb://localhost:27017/cats');

app.get('/cats', async (request, response) => {
  const filterQuery = {};
  if (request.query.location) {
    filterQuery.location = request.query.location;
  }
  const cats = await Cat.find(filterQuery);

  response.send(cats);
});



app.listen(PORT, () => console.log('Listening on PORT', PORT));


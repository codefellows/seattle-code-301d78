'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const getRecipes = require('./recipes.js');

const PORT = process.env.PORT;

const app = express();
app.use(cors());

app.get('/recipes', getRecipes);

app.listen(PORT, () => console.log(`listening on ${PORT}`));

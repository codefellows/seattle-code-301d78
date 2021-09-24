'use strict';

const axios = require('axios');


const inMemoryDB = {};

function getRecipes(request, response) {
  const ingredient = request.query.ingredient;
  const url = `https://api.edamam.com/search?q=${ingredient}&app_id=${process.env.FOOD_APP_ID}&app_key=${process.env.FOOD_APP_KEY}`;

  // check if ingredient (+ stuff) already in db
  if (inMemoryDB[ingredient]) { // bracket notation vs. dot notation
    // we got a hit, already in db
    // respond with it

    response.send(inMemoryDB[ingredient]);

    return;
  }

  axios
    .get(url)
    .then(res => {
      const recipeArr = res.data.hits.map(recipe => new Recipe(recipe.recipe));

      inMemoryDB[ingredient] = recipeArr;

      response.status(200).send(recipeArr);
    })
    .catch(err => {
      console.error('error', err);
      response.status(500).send('error', err);
    })
}

class Recipe {
  constructor(recipe) {
    this.uri = recipe.uri;
    this.label = recipe.label;
    this.image_url = recipe.image;
    this.ingredients = recipe.ingredientLines;
    this.totalTime = recipe.totalTime;
  }
}

module.exports = getRecipes;
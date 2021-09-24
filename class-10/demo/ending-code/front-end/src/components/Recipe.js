import React from 'react';

class Recipe extends React.Component {
  render() {
    return (
      <div>
        <h2><a href={this.props.recipe.uri}>{this.props.recipe.name}</a></h2>
        <img src={this.props.recipe.image_url} />
        <ul>
          {this.props.recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Recipe;

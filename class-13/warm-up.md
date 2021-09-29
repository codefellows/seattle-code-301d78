import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Susan Sample",
      age: 34,
      pets: {"Fido", "Mr Whiskers"}
    };
  }

  hadBirthday = (event) => {
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    return (
      <>
        <h2>{this.state.name}</h2>
        <h3 onClick={() => this.hadBirthday(event)}>Current Age: {this.state.age}</h3>
        <h4>Pets</h4>
        <ul>
          {
            this.state.pets.forEach( (pet) => {
              <li>{pets}</li>
            })
          }
        </ul>
      </>
    );
  }
}
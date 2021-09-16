import { Component } from 'react';
import OptionSelecter from './OptionSelecter.js';
import NumberList from './NumberList.js';

const allNumerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numerals: allNumerals
    }
  }

  handleSelect = (choice) => {

    let updatedNumerals;

    if (choice === 'odd') {

      updatedNumerals = allNumerals.filter(num => num % 2 === 1);

    } else if (choice === 'even') {

      updatedNumerals = allNumerals.filter(num => num % 2 === 0);

    } else {

      updatedNumerals = allNumerals;
    }

    this.setState({
      numerals: updatedNumerals
    })
  }

  render() {
    return (
      <>
        <OptionSelecter onSelect={this.handleSelect} />
        <NumberList numbers={this.state.numerals} />
      </>
    )
  }
}
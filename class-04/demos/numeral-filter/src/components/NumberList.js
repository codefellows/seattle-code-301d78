import { Component } from 'react';
import ListGroup from "react-bootstrap/ListGroup";

export default class NumberList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.numbers.map(numeral => (
          <ListGroup.Item key={numeral}>{numeral}</ListGroup.Item>
        ))}
      </ListGroup>
    )
  }
}
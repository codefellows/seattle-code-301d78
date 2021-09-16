import { Component } from 'react';
import Form from 'react-bootstrap/Form'

export default class OptionSelecter extends Component {

  handleChange = (event) => {
    const selection = event.target.value;
    this.props.onSelect(selection);
  }

  render() {
    return (
      <Form>
        <Form.Select onChange={this.handleChange}>
          <option value="all">All</option>
          <option value="odd">Odds</option>
          <option value="even">Evens</option>
        </Form.Select>
      </Form>
    )
  }
}
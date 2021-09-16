import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import beasts from '../data.json';
import HornedBeast from './HornedBeast.js';

export default class Main extends Component {
  render() {
    return (
      <Container fluid>
        <Row xs={1} sm={2} md={3} lg={4}>
          {beasts.map(beast => (<HornedBeast key={beast.title} beast={beast} changeBeast={this.props.changeBeast} showModal={this.props.showModal}/>))}
        </Row>
      </Container>
    )
  }
}

import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class HornedBeast extends Component {

  constructor(props) {
    super(props);
    this.state = { votes: 0 }
  }
  // <HornedBeast key={beast.title} title={beast.title} image={beast.image_url} description={beast.description} />))}
  handleClick = () => {
    // hey! I selected a beast! Please sent the info to app.js! That is where the modal is. Also show the modal. use this.props.beast
    this.props.changeBeast(this.props.beast);
    this.props.showModal();
  }

  handleVoteClick = () => {
    this.setState({ votes: this.state.votes + 1 });
  }


  render() {
    return (
      <Card>
        <Card.Img onClick={this.handleClick} variant="top" src={this.props.beast.image_url} alt={this.props.beast.description} />
        <Card.Body>
          <Card.Title>{this.props.beast.title}</Card.Title>
          <Card.Text>
            {this.props.beast.description}
          </Card.Text>
          <Button onClick={this.handleVoteClick} variant="danger">{'<3 '}{this.state.votes}</Button>
        </Card.Body>
      </Card>
    )
  }
}

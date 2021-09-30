import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  async componentDidMount() {
    const url = process.env.REACT_APP_SERVER + '/books?email=' + this.props.user.email;
    console.log({ url });

    const response = await axios.get(url);

    this.setState({ books: response.data });

  }


  render() {


    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? (

          <Carousel className="w-50">
            {this.state.books.map(book => (

              <Carousel.Item key={book._id}>
                <img
                  className="d-block w-100"
                  src="http://placekitten.com/200/300"
                  alt={book.description}
                />
                <Carousel.Caption>
                  <h3>{book.title}</h3>
                  <p>{book.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>

        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;

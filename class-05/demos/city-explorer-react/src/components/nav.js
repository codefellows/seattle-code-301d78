import { Component } from 'react'
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
export default class Nav extends Component {
  render() {

    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link className="px-4" to="/">Home</Link>
          <Link to="/about">About</Link>
        </Navbar.Brand>
      </Navbar>
    )
  }
}

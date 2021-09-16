import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import Container from "react-bootstrap/Container";
import Header from "./components/Header.js";
import Main from "./components/Main.js";

export default class App extends Component {

  render() {
    return (
      <Container>
        <Header />
        <Main />
      </Container>
    )
  }
}





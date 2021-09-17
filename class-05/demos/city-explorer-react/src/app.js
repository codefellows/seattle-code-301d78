import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header.js';
import Footer from './components/footer.js';
import Main from './components/main.js';
import About from './components/about.js';
import Nav from './components/nav.js';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="mx-auto">
          <Nav />
          <Switch>
            <Route exact path="/">
              <Header />
              <Main />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

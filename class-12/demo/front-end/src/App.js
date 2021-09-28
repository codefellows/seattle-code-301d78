import React from 'react';
import axios from 'axios';
import Cats from './Cats';
import CreateCat from './CreateCat'; // new
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink, // new
} from "react-router-dom";

const SERVER = process.env.REACT_APP_SERVER;
const API_URL = `${SERVER}/cats`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
    }
  }

  componentDidMount() {
    this.fetchCats();
  }

  async fetchCats(location = null) {

    let url = API_URL;

    if (location) {
      url += `?location=${location}`;
    }

    try {
      const response = await axios.get(url);
      this.setState({ cats: response.data });

    } catch (error) {
      console.log(error);
    }
  }

  handleLocationSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    console.log({ location });
    this.fetchCats(location);
  }

  handleDelete = async (catInfo) => {
    await axios.delete(API_URL + '/' + catInfo._id);
    this.fetchCats(); // DANGER: losing location
  }

  handleCreate = async (catInfo) => {
    const newCatResponse = await axios.post(API_URL, catInfo);
    this.fetchCats();// DANGER: losing location
  };

  render() {
    return (
      <Container>
        <Router>
          <nav>
            <h1>World of Cats</h1>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/create">Create</NavLink>
          </nav>
          <Switch>
            <Route exact path="/">

              <div>
                <Cats cats={this.state.cats} onDelete={this.handleDelete} />
                <h2>Filter by location</h2>
                <form onSubmit={this.handleLocationSubmit}>
                  <input name="location" />
                  <button>ok</button>
                </form>
              </div>

            </Route>
            <Route path="/about">
              <h1>About Page Here</h1>
            </Route>
            {/* new */}
            <Route path="/create">
              <CreateCat onCreate={this.handleCreate} />
            </Route>
          </Switch>
        </Router>
      </Container>
    )
  }
}

export default App;

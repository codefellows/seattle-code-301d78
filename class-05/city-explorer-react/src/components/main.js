import React from 'react';
import Map from './map.js';
import Restaurants from './restaurants.js';
import location from '../fake-data/location.json';
import restaurants from '../fake-data/restaurants.json';
import map from '../images/map.png';
import Button from 'react-bootstrap/Button'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayResults: false,
      locationObj: location,
      restaurants: restaurants
    }
  }

  handleLocationSearch = (e) => {
    e.preventDefault();
    this.setState({ displayResults: true });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleLocationSearch}>
          <label htmlFor="input-search" className="px-2">Search for a location</label>
          <input type="text" name="search" id="input-search" placeholder="Enter a location here" className="px-2" />
          <Button type="submit">Explore!</Button>
        </form>

        {this.state.displayResults &&
          <div>
            <Map
              location={this.state.locationObj}
              map={map}
            />
            <Restaurants
              restaurants={this.state.restaurants}
              location={this.state.locationObj}
            />
          </div>
        }

      </div>
    )
  }
}

export default Main;

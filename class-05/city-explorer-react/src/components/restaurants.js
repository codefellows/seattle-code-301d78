import React from 'react';

class Restaurants extends React.Component {
  render() {
    return (
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Restaurants in {this.props.location.search_query}</h2>
        <ul className="space-y-2">
          {this.props.restaurants && this.props.restaurants.map((place, idx) => (
            <li key={idx}>
              <p>Name: {place.restaurant}</p>
              <p>{place.restaurant} servers {place.cusine} food in {place.locality}</p>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

export default Restaurants;

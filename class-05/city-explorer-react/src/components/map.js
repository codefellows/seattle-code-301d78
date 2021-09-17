import React from 'react';

class Map extends React.Component {
  render() {
    return (
      <div className="py-4 text-xl font-bold space-y-2">
        <h2>Map of {this.props.location.search_query}</h2>
        {this.props.map &&
          <img src={this.props.map || ''} />
        }
      </div>
    )
  }
}

export default Map;

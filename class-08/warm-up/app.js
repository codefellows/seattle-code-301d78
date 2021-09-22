import React from 'react';
import axios from  'axios';

const SERVER = 'http://localhost:3001';
const bananas = `${SERVER}/bananas`;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      bananas: ''
    }
  }
  // lifecycle hook
  componentDidMount = async () => {
    let nanners = await axios.get(bananas);

    this.setState({
      bananas: nanners.data
    })
  }

  render() {
    return(
      <div className="app">
        <h1>Bananas!</h1>

        {this.state.bananas && 
          <p>{this.state.bananas}</p>
        }
      </div>
    )
  }
}

export default App;
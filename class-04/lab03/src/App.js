import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import SelectedBeastModal from './components/SelectedBeastModal.js';
import { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedBeast: {},
      showModal: false
    }
  }

  // function that changes the state of the selected beast
  changeBeast = (beast) => {
    this.setState({ selectedBeast: beast })
  }
  // function that changes showModal to true
  showModal = () => {
    this.setState({ showModal: true })
  }

  hideModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Container fluid>
        <Header />
        <Main changeBeast={this.changeBeast} showModal={this.showModal}/>
        <Footer />
        <SelectedBeastModal beast={this.state.selectedBeast} hideModal={this.hideModal} showModal={this.state.showModal}/>
      </Container>
    );
  }
}

export default App;

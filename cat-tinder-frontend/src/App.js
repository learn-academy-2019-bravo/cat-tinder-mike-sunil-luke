import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './App.css';
import { getCats, createCat } from './api'

import Routes from './Routes'


class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        cats: []
      }
  }

  componentWillMount() {
    getCats()
      .then(APIcats => {
        this.setState({
          cats: APIcats
        })
      })
    }
    
  handleNewCat(newCatInfo) {
  	createCat(newCatInfo)
      .then(successCat => {
          console.log("SUCCESS! New cat: ", successCat);
      })
  }
  
  handleSearch(id){
    console.log(id)
  }
  
  render(){
    const {cats} = this.state
  return (
      <Container>
        <h1 id="catTitle">Cat Tinder</h1>
          <Row>
            <Col md={{ span: 6, offset: 3 }}><iframe src="https://giphy.com/embed/oziZPHkpHiayfoVEyA" width="480" height="252" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/EuropeanConsumerCentre-dating-online-consumer-oziZPHkpHiayfoVEyA"></a></p></Col>
          </Row>
          <Routes cats={cats} handleNewCat={this.handleNewCat} handleSearch={this.handleSearch}/>
      </Container>
    );
  }
}

export default App;

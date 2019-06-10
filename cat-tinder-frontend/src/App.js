import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './App.css';
import { getCats, createCat, searchCat,updateCat } from './api'

import Routes from './Routes'


class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        cats: [],
        cat: {},
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
    
   handleSearch = (id) => {
    searchCat(id)
      .then(APIcat => {
        this.setState({
          cat: APIcat
        })
      })
    }
    
  handleNewCat(newCatInfo) {
  	createCat(newCatInfo)
      .then(successCat => {
          console.log("SUCCESS! New cat: ", successCat);
      })
  }
  
  handleUpdatesCat = (updatedInfo, id) => {
    updateCat(updatedInfo, id)
  }
  render(){
    const {cats, cat} = this.state

  return (
      <Container>
        <h1 id="catTitle">Cat Tinder</h1>
          <Row>
            <Col md={{ span: 6, offset: 3 }}><iframe src="https://giphy.com/embed/oziZPHkpHiayfoVEyA" width="480" height="252" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/EuropeanConsumerCentre-dating-online-consumer-oziZPHkpHiayfoVEyA"></a></p></Col>
          </Row>
          <Routes 
            cats={cats} 
            cat={cat} 
            handleNewCat={this.handleNewCat} 
            handleSearch={this.handleSearch}
            handleUpdatesCat={this.handleUpdatesCat}
          />
      </Container>
    );
  }
}

export default App;

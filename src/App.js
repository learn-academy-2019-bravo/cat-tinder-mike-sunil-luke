import React, {Component} from 'react';
import {Form, Container, Button, Row, Col, Navbar, Nav} from 'react-bootstrap';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import CreateCat from './CreateCat'
import CatList from './CatList'
import Home from './Home'

class App extends Component {
  render(){
  return (
      <Container>
        <h1 id="catTitle">Cat Tinder</h1>
          <Row>
            <Col md={{ span: 6, offset: 3 }}><iframe src="https://giphy.com/embed/oziZPHkpHiayfoVEyA" width="480" height="252" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/EuropeanConsumerCentre-dating-online-consumer-oziZPHkpHiayfoVEyA"></a></p></Col>
          </Row>
        <Router>
        <div>
              <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="Home">Home</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="CreateCat">Cat Profile</Nav.Link>
                  <Nav.Link href="CatList">Cat List</Nav.Link>
                </Nav>            
              </Navbar>
              
              <Route path="/CreateCat" component={CreateCat} />
              <Route path="/CatList" component={CatList} />
              <Route path="/Home" component={Home} />
          </div>
        </Router>
      </Container>
    );
  }
}

export default App;

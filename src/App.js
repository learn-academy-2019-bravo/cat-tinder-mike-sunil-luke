import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './App.css';

import Routes from './Routes'


class App extends Component {
  render(){
  return (
      <Container>
        <h1 id="catTitle">Cat Tinder</h1>
          <Row>
            <Col md={{ span: 6, offset: 3 }}><iframe src="https://giphy.com/embed/oziZPHkpHiayfoVEyA" width="480" height="252" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/EuropeanConsumerCentre-dating-online-consumer-oziZPHkpHiayfoVEyA"></a></p></Col>
          </Row>
          <Routes/>
      </Container>
    );
  }
}

export default App;

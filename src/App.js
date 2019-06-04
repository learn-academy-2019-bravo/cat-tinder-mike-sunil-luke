import React, {Component} from 'react';
import {Form, Container, Button, Row, Col} from 'react-bootstrap';
import './App.css';



class App extends Component {
  render(){
  return (
      <Container>
        <h1 id="catTitle">Cat Tinder</h1>
          <Row>
            <Col md={{ span: 6, offset: 3 }}><iframe src="https://giphy.com/embed/oziZPHkpHiayfoVEyA" width="480" height="252" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/EuropeanConsumerCentre-dating-online-consumer-oziZPHkpHiayfoVEyA"></a></p></Col>
          </Row>
        <h2> About </h2>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="formGroupName">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formGroupAge" >
                <Form.Label>Age:</Form.Label>
                <Form.Control type="number" min="0" placeholder="Age"  />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formGroupEnjoys">
            <Form.Label>Enjoys:</Form.Label>
            <Form.Control as="textarea" rows="3"/>
          </Form.Group>
          <Button variant="primary" type="submit">
          Create Profile
          </Button>
        </Form>
      </Container>
    );
  }
}

export default App;

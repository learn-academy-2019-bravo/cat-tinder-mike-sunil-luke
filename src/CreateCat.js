import React, {Component} from 'react';
import {Form, Container, Button, Row, Col} from 'react-bootstrap';
import './App.css';



class CreateCat extends Component {
  render(){
  return (
      <Container>
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

export default CreateCat;
import React, {Component} from 'react';
import {Form, Container, Button, Row, Col} from 'react-bootstrap';
import {Redirect} from 'react-router-dom'

import './App.css';



class CreateCat extends Component {
  constructor(props){
    super(props)
    this.state = {
      form:{
        name: '',
        age: '',
        enjoys: '',
      },
    }
  }
  
  handleChange = (event) => {
    let {form} = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }
  
  handleNewCat = () => {
    this.props.handleNewCat(this.state.form)
  }
  
  render(){
    const {name, age, enjoys} = this.state.form
  return (
      <Container>
        <h2> About </h2>
        <Form>
       
          <Row>
          
            <Col>
              <Form.Group controlId="formGroupName">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Name" name="name" onChange={this.handleChange} value={name}/>
              </Form.Group>
            </Col>
            
            <Col>
              <Form.Group controlId="formGroupAge" >
                <Form.Label>Age:</Form.Label>
                <Form.Control type="number" min="0" placeholder="Age" name="age" onChange={this.handleChange} value={age} />
              </Form.Group>
            </Col>
            
          </Row>
          
          <Row>
            <Col>
              <Form.Group controlId="formGroupEnjoys">
                <Form.Label>Enjoys:</Form.Label>
                <Form.Control as="textarea" rows="3" name="enjoys" onChange={this.handleChange} value={enjoys} />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit" onClick={this.handleNewCat}>
          Create Profile
          </Button>
          
        </Form>
         {this.props.success &&
		      <Redirect to="/CatList" /> }
      </Container>
    );
  }
}

export default CreateCat;
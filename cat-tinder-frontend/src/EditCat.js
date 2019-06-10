import React, {Component} from 'react';
import {Container, Form, Button, Col, Row} from 'react-bootstrap'


import './App.css';

class EditCat extends Component {
    constructor(props){
        super(props);
            this.state = {
                 updatedCat: {
                   name: "",
                   age: "",
                   enjoys: "",
                 },
            }
    }
    
  componentDidUpdate = (prevProp) => {
    const { cat } = this.props
    const {updatedCat} = this.state
    if (cat != prevProp.cat){
      this.setState({updatedCat: cat})
    }
  }
   
  handleChange = (event) => {
    let {updatedCat} = this.state
    updatedCat[event.target.name] = event.target.value
    this.setState({updatedCat})
  }
  
  handleUpdatesCat = () => {
    this.props.handleUpdatesCat(this.state.updatedCat, this.props.id)
    
  }
  render(){
    const {cat} = this.props
    const {age, name, enjoys} = this.state.updatedCat

      return (
        <Container>
          
        <Form>
       
          <Row>
          
            <Col>
              <Form.Group controlId="formGroupName">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder={cat.name} name="name" onChange={this.handleChange} value={name}/>
              </Form.Group>
            </Col>
            
            <Col>
              <Form.Group controlId="formGroupAge" >
                <Form.Label>Age:</Form.Label>
                <Form.Control type="number" min="0" placeholder={cat.age} name="age" onChange={this.handleChange} value={age} />
              </Form.Group>
            </Col>
            
          </Row>
          
          <Row>
            <Col>
              <Form.Group controlId="formGroupEnjoys">
                <Form.Label>Enjoys:</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder={cat.enjoys} name="enjoys" onChange={this.handleChange} value={enjoys} />
              </Form.Group>
            </Col>

          </Row>
          <Button variant="primary" type="submit" onClick={this.handleUpdatesCat}>
            Update Profile
          </Button>
        </Form>
          

        </Container>
    )
      
  }
}

export default EditCat;
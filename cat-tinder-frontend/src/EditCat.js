import React, {Component} from 'react';
import {Container, Form, Button} from 'react-bootstrap'
import Cat from './Cat'


import './App.css';

class EditCat extends Component {
    constructor(props){
        super(props);
            this.state = {
                 id: ""
            }
    }
   

  handleSearch = () => {
    let {id} = this.state
    this.props.handleSearch(id)
  } 
  
  handleChange = (event) => {
    let newID = event.target.value
    this.setState({id: newID})
    this.handleSearch()
  }
    
  render(){
    const {cat} = this.props
      const {id} = this.state
      return (
        <Container>
          
            <Form.Group controlId="formGroupSearch">
            <Form.Label>Search Profile:</Form.Label>
            <Form.Control type="number" min="0" name="id" value={id} onChange={this.handleChange} />
            </Form.Group>
              <Button variant="primary" type="" onClick={this.handleSearch}>
              Search
              </Button>
          
          <Cat name={cat.name} age={cat.age} enjoys={cat.enjoys} key={cat.id}/>
        </Container>
    )
      
  }
}

export default EditCat;
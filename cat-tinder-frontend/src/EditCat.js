import React, {Component} from 'react';
import {Container, Form, Button} from 'react-bootstrap'
import ListItem from './ListItem'

import './App.css';

class EditCat extends Component {
    constructor(props){
        super(props);
            this.state = {
                 id: -1
            }
    }
   
  handleChange = (event) => {
    let {id} = this.state
    let newID = event.target.value
    this.setState({id: newID})
  }
  

  handleSearch = () => {
    let {id} = this.state
    this.props.handleSearch(id)
  } 
    
  render(){
      const {cats} = this.props
      const {id} = this.state
      console.log(id)
      return (
         <Container>
          <Form>
            <Form.Group controlId="formGroupSearch">
            <Form.Label>Search Profile:</Form.Label>
            <Form.Control type="number" min="0" name="id" value={id} onChange={this.handleChange} />
            </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleSearch}>
          Search
          </Button>
          </Form>
        </Container>
    )
      
  }
}

export default EditCat;
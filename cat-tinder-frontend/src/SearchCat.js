import React, {Component} from 'react';
import EditCat from './EditCat'
import {Container, Form, Button, Col, Row} from 'react-bootstrap'



import './App.css';

class SearchCat extends Component {
    constructor(props){
        super(props);
            this.state = {
                 id: "",
                 catCall: false,

            }
    }
   

  handleSearch = () => {
    let {id} = this.state
    let {cat} = this.props
    this.props.handleSearch(id)
    this.setState({catCall: true})

  }
  
  
  handleIdChange = (event) => {
    let newID = event.target.value
    this.setState({id: newID})
  }
  

  render(){
    const {cat, handleUpdatesCat} = this.props
    const {id, catCall} = this.state
    console.log("editing cat", cat)

      return (
        <Container>
          
            <Form.Group controlId="formGroupSearch">
            <Form.Label>Search Profile:</Form.Label>
            <Form.Control type="number" min="0" name="id" value={id} onChange={this.handleIdChange} />
            </Form.Group>
              <Button variant="primary" type="" onClick={this.handleSearch}>
              Search
              </Button>
           
           <EditCat cat={cat} handleUpdatesCat={handleUpdatesCat} id={id}/>   

        </Container>
    )
      
  }
}

export default SearchCat;
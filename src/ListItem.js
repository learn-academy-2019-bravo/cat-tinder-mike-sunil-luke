import React, {Component} from 'react';
import {Container, Row} from 'react-bootstrap'

import './App.css';



class ListItem extends Component {
    constructor(props){
        super(props);
            this.state = {
                
            }
        
    }
  render(){
      const {name, age, description} = this.props
      return (
        <Container>
            <Row>
                Name: {name}
            </Row>
            <Row>
                Age: {age}
            </Row>
            <Row>
               {description}
            </Row>
        </Container>
        );
      }
}

export default ListItem;
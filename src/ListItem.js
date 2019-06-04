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
      const {name, age, enjoys} = this.props
      return (
        <div>
            <Row>
                Name: {name}
            </Row>
            <Row>
                Age: {age}
            </Row>
            <Row>
               {enjoys}
            </Row>
            <hr/>
        </div>
        );
      }
}

export default ListItem;
import React, {Component} from 'react';
import {Row} from 'react-bootstrap'

import './App.css';

class Cat extends Component {
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
               Enjoys: {enjoys}
            </Row>
            <hr/>
        </div>
        );
      }
}

export default Cat;
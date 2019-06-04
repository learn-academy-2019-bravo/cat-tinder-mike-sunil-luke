import React, {Component} from 'react';
import {Container, Row} from 'react-bootstrap'
import ListItem from './ListItem'

import './App.css';

class CatList extends Component {
    constructor(props){
        super(props);
            this.state = {
                list: [
                    {name: "frodo",
                    age: 4,
                    enjoys: "cool dude"
                    },
                    {name: "garfield",
                    age: 10,
                    enjoys: "eats a lot"
                    },
                    {name: "tom",
                    age: 20,
                    enjoys: "jerry's friend"
                    },
                    ]
            }
        
    }
  render(){
      const {list} = this.state
      
      let catList = (array) => {
        return array.map((value, index) => 
            <ListItem name={value.name} age={value.age} enjoys={value.enjoys} key={index}/>
        )
      }
      
      const profiles = catList(list)
      return (
        <Container>
            {profiles}
        </Container>
        );
  }
}

export default CatList;
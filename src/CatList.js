import React, {Component} from 'react';
import {Container} from 'react-bootstrap'
import ListItem from './ListItem'

import './App.css';

class CatList extends Component {
    constructor(props){
        super(props);
            this.state = {
                list: [
                    {id: 1,
                    name: "frodo",
                    age: 4,
                    enjoys: "cool dude"
                    },
                    {id: 2,
                    name: "garfield",
                    age: 41,
                    enjoys: "eats a lot"
                    },
                    {id: 3,
                    name: "tom",
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
            <ListItem name={value.name} age={value.age} enjoys={value.enjoys} key={value.id}/>
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
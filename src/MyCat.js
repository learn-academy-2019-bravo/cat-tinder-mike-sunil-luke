import React, {Component} from 'react';
import {Container} from 'react-bootstrap'
import ListItem from './ListItem'

import './App.css';

class MyCat extends Component {
    constructor(props){
        super(props);
            this.state = {
                list: [
                    {id: 0,
                    name: "none",
                    age: "na",
                    enjoys: ""
                    },
                    {id: 1,
                    name: "frodo",
                    age: 4,
                    enjoys: "cool dude"
                    },
                    {id: 2,
                    name: "garfield",
                    age: 10,
                    enjoys: "eats a lot"
                    },
                    {id: 3,
                    name: "tom",
                    age: 20,
                    enjoys: "jerry's friend"
                    },
                    ],
                    
            }
        
    }
    
  render(){
      const {list} = this.state
      
      var newList = list.map(value => 
            <ListItem name={value.name} age={value.age} enjoys={value.enjoys} key={value.id}/>
            )
      
      let catList = (array, id) => {
        return array.filter(value => value.key == id )
      }
      
      const profiles = catList(newList, 3)
      console.log(newList[0])
      return (
        <Container>
        <div>
            {profiles}
        </div>
        </Container>
        );
  }
}

export default MyCat;
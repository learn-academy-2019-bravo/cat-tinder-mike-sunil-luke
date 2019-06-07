import React, {Component} from 'react';
import {Container, Button, Row, Col} from 'react-bootstrap'
import Cat from './Cat'

import './App.css';

class CatList extends Component {
    constructor(props){
        super(props);
            this.state = {
                // list: [
                //     {id: 1,
                //     name: "frodo",
                //     age: 4,
                //     enjoys: "cool dude"
                //     },
                //     {id: 2,
                //     name: "garfield",
                //     age: 41,
                //     enjoys: "eats a lot"
                //     },
                //     {id: 3,
                //     name: "tom",
                //     age: 20,
                //     enjoys: "jerry's friend"
                //     },
                //     {id: 4,
                //     name: "Sylvestor",
                //     age: 5,
                //     enjoys: "Makes best burgers"
                //     },
                //     {id: 5,
                //     name: "Tony",
                //     age: 35,
                //     enjoys: "Breakfast is good"
                //     },
                //     ],
                left: [],
                right: [],
                count: 0,
            }
            
        
    }
    
    
    
  render(){
      const {count, left, right} = this.state
      const {cats} = this.props
      
      let catList = (array) => {
        return array.map((value, index) => 
            <Cat name={value.name} age={value.age} enjoys={value.enjoys} key={value.id}/>
        )
      }
      
      const profiles = catList(cats)
      
      let aRender = () => {
        if (typeof profiles[count] != "undefined") {
            return profiles[count]
        }
        else {
           return <h2>Out of profiles</h2>
        }
      }
      
      let counter = () => {
          this.setState({count: count+1})
      }
      
      let leftClick = () => {
          counter()
          if (typeof profiles[count] != "undefined") {
            left.push(profiles[count])
            }
          this.setState({left})
          
      }
      let rightClick = () => {
          counter()
          if (typeof profiles[count] != "undefined") {
            right.push(profiles[count])
            }
          this.setState({right})
      }
      return (
        <Container>
            {aRender()}
            <Button variant="danger" onClick={leftClick} > Swipe Left </Button>
            <Button variant="success" onClick={rightClick} > Swipe Right </Button>
            <Row>
                <Col> 
                    <h2>Rejected:</h2>
                    <div>{left}</div>
                </Col>
                <Col> 
                    <h2>Likes:</h2>
                    <div>{right}</div>
                </Col>
            </Row>
        </Container>
        );
  }
}

export default CatList;
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap'
import CreateCat from './CreateCat'
import CatList from './CatList'
import Home from './Home'
import MyCat from './MyCat'

import './App.css';



class Routes extends Component {
  render(){
  return (
    <Router>
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="Home">Home</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="CreateCat">Cat Profile</Nav.Link>
              <Nav.Link href="CatList">Cat List</Nav.Link>
              <Nav.Link href="MyCat">My Cat</Nav.Link>
            </Nav>            
        </Navbar>
        <Switch>
            <Route path="/CreateCat" component={CreateCat} />
            <Route path="/CatList" component={CatList} />
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/MyCat" component={MyCat} />
        </Switch>
    </Router>
    );
  }
}

export default Routes;
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap'
import CreateCat from './CreateCat'
import CatList from './CatList'
import Home from './Home'
import EditCat from './EditCat'

import './App.css';



class Routes extends Component {
  render(){
    const {cats, handleNewCat, handleSearch, cat} = this.props
  return (
    <Router>
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="Home">Home</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="CreateCat">Create Profile</Nav.Link>
              <Nav.Link href="CatList">Cat List</Nav.Link>
              <Nav.Link href="EditCat">Edit Cat</Nav.Link>
            </Nav>            
        </Navbar>
        <Switch>
            <Route path="/CreateCat" render={(props) => <CreateCat {...props} handleNewCat={handleNewCat} />} />
            <Route path="/CatList" render={(props) => <CatList {...props} cats={cats} />} />
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/EditCat" render={(props) => <EditCat {...props} cat={cat} handleSearch={handleSearch} />} />
        </Switch>
    </Router>
    );
  }
}

export default Routes;
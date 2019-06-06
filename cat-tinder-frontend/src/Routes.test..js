import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {mount} from 'enzyme';
import Routes from './Routes';
import Adapter from 'enzyme-adapter-react-16';
import {Navbar, Nav} from 'react-bootstrap'

Enzyme.configure({ adapter: new Adapter()});

it('Renders a Navbar', ()=>{
  const routes = mount(<Routes />)
  expect(routes.find('Navbar').text()).toEqual('Home')
})

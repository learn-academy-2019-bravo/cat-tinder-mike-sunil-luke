import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {mount} from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter()});

describe('<App />', () => { 
it('renders title Cat Tinder', () => {
  const app = mount(<App />)
  expect(app.find('#catTitle').text()).toEqual('Cat Tinder')
});
})

import React from 'react';
import {shallow, mount} from 'enzyme';
import {Dashboard} from '../dashboard.js';


const initialState = {auth: {currentUser: 'yes'}};
const callback = jest.fn();

describe('<Dashboard />', () => {
    it('Renders without crashing', () => {
            const callback = jest.fn();
  
      shallow(<Dashboard spots={initialState} dispatch={callback}/>);
    });
    
    it('Renders the dashboard when user is logged in', () => {
      const wrapper = shallow(<Dashboard spots={initialState} dispatch={callback}/>);
      expect(wrapper.find('Link').length).toBe(1);
    });
  
  });


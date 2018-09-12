import React from 'react';
import {shallow, mount} from 'enzyme';
import {Dashboard} from '../dashboard.js';
import {getUserSpots, refreshDashData} from '../../actions'

const initialState = {auth: {currentUser: 'yes'}};
// const store = createStore(initialState);

const callback = jest.fn();




describe('<Dashboard />', () => {
    it('Renders without crashing', () => {
            const callback = jest.fn();
  
      shallow(<Dashboard loggedIn={true} spots={initialState} dispatch={callback}/>);
    });
    
    // it('Renders the dashboard when user is logged in', () => {
    //   const wrapper = shallow(<Dashboard />);
    //   expect(wrapper.find('Link').length).toBe(2);
    // });
  
    // it('Redirects to rentals page if user is logged in', () => {
    //   const wrapper = shallow(<Dashboard loggedIn />);
    //   expect(wrapper.find('Redirect').length).toBe(1);
    // });
  });


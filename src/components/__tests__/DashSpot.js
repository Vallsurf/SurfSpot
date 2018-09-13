import React from 'react';
import {shallow, mount} from 'enzyme';
import {DashSpot} from '../DashSpot';


const data = {
    county_name: 'test',
    spot_id: 'test',
    spot_name: 'test'
};

const spotdata = [{test1: 'test'}, {test2: 'test2'}]

const callback = jest.fn();

describe('<Dashboard />', () => {
    it('Renders without crashing', () => { 
      shallow(<DashSpot dispatch={callback} data={data} spotdata={spotdata}/>);
    });
    
    it('Renders the loading spinner when loading', () => {
      const wrapper = shallow(<DashSpot loading={true} data={data} dispatch={callback}/>);
      expect(wrapper.find('#loading').length).toBe(1);
    });
  
  });


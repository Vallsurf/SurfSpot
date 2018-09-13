import React from 'react';
import {shallow, mount} from 'enzyme';
import {Spotlist} from '../spotlist';


const data = {
    county_name: 'test',
    spot_id: 'test',
    spot_name: 'test'
};

const spots = [{test1: 'test'}, {test2: 'test2'}]

const callback = jest.fn();

describe('<Spotlist />', () => {
    it('Renders without crashing', () => { 
      shallow(<Spotlist dispatch={callback} spots={spots} />);
    });
  
  });


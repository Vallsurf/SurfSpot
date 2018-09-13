import React from 'react';
import {shallow, mount} from 'enzyme';
import County from '../County';

const data = {
    county_name: 'test',
    spot_id: 'test',
    spot_name: 'test'
};

const spots = {spots:[{test1: 'test'}, {test2: 'test2'}], _id: 'test'}

describe('<County />', () => {
    it('Renders without crashing', () => {
        shallow(<County data={spots} />);
    });
    

  
  });


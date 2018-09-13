import React from 'react';
import {shallow, mount} from 'enzyme';
import {SpotLink} from '../spotlink';

const data = {
    county_name: 'test',
    spot_id: 'test',
    spot_name: 'test'
};

describe('<SpotLink />', () => {
    it('Renders without crashing', () => {
        shallow(<SpotLink data={data} />);
    }); 
  });


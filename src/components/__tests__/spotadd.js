import React from 'react';
import {shallow, mount} from 'enzyme';
import Spotadd from '../Spotadd';


const data = {
    county_name: 'test',
    spot_id: 'test',
    spot_name: 'test'
};

const spots = [{test1: 'test'}, {test2: 'test2'}]

const callback = jest.fn();

describe('<Spotadd />', () => {
    it('Renders without crashing', () => { 
      shallow(<Spotadd dispatch={callback} addButton={true} />);
    });

    it('Renders Remove if already a Favorite', () => { 
        const wrapper = shallow(<Spotadd dispatch={callback} addButton={false} />);
        expect(wrapper.find('div.spotremove').length).toBe(1);
      });

  });


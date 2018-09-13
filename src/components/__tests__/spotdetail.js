import React from 'react';
import {shallow, mount} from 'enzyme';
import {Spotdetail} from '../Spotdetail';


const data = {
    county_name: 'test',
    spot_id: 'test',
    spot_name: 'test'
};

const spots = [{test1: 'test'}, {test2: 'test2'}]

const callback = jest.fn();

describe('<Spotdetail />', () => {
    it('Renders without crashing', () => { 
      shallow(<Spotdetail dispatch={callback} userspots={spots} match={{params:{spotid: 1, county: 'test'}, isExact: true, path: "", url: ""}}/>);
    });
  
  });


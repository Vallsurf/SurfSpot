import React from 'react';
import {shallow} from 'enzyme';
import DashSpotData from '../DashSpotData';

const spotdata = [{test1: 'test'}, {test2: 'test2'}]

const callback = jest.fn();

describe('<DashSpotData />', () => {
    it('Renders without crashing', () => { 
      shallow(<DashSpotData dispatch={callback} data={spotdata} spotdata={spotdata}/>);
    });  
  });


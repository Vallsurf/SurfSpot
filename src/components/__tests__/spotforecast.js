import React from 'react';
import {shallow, mount} from 'enzyme';
import SpotForecast from '../SpotForecast';


const forecast = {
    speed_kts: 'test',
    direction_text: 'test',
    tide: 4.56,
    hour: 'test',
    size: 'test',
    shape_detail: {swell: 'test', wind: 'test'},
    wind: 'test',
};

const data = [{test1: 'test'}, {test2: 'test2'}]

const callback = jest.fn();

describe('<SpotForecast />', () => {
    it('Renders without crashing', () => { 
      shallow(<SpotForecast dispatch={callback} forecast={forecast} data={data}/>);
    });
  
  });


import React from 'react';
import {shallow, mount} from 'enzyme';
import CurrentCondition from '../CurrentCondition';

const callback = jest.fn();

const data = {
    spotdetail: 'test',
    totaldetails: [{
        speed_kts: 'test',
        direction_text: 'test',
        tide: 4.56,
        hour: 'test',
        size: 'test',
        shape_detail: {swell: 'test', wind: 'test'},
        wind: 'test',
        hour: 'test'
    }]
};

describe('<CurrentCondition />', () => {
    it('Renders without crashing', () => { 
      shallow(<CurrentCondition dispatch={callback} data={data} />);
    });

  });


import React from 'react';
import {shallow, mount} from 'enzyme';
import SwellChart from '../swellchart'

const data = [{tide: 'test'}, {test2: 'test2'}]

it('Renders without crashing', () => {
    shallow(<SwellChart data={data}/>);
});

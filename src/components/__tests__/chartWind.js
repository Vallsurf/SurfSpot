import React from 'react';
import {shallow, mount} from 'enzyme';
import WindChart from '../windchart'

const data = [{tide: 'test'}, {test2: 'test2'}]

it('Renders without crashing', () => {
    shallow(<WindChart data={data}/>);
});

import React from 'react';
import {shallow, mount} from 'enzyme';
import TideChart from '../tidechart'

const data = [{tide: 'test'}, {test2: 'test2'}]

it('Renders without crashing', () => {
    shallow(<TideChart data={data}/>);
});
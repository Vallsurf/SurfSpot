import React from 'react';
import {shallow, mount} from 'enzyme';
import Login from '../login.js'

it('Renders without crashing', () => {
    shallow(<Login />);
});
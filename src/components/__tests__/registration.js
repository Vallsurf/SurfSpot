import React from 'react';
import {shallow, mount} from 'enzyme';
import Registration from '../registrationform.js'

it('Renders without crashing', () => {
    shallow(<Registration />);
});



import {spotReducer} from '../reducers'
import * as actions from '../../actions/actions'

describe('spotReducer', () => {

it('Should set the initial state when nothing is passed in', () => {
    const state = spotReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
        loading: false ,
        allspots: [], 
        spotdetail: [], 
        spotsnapshot: [],
        totaldetails: [], 
        userspots: []
    });
  });

it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = spotReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
    });

});
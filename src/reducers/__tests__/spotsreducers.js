import {spotReducer} from '../reducers'
import * as actions from '../../actions/actions'

const spots = [{id: 'Malibu'}]

describe('spotReducer', () => {

it('Should set the initial state when nothing is passed in', () => {
    const state = spotReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
        loading: false ,
        error: false,
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

//Grabbing All Spots
describe('Fetch All Spots', () => {
    it('Should Handle Spots Request', () => {
        let state; 
        state = spotReducer(state, actions.fetchSpotsData());
        expect(state.loading).toEqual(true);
        
    });

    it('Should Handle Spots Request Success', () => {
        let state; 
        state = spotReducer(state, actions.fetchSpotsSuccess(spots));
        expect(state.error).toEqual(false);
        expect(state.loading).toEqual(false);
        expect(state.allspots).toEqual(spots);
    });

    it('Should Handle Spots Request Error', () => {
        const err = 'nogood'
        let state; 
        state = spotReducer(state, actions.fetchSpotsError(err));
        expect(state.error).toEqual(true);
    
    });
});


//Fetch User Spots
describe('Fetch All Spots', () => {
    it('Should Handle Spots Request', () => {
        let state; 
        state = spotReducer(state, actions.fetchSpotsData());
        expect(state.loading).toEqual(true);
        
    });

    it('Should Handle Spots Request Success', () => {
        let state; 
        state = spotReducer(state, actions.fetchSpotsSuccess(spots));
        expect(state.error).toEqual(false);
        expect(state.loading).toEqual(false);
        expect(state.allspots).toEqual(spots);
    });

    it('Should Handle Spots Request Error', () => {
        const err = 'nogood'
        let state; 
        state = spotReducer(state, actions.fetchSpotsError(err));
        expect(state.error).toEqual(true);
    
    });
});
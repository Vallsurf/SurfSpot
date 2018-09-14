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
describe('Fetch User Spots', () => {
    it('Should Handle Spots Request', () => {
        const userspots = ['test', 'test2', 'test3']
        let state; 
        state = spotReducer(state, actions.fetchUserSpots(userspots));
        expect(state.userspots).toEqual(userspots);
        
    });

    it('Should Handle Edit User Spots Success', () => {
        const userspots = ['test', 'test2', 'test3']
        let state; 
        state = spotReducer(state, actions.editUserSpots(userspots));
        expect(state.userspots).toEqual(userspots);
    });
});

//Dashboard Data
describe('Dashboard Reducers', () => {
    it('Should Refresh Dashboard', () => {
        let state; 
        state = spotReducer(state, actions.refreshDashData());
        expect(state.spotsnapshot).toEqual([]);
        
    });

    it('Should Handle Dashboard fetch Success', () => {
        const forecast = [{hour: 'test'},{hour: 'test2'},{hour: 'test3'},{hour: 'test4'}]
        const wind = [{hour: 'test'},{hour: 'test2'},{hour: 'test3'},{hour: 'test4'}] 
        const swell = [{hour: 'test'},{hour: 'test2'},{hour: 'test3'},{hour: 'test4'}] 
        const tide = [{hour: 'test'},{hour: 'test2'},{hour: 'test3'},{hour: 'test4'}]  
        const result = [{hour: 'test'},{hour: 'test2'},{hour: 'test3'},{hour: 'test4'}]  
        let state; 
        state = spotReducer(state, actions.fetchDashboardSuccess(forecast, wind, swell, tide));
   
    });
});
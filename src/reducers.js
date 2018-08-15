import * as actions from './actions';
export const initialState = {
    loading: false ,
    allspots: [], 
    spotdetail: [], 
    userspots: [{
        spot_name: 'County Line',
        swell: '2-3 ft',
        wind: '3 kts',
        tide: 'H: 312a L:9a H:4p L:10p'
    },
    {
        spot_name: 'Leo Carillo',
        swell: '2-3 ft',
        wind: '3 kts',
        tide: 'H: 312a L:9a H:4p L:10p'
    },
    {
        spot_name: 'Zuma',
        swell: '2-3 ft',
        wind: '3 kts',
        tide: 'H: 312a L:9a H:4p L:10p'
    },
    {
        spot_name: 'Zuma',
        swell: '2-3 ft',
        wind: '3 kts',
        tide: 'H: 312a L:9a H:4p L:10p'
    },
    {
        spot_name: 'Zuma',
        swell: '2-3 ft',
        wind: '3 kts',
        tide: 'H: 312a L:9a H:4p L:10p'
    },
    {
        spot_name: 'Zuma',
        swell: '2-3 ft',
        wind: '3 kts',
        tide: 'H: 312a L:9a H:4p L:10p'
    }

    ]} 


export const spotReducer = (state = initialState, action) => {
        if (action.type === actions.FETCH_SPOTS_SUCCESS){
            return Object.assign({}, state, {
                loading: false,
                allspots: action.spots
            })
        }

        else if (action.type === actions.FETCH_SPOTS_DATA){
            return Object.assign({}, state, {
                loading: true
            })
        }

        else if (action.type === actions.FETCH_SINGLESPOT_SUCCESS){
            return Object.assign({}, state, {
                loading: false, 
                spotdetail: action.spotdetail
            })
        }

       else{ return state}
        
}
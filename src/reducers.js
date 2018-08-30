import * as actions from './actions';
export const initialState = {
    loading: false ,
    allspots: [], 
    spotdetail: [], 
    spotsnapshot: [],
    totaldetails: [], 
    userspots: [{
        county_name: 'Los Angeles',
        spot_id: '207',
        spot_name: 'County Line'
    }]

} 


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

        else if (action.type === actions.FETCH_USER_SPOTS){
            return Object.assign({}, state, {
                loading: true, 
                userspots: action.userspots
            })
        }

        else if (action.type === actions.EDIT_USER_SPOTS){
            console.log(action.userspots);
            return Object.assign({}, state, {
                userspots: action.userspots
            })
        }

        else if (action.type === actions.FETCH_SINGLESPOT_FULL_SUCCESS){
            const details = action.forecast.map((item) => {
                const wind = action.wind.find(w => w.hour === item.hour)
                const tide = action.tide.find(t => t.hour === item.hour)
                return {...item, ...wind, ...tide}
            })

            return Object.assign({}, state, {
                loading: false, 
                totaldetails: details 
                
            })
        }

        else if (action.type === actions.FETCH_COUNTY_DATA_ONLY){
            const details = action.swell.map((item) => {
                const wind = action.wind.find(w => w.hour === item.hour)
                const tide = action.tide.find(t => t.hour === item.hour)
                return {...item, ...wind, ...tide}
            })

            return Object.assign({}, state, {
                loading: false, 
                spotdetail: action.forecast,
                totaldetails: details 
                
            })
        }

        else if (action.type === actions.FETCH_DASHBOARD_SUCCESS){
            const details = action.forecast.map((item) => {
                const wind = action.wind.find(w => w.hour === item.hour)
                const tide = action.tide.find(t => t.hour === item.hour)
                return {...item, ...wind, ...tide}
            })

            return Object.assign({}, state, {
                loading: false, 
                spotsnapshot: [...state.spotsnapshot, details]  
            })
        }

       else{ return state}
        
}
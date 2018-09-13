import * as actions from '../actions/actions';
export const initialState = {
    loading: false ,
    error: false, 
    allspots: [], 
    spotdetail: [], 
    spotsnapshot: [],
    totaldetails: [], 
    userspots: []

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

        else if (action.type === actions.FETCH_SPOTS_ERR){
            return Object.assign({}, state, {
                error: true
            })
        }

        else if (action.type === actions.FETCH_USER_SPOTS){
            return Object.assign({}, state, {
                userspots: action.userspots
            })
        }

        else if (action.type === actions.EDIT_USER_SPOTS){
            return Object.assign({}, state, {
                userspots: action.userspots
            })
        }

        else if (action.type === actions.REFRESH_DASH_DATA){
            return Object.assign({}, state, {
                spotsnapshot: []
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

        else if (action.type === actions.FETCH_DASHBOARD_COUNTY_DATA_ONLY){
            const spot = action.forecast
            const details = action.swell.map((item) => {
                const wind = action.wind.find(w => w.hour === item.hour)
                const tide = action.tide.find(t => t.hour === item.hour)
                return {spot, ...item, ...wind, ...tide}
            })

            return Object.assign({}, state, {
                loading: false, 
                spotdetail: 'nogood',
                spotsnapshot: [...state.spotsnapshot, details]  
                
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

        else if (action.type === actions.TEST){
            
            return Object.assign({}, state, {
                spotsnapshot: action.data
            })
        }

       else{ return state}
        
}

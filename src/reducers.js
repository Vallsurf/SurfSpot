import * as actions from './actions';

// const initialState = {
//     spots: [{
//         name: 'County Line',
//         swell: '2-3 ft',
//         wind: '3 kts',
//         tide: 'H: 312a L:9a H:4p L:10p'
//     },
//     {
//         name: 'Leo Carillo',
//         swell: '2-3 ft',
//         wind: '3 kts',
//         tide: 'H: 312a L:9a H:4p L:10p'
//     },
//     {
//         name: 'Malibu',
//         swell: '2-3 ft',
//         wind: '3 kts',
//         tide: 'H: 312a L:9a H:4p L:10p'
//     },

// ],

// allspots: [{
//     name: 'County Line',
//     swell: '2-3 ft',
//     wind: '3 kts',
//     tide: 'H: 312a L:9a H:4p L:10p'
// },
// {
//     name: 'Leo Carillo',
//     swell: '2-3 ft',
//     wind: '3 kts',
//     tide: 'H: 312a L:9a H:4p L:10p'
// },
// {
//     name: 'Zuma',
//     swell: '2-3 ft',
//     wind: '3 kts',
//     tide: 'H: 312a L:9a H:4p L:10p'
// },
// {
//     name: 'Malibu',
//     swell: '2-3 ft',
//     wind: '3 kts',
//     tide: 'H: 312a L:9a H:4p L:10p'
// },
// {
//     name: 'Ventura',
//     swell: '2-3 ft',
//     wind: '3 kts',
//     tide: 'H: 312a L:9a H:4p L:10p'
// },
// {
//     name: 'Oxnard',
//     swell: '2-3 ft',
//     wind: '3 kts',
//     tide: 'H: 312a L:9a H:4p L:10p'
// },
// ]}

export const initialState = {
    loading: false ,
    allspots: [], 
    userspots: [{
        name: 'County Line',
        swell: '2-3 ft',
        wind: '3 kts',
        tide: 'H: 312a L:9a H:4p L:10p'
    },
    {
        name: 'Leo Carillo',
        swell: '2-3 ft',
        wind: '3 kts',
        tide: 'H: 312a L:9a H:4p L:10p'
    },
    {
        name: 'Zuma',
        swell: '2-3 ft',
        wind: '3 kts',
        tide: 'H: 312a L:9a H:4p L:10p'
    }

    ]} 


export const spotReducer = (state = initialState, action) => {
    // console.log(initialState)
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

        // else if (action.type === actions.FETCH_USER_SPOTS){
        //     console.log('userspots')
        //     return Object.assign({}, state, {...state},)
        // }

       else{ return state}
        
}
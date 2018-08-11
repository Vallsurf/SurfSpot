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

const initialState = {loading: false };

export const spotReducer = (state = initialState, action) => {
        if (action.type === actions.FETCH_SPOTS_SUCCESS){
            return Object.assign({}, state, {
                loading: true
            })
        }

        else if (action.type === actions.FETCH_SPOTS_DATA){
            return Object.assign({}, state, {
                loading: true
            })
        }
}
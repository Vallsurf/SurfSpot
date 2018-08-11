const {API_BASE_URL} = require('./config');

export const FETCH_SPOTS_SUCCESS = 'FETCH_SPOTS_SUCCESS';
export const fetchSpotsSuccess = () => ({
    type: FETCH_SPOTS_SUCCESS,
    
});

export const FETCH_SPOTS_ERR = 'FETCH_SPOTS_ERR';
export const fetchSpotsError = (err) => ({
    type: FETCH_SPOTS_ERR,
    err
});

//get all
export const FETCH_SPOTS_DATA = 'FETCH_SPOTS_DATA'
export const fetchSpotsData = () => ({
    type: FETCH_SPOTS_DATA,
})


export const fetchSpots = () => dispatch => {
    dispatch(FETCH_SPOTS_SUCCESS());
    
};
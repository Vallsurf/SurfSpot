const {API_BASE_URL} = require('./config');

export const FETCH_SPOTS_SUCCESS = 'FETCH_SPOTS_SUCCESS';
export const fetchSpotsSuccess = (spots) => ({
    type: FETCH_SPOTS_SUCCESS,
    spots
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

//get userSpots
export const FETCH_USER_SPOTS = 'FETCH_USER_SPOTS'
export const fetchUserSpots = () => ({
    type: FETCH_USER_SPOTS,
})

export const FETCH_SINGLESPOT_SUCCESS = 'FETCH_SINGLESPOT_SUCCESS';
export const fetchSingleSpotSuccess = (spotdetail) => ({
    type: FETCH_SINGLESPOT_SUCCESS,
    spotdetail
});

export const fetchSpots = () => dispatch => {
    dispatch(fetchSpotsData());
    fetch(`${API_BASE_URL}/api/spots`)
    .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        }).then(spotsdata => {
            dispatch(fetchSpotsSuccess(spotsdata));
        }).catch(err => dispatch(fetchSpotsError(err)));

};

export const fetchForecast = (spotid) => dispatch => {
    dispatch(fetchSpotsData());
    fetch(`http://api.spitcast.com/api/spot/forecast/${spotid}/`)
    .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        }).then(spotsdata => {
            dispatch(fetchSingleSpotSuccess(spotsdata));
        }).catch(err => console.log(err));

};
const {API_BASE_URL} = require('./config');

export const FETCH_SPOTS_SUCCESS = 'FETCH_SPOTS_SUCCESS';
export const fetchSpotsSuccess = spots => ({
    type: FETCH_SPOTS_SUCCESS,
    spots
});


export const fetchSpots = () => dispatch => {
    fetch(`${API_BASE_URL}/api/spots`)
    .then(res => 
    {if(!res.ok){
        return Promise.reject(res.statusText)
    }
    console.log(res.json())
    return res.json();
        })
    .then(spotsdata => dispatch(fetchSpotsSuccess(spotsdata)))
    .catch(err => console.log(err));
}; 
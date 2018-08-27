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
export const fetchUserSpots = (userspots) => ({
    type: FETCH_USER_SPOTS,
    userspots
})

export const FETCH_SINGLESPOT_SUCCESS = 'FETCH_SINGLESPOT_SUCCESS';
export const fetchSingleSpotSuccess = (spotdetail) => ({
    type: FETCH_SINGLESPOT_SUCCESS,
    spotdetail
});

export const FETCH_SINGLESPOT_FULL_SUCCESS = 'FETCH_SINGLESPOT_FULL_SUCCESS';
export const fetchSingleSpotFullSuccess = (forecast, wind, swell, tide) => ({
    type: FETCH_SINGLESPOT_FULL_SUCCESS,
    forecast,
    wind,
    swell,
    tide
});

export const FETCH_COUNTY_DATA_ONLY = 'FETCH_COUNTY_DATA_ONLY';
export const fetchCountyDataOnly = (forecast, wind, swell, tide) => (
    {
    type: FETCH_COUNTY_DATA_ONLY,
    forecast,
    wind,
    swell,
    tide
});

export const LOGIN = 'LOGIN';
export const LoginSuccess = (user) => ({
    type: LOGIN,
    user
});

export const REGISTER = 'REGISTER';
export const RegisterSuccess = (user) => ({
    type: REGISTER,
    user
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

export const fetchForecast = (spotid, county) => dispatch => {
    dispatch(fetchSpotsData());

    //get spot forecast first and handle if doesn't exist
    let forecast; 
    fetch(`http://api.spitcast.com/api/spot/forecast/${spotid}/`)
    .then(res => {
        if(!res.ok){return forecast=`nogood`}
        return res.json()})
    .then(res => forecast = res)
    .catch(err => forecast='nogood')

    let urls = [
                // `http://api.spitcast.com/api/spot/forecast/${spotid}/`, 
                `http://api.spitcast.com/api/county/wind/${county}/`,
                `http://api.spitcast.com/api/county/swell/${county}/`,
                `http://api.spitcast.com/api/county/tide/${county}/`]

  //get County Data
  Promise.all(urls.map(url => fetch(url))).then(([res1,res2,res3]) =>  
  Promise.all([res1.json(), res2.json(), res3.json()]))
  .then(([ wind, swell, tide]) => {
    if(forecast === 'nogood'){
          dispatch(fetchCountyDataOnly(forecast, wind, swell, tide));
          
    }
    else{
        dispatch(fetchSingleSpotFullSuccess(forecast, wind, swell, tide));
    }
      })
  .catch(err => console.log(err));

};

export const fetchCountyData = (county) => dispatch => {
    let urls = [
                  `http://api.spitcast.com/api/county/wind/${county}/`,
                  `http://api.spitcast.com/api/county/swell/${county}/`,
                  `http://api.spitcast.com/api/county/tide/${county}/`]

   Promise.all(urls.map(url => fetch(url)))
    .then(([res1,res2,res3]) =>  
    Promise.all([res1.json(), res2.json(), res3.json()]))
    .then(([wind, swell, tide]) => {
            console.log(wind, swell,)
            // dispatch(fetchCountyDataOnly(wind, swell, tide));
        })
    .catch(err => console.log(err));

};
import {loadAuthToken, saveAuthToken, clearAuthToken} from './local-storage'; 
import {normalizeResponseErrors} from './actions/utils';
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

//refresh userSpots
export const EDIT_USER_SPOTS = 'EDIT_USER_SPOTS'
export const editUserSpots = (userspots) => ({
    type: EDIT_USER_SPOTS,
    userspots
})

export const FETCH_DASHBOARD_SUCCESS = 'FETCH_DASHBOARD_SUCCESS';
export const fetchDashboardSuccess = (forecast, wind, swell, tide) => ({
    type: FETCH_DASHBOARD_SUCCESS,
    forecast,
    wind,
    swell,
    tide
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

export const FETCH_DASHBOARD_COUNTY_DATA_ONLY = 'FETCH_DASHBOARD_COUNTY_DATA_ONLY';
export const fetchDashboardCountyData = (forecast, wind, swell, tide) => (
    {
    type: FETCH_DASHBOARD_COUNTY_DATA_ONLY,
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
    .then(res => {return forecast = res})
    .catch(err => {forecast='nogood'})

    let urls = [
                `http://api.spitcast.com/api/county/wind/${county}/`,
                `http://api.spitcast.com/api/county/swell/${county}/`,
                `http://api.spitcast.com/api/county/tide/${county}/`]

  //get County Data
  Promise.all(urls.map(url => fetch(url))).then(([res1,res2,res3]) =>  
  Promise.all([res1.json(), res2.json(), res3.json()]))
  .then(([ wind, swell, tide]) => {
    console.log(forecast)  
    if(forecast === 'nogood'){
          dispatch(fetchCountyDataOnly(forecast, wind, swell, tide));
          
    }
    else{
        dispatch(fetchSingleSpotFullSuccess(forecast, wind, swell, tide));
    }
      })
  .catch(err => console.log(err));

};

export const addFavorite = (spotid) => (dispatch) => {
    const token = loadAuthToken(); 
    console.log(token); 
    return(
        fetch(`${API_BASE_URL}/api/user/addspot/${spotid}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
        .then(res => res.json())
        .then(updatedSpots => {
            console.log(updatedSpots); 
            dispatch(editUserSpots(updatedSpots.savedspots))
        })
    )
};

export const removeFavorite = (spotid) => dispatch => {
    const token = loadAuthToken();
    console.log(token);

    return(
        fetch(`${API_BASE_URL}/api/user/removespot/${spotid}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
        .then(res => res.json())
        .then(updatedSpots => {
            dispatch(editUserSpots(updatedSpots.savedspots))
        })
    )
};

export const getUserSpots = () => dispatch => {
    dispatch(fetchSpotsData());
    
    const token = loadAuthToken(); 
    return(
        fetch(`${API_BASE_URL}/api/user/`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
        .then(res => {
            return res.json()})
        .then(userInfo => {
            dispatch(fetchUserSpots(userInfo[0].savedspots))
        })
        .catch(err => console.log(err))
    )
}

async function getData(spot) {
    const forecast = await fetch(`http://api.spitcast.com/api/spot/forecast/${spot}/`)
    
    if(forecast.status === '200'){
        return await forecast.json()
    }
    else{
        return 'nogood'
    }
    
}

async function getCountyData(county) {
    let urls = [
        `http://api.spitcast.com/api/county/wind/${county}/`,
        `http://api.spitcast.com/api/county/swell/${county}/`,
        `http://api.spitcast.com/api/county/tide/${county}/`]

    const [wind, swell, tide] = await
    Promise.all(urls.map(url => fetch(url))).then(([res1,res2,res3]) =>  
    Promise.all([res1.json(), res2.json(), res3.json()])); 
    console.log(wind, swell, tide)
    return {wind, swell, tide}
        
    }



export const fetchDashboardForecast = (spotid, county) => dispatch => {
//     let forecast = async() => { 
//         let spotforecast =  await getData(spotid) 
//         return spotforecast};  

//     let countyData = async() => { await getCountyData(county) }; 
    
//    forecast(); 
//    countyData(); 

    let forecast; 
        
    let urls = [
        `http://api.spitcast.com/api/county/wind/${county}/`,
        `http://api.spitcast.com/api/county/swell/${county}/`,
        `http://api.spitcast.com/api/county/tide/${county}/`]; 

    fetch(`http://api.spitcast.com/api/spot/forecast/${spotid}/`)
    .then(res => {return forecast = res.json()})
    .catch(err => {return forecast = 'nogood'})
    // .then(hmm => {
    //     if(!forecast){console.log('hmm')}
    //     console.log(forecast)
    // })
   .then(Promise.all(urls.map(url => fetch(url))).then(([res1,res2,res3]) =>  
            Promise.all([res1.json(), res2.json(), res3.json()]))
                .then(([ wind, swell, tide]) => {
        
        if(forecast === 'nogood'){
          dispatch(fetchDashboardCountyData(forecast, wind, swell, tide));
        }
        else{
          dispatch(fetchDashboardSuccess(forecast, wind, swell, tide));
        }
        })
    )    
  .catch(err => console.log(err));
    
};

// const getCountyDashData = (county) => {
//     let urls = [
//         `http://api.spitcast.com/api/county/wind/${county}/`,
//         `http://api.spitcast.com/api/county/swell/${county}/`,
//         `http://api.spitcast.com/api/county/tide/${county}/`]

//     Promise.all(urls.map(url => fetch(url))).then(([res1,res2,res3]) =>  
//     Promise.all([res1.json(), res2.json(), res3.json()]))
//     .then(([ wind, swell, tide]) => {


// }
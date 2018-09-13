import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';
import {normalizeResponseErrors} from './utils';
import {loadAuthToken, saveAuthToken, clearAuthToken} from '../local-storage'; 
import {fetchUserSpots} from './actions'

import {API_BASE_URL} from '../config';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = (currentUser) => ({
    type: AUTH_SUCCESS,
    currentUser,
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
    type: AUTH_ERROR,
    error
});

// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const decodeToken = token => jwtDecode(token); 

export const storeAuthInfo = (authToken, dispatch) => {
    // const decodedToken = jwtDecode(authToken);
    const Token = decodeToken(authToken); 
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(Token.username, Token.userspots));
    dispatch(fetchUserSpots(Token.userspots));
    saveAuthToken(authToken);
};

export const reloadToken = (authToken) => (dispatch) => {
    const Token = decodeToken(authToken); 
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(Token.username, Token.userspots));
    dispatch(fetchUserSpots(Token.userspots));
}

//Creates a new User
export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/api/user`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => { return res.json() })
        .catch(err => { 
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};



//Logs User In
export const Login = (user) => dispatch => {
    // dispatch(authRequest());
    return (
        fetch(`${API_BASE_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            // Reject any requests which don't return a 200 status, creating
            // errors which follow a consistent format
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(res => storeAuthInfo(res.token, dispatch))
            .catch(err => {
                const {code} = err;
                const message =
                    code === 401
                        ? 'Incorrect username or password'
                        : 'Unable to login, please try again';
                dispatch(authError(err));
                // Could not authenticate, so return a SubmissionError for Redux
                // Form
                return Promise.reject(
                    new SubmissionError({
                        _error: message
                    })
                );
            })
    );
};
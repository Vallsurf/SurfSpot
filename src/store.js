import {createStore, applyMiddleware ,compose, combineReducers} from 'redux' 
import {spotReducer, initialState as spots} from './reducers/reducers'; 
import {Reducer as authReducer, initialState as auth} from './reducers/authreducer'; 
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'; 
import {loadAuthToken , refreshAuthToken} from './local-storage';
import {reloadToken} from './actions/auth';

const preloadState = {spots, auth }

const composeEnhancers =
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()|| compose;

const store = createStore(
    combineReducers({
        spots: spotReducer, 
        auth: authReducer, 
        form: formReducer}), 
        preloadState, 
        compose(applyMiddleware(thunk), composeEnhancers)); 

const authToken = loadAuthToken();
if (authToken) {
    store.dispatch(reloadToken(authToken));
    
}

export default store 
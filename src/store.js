import {createStore} from 'redux' 

import {spotReducer} from './reducers'; 

export default createStore(spotReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 
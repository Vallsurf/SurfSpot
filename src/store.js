import {createStore, applyMiddleware ,compose} from 'redux' 
import {spotReducer} from './reducers'; 
import thunk from 'redux-thunk'; 



export default createStore(spotReducer, undefined, compose(applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())); 
import {createStore, applyMiddleware ,compose} from 'redux' 
import {spotReducer, initialState} from './reducers'; 
import thunk from 'redux-thunk'; 





export default createStore(spotReducer, initialState, compose(applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())); 
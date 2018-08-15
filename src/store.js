import {createStore, applyMiddleware ,compose} from '../../../../Library/Caches/typescript/2.9/node_modules/redux' 
import {spotReducer, initialState} from './reducers'; 
import thunk from 'redux-thunk'; 





export default createStore(spotReducer, initialState, compose(applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())); 
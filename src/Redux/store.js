import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import multiplyReducer from './reducers/multiplyReducer';


export const store = createStore(
    rootReducer,
   // applyMiddleware(logger(), thunk),
    window.devToolsExtension && window.devToolsExtension()
);





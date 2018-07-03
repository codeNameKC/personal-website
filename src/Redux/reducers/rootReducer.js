import {combineReducers} from 'redux';
import multiplyReducer from './multiplyReducer';
import renderReducer from './changeRender';


const rootReducer = combineReducers({
multiplyReducer, 
renderReducer
});

export default rootReducer;
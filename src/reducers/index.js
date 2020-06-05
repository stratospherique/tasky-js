import {combineReducers} from 'redux';
import formVisibilityReducer from './formVisiblityReducer';

const globalReducer = combineReducers({
    formVisible: formVisibilityReducer,
})

export default globalReducer;

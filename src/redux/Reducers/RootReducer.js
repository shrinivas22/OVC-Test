import { combineReducers } from 'redux';
import MainReducer from './Reducer';

const Combined = combineReducers({
    MainReducer,
});

export default Combined;
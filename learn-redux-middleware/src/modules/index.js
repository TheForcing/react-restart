import { combineReducers} from '@reduxjs/toolkit';
import counter from './counter'
import sample from './sample';

const rootReducer  = combineReducers({
    counter,
    sample
});

export default rootReducer;


import { combineReducers } from 'redux';

import reducer_1 from './reducer_1';
import reducer_2 from './reducer_2';


const rootReducer = combineReducers({
  reducer_1,
  reducer_2
});

export default rootReducer;
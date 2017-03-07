import { combineReducers } from 'redux';

import participantReducer from './participantReducer.js';
import presenterReducer from './presenterReducer.js';
import loginReducer from './loginReducer.js';

export default combineReducers({
  participantReducer,
  presenterReducer,
  loginReducer
});

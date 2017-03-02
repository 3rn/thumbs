import { combineReducers } from 'redux';

import participantReducer from './participantReducer.js';
import presenterReducer from './presenterReducer.js';

export default combineReducers({
  participantReducer,
  presenterReducer
});

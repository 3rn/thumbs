import { combineReducers } from 'redux';
import participantReducer from './participantReducer';
import presenterReducer from './presenterReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  participantReducer,
  presenterReducer,
  loginReducer,
});

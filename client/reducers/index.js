import { combineReducers } from 'redux';

import thumbs from './thumbsReducer.js';
import reducer2 from './reducer_2.js';

export default combineReducers({
  thumbs,
  reducer2
});

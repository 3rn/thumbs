import { combineReducers } from 'redux';

import thumbs from './voteReducer.js';
import voteStatus from './voteStatusReducer.js';

export default combineReducers({
  thumbs,
  voteStatus
});

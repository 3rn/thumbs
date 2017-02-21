import { combineReducers } from 'redux';

import thumbs from './voteReducer.js';
import updateVoteStatus from './voteStatusReducer.js';

export default combineReducers({
  thumbs,
  updateVoteStatus
});

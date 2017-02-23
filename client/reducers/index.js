import { combineReducers } from 'redux';

import thumbs from './voteReducer.js';
import voteStatus from './voteStatusReducer.js';
import participantQuestion from './participantQuestionReducer.js';

export default combineReducers({
  thumbs,
  voteStatus,
  participantQuestion
});

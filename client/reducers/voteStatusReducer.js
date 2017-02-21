import { UPDATE_VOTE_STATUS } from '../actions/updateVoteStatus';

export default function participantViewReducer(state = 'waiting', action) {
  if (action.type === UPDATE_VOTE_STATUS) {
    return action.value;
  }
  return state;
}

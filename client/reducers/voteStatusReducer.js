import { UPDATE_VOTE_STATUS } from '../actions/presenterActions.js';

export default function voteStatus(state = 'WAITING', action) {
  if (action.type === UPDATE_VOTE_STATUS) {
    return action.value;
  }
  return state;
}

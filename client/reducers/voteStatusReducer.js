import { UPDATE_VOTE_STATUS, SEND_QUESTION } from '../actions/presenterActions.js';

export default function voteStatus(state = {
  status: 'WAITING',
  questionType: '',
  choices: []
}, action) {
  if (action.type === UPDATE_VOTE_STATUS) {
    return {...state, status: action.status};
  } else if (action.type === SEND_QUESTION) {
    return {...state, questionType: action.questionType, choices: action.choices};
  }
  return state;
}

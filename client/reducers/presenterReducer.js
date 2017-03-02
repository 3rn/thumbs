export default function presenterReducer(state = {
  status: 'WAITING',
  questionType: '',
  choices: ['choice here']
}, action) {
  switch (action.type) {
  case 'UPDATE_VOTE_STATUS':
    return {...state, status: action.status};
  case 'SEND_QUESTION':
    return {...state, questionType: action.questionType, choices: action.choices};
  }
  return state;
}

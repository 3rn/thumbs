export default function presenterReducer(state = {
  status: 'WAITING',
  questionTitle: '',
  questionType: '',
  choices: ['choice here'],
  roomCount: 0,
}, action) {
  switch (action.type) {
    case 'UPDATE_VOTE_STATUS':
      return { ...state, status: action.status };
    case 'SEND_QUESTION':
      return { ...state, questionTitle: action.questionTitle, questionType: action.questionType, choices: action.choices };
    case 'GET_ROOM_COUNT':
      return { ...state, roomCount: action.roomCount };
  }
  return state;
}

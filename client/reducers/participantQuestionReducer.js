export default function participantQuestion(state = 0, action) {
  switch (action.type) {
    case 'PARTICIPANT_QUESTION':
      const newCount = state + 1;
      return newCount;
  }
  return state;
}

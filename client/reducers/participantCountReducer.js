export default function participantCount(state = 0, action) {
  switch (action.type) {
    case 'PARTICIPANT_COUNT':
      const newCount = state + 1;
      return newCount;
  }
  return state;
}

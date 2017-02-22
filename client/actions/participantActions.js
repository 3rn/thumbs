export function vote(voteValue) {
  return {
    type: 'UPDATE',
    value: voteValue
  };
}

export function participantQuestion() {
  return {
    type: 'PARTICIPANT_QUESTION'
  };
}

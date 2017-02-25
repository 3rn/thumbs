export function vote(voteValue) {
  return {
    type: 'UPDATE',
    value: voteValue
  };
}

export function participantCount() {
  return {
    type: 'PARTICIPANT_COUNT'
  }
}

export function participantQuestion() {
  return {
    type: 'PARTICIPANT_QUESTION'
  };
}

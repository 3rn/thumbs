export function vote(voteValue, questionType) {
  return {
    type: 'UPDATE',
    value: voteValue,
    questionType: questionType
  };
}

export function participantQuestion() {
  return {
    type: 'PARTICIPANT_QUESTION'
  };
}

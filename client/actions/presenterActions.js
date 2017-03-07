export function updateVoteStatus(voteStatus) {
  return {
    type: 'UPDATE_VOTE_STATUS',
    status: voteStatus
  };
}

export function sendQuestion(questionTitle, questionType, choices) {
  return {
    type: 'SEND_QUESTION',
    questionTitle: questionTitle,
    questionType: questionType,
    choices: choices
  };
}

export function getRoomCount(roomCount) {
  return {
    type: 'GET_ROOM_COUNT',
    roomCount: roomCount
  };
}

export function resetConfusedCount() {
  return {
    type: 'RESET_CONFUSED'
  };
}

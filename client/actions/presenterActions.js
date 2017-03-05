export function updateVoteStatus(voteStatus) {
  return {
    type: 'UPDATE_VOTE_STATUS',
    status: voteStatus
  };
}

export function sendQuestion(questionType, choices) {
  return {
    type: 'SEND_QUESTION',
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

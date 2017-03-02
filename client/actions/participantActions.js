export function response(questionType, value) {
    return {
      type: questionType,
      value: value
    };
}

export function participantCount() {
  return {
    type: 'PARTICIPANT_COUNT'
  }
}

export function participantConfused() {
  return {
    type: 'PARTICIPANT_CONFUSED'
  };
}

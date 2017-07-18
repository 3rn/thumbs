export default function participantReducer(state = {
  thumbs: [0, 0, 0],
  yesNo: [0, 0],
  scale: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  multipleChoice: [],
  openResponse: [],
  confusedCount: 0,
  participantCount: 0,
}, action) {
  switch (action.type) {
    case 'UPDATE_VOTE_STATUS':
      if (action.status === 'ENDED') {
        return { ...state,
          thumbs: [0, 0, 0],
          yesNo: [0, 0],
          scale: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          multipleChoice: [],
          openResponse: [],
          confusedCount: 0
        };
      }
    case 'THUMBS':
      var newCount = state.thumbs.slice(0);
      var index = parseInt(action.value);
      newCount[index] += 1;
      return { ...state, thumbs: newCount };
    case 'YES_NO':
      var newCount = state.yesNo.slice(0);
      var index = parseInt(action.value);
      newCount[index] += 1;
      return { ...state, yesNo: newCount };
    case 'SCALE':
      var newCount = state.scale.slice(0);
      var index = parseInt(action.value);
      newCount[index] += 1;
      return { ...state, scale: newCount };
    case 'MULTIPLE_CHOICE':
      var newCount = state.multipleChoice.slice(0);
      var index = parseInt(action.value);
      if (newCount[index]) {
        newCount[index] += 1;
      } else {
        newCount[index] = 1;
      }
      return { ...state, multipleChoice: newCount };
    case 'OPEN_RESPONSE':
      var newCount = state.openResponse.slice(0);
      newCount.push(action.value);
      return { ...state, openResponse: newCount };
    case 'PARTICIPANT_CONFUSED':
      var newCount = state.confusedCount + 1;
      return { ...state, confusedCount: newCount };
    case 'PARTICIPANT_COUNT':
      var newCount = state.participantCount + 1;
      return { ...state, participantCount: newCount };
  }
  return state;
}

export default function voteReducer(state = [0, 0, 0], action) {
  switch (action.type) {
    case 'UPDATE':
      var newCount = state.slice(0);
      var index = parseInt(action.value) - 1;
      newCount[index] += 1;
      return newCount;
  }
  return state;
}

export default function voteReducer(state = {
  count: [0,0,0]}, action) {
  switch (action.type) {
    case 'UPDATE':
    console.log('hit reducer', action)
    var newCount = state.count.slice(0);
    var index = parseInt(action.value) - 1;
    newCount[index] += 1;
    state = {...state, count: newCount};
    break;
  }
  return state;
}

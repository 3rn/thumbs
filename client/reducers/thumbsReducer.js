export default function thumbsReducer(state = {
  upCount: 230,
  neutralCount: 640,
  downCount: 430
}, action) {
  switch (action.type) {
    case 'INCREASE_UP_COUNT':
      console.log('hit reducer')
      state = {...state, upCount: state.upCount + 1}
      break;
    case 'INCREASE_NEUTRAL_COUNT':
      state = {...state, neutralCount: state.neutralCount + 1}
      // socket.emit('vote', { option: e.target.value});
      break;
    case 'INCREASE_DOWN_COUNT':
      state = {...state, downCount: state.downCount + 1}
      // socket.emit('vote', { option: e.target.value});
      break;
  }
  return state;
}

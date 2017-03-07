export default function loginReducer(state = {
  name: '',
  email: ''
}, action) {
  switch (action.type) {
  case 'LOGIN':
    var newLoginState = Object.assign({}, state);
    newLoginState.name = action.loginInfo.name;
    newLoginState.email = action.loginInfo.email;
    return newLoginState;
  }
  return state;
}
export default function loginReducer(state = {
  name: '', // change to empty string later to represent logged out status.
  email: '',
}, action) {
  switch (action.type) {
    case 'LOGIN': {
      const newLoginState = Object.assign({}, state);
      newLoginState.name = action.loginInfo.name;
      newLoginState.email = action.loginInfo.email;
      return newLoginState;
    }
  }
  return state;
}

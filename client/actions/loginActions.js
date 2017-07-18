export default function login(value) {
  return {
    type: 'LOGIN',
    loginInfo: value,
  };
}

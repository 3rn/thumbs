export function vote(voteValue) {
  return {
    type: 'UPDATE',
    value: voteValue
  };
}

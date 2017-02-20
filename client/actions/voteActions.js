export function vote(voteValue) {
  console.log('hit a vote')
  return {
    type: 'UPDATE',
    value: voteValue
  }
}

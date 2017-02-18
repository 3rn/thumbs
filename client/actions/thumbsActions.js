export function voteThumbsUp() {
  console.log('hit thumbs up')
  return {
    type: 'INCREASE_UP_COUNT'
  }
}

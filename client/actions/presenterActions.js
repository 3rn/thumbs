export const UPDATE_VOTE_STATUS = 'UPDATE_VOTE_STATUS';

export function updateVoteStatus(voteStatus) {
  return {
    type: UPDATE_VOTE_STATUS,
    value: voteStatus
  };
}

import TwitterClient from '../lib/twitter_client';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const GET_TIMELINE = 'GET_TIMELINE';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function getTimeline() {
  return dispatch => {
    TwitterClient.get().fetchHomeTimelineTweets().then((data) => {
      dispatch({
        type: GET_TIMELINE,
        tweets: data.tweets
      });
    });
  };
}

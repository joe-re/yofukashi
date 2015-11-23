import TwitterClient from '../lib/twitter_client';

export const GET_TIMELINE = 'GET_TIMELINE';
export const TWEET = 'TWEET';

export function getTimeline() {
  return dispatch => {
    TwitterClient.get().fetchHomeTimelineTweets().then((data) => {
      dispatch({
        type: GET_TIMELINE,
        tweets: data.tweets
      });
    });

    const timeline = TwitterClient.get().subscribeHomeTimeline();
    timeline.on('tweet', (tweet) => {
      dispatch({ type: TWEET, tweet });
    });
  };
}

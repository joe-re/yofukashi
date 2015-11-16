const Twitter = require('twitter');
import remote from 'remote';

let client;

export default class TwitterClient {
  constructor({ accessToken, accessTokenSecret, consumerKey, consumerSecret }) {
    this.client = new Twitter({
      access_token_key: accessToken,
      access_token_secret: accessTokenSecret,
      consumer_key: consumerKey,
      consumer_secret: consumerSecret
    });
  }

  fetchHomeTimelineTweets() {
    return new Promise((resolve, _reject) => {
      this.client.get(
        'statuses/home_timeline',
        {},
        (_error, tweets, response) => {
          resolve({ tweets, response });
        }
      );
    });
  }
  static get() {
    if (!client) {
      client = new TwitterClient(remote.getGlobal('twitterSignature'));
    }
    return client;
  }
}

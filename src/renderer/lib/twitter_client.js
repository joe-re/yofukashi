const Twitter = require('twitter');
import remote from 'remote';
import { EventEmitter } from 'events';

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
      this.client.get('statuses/home_timeline', {},
        (_error, tweets, response) => {
          resolve({ tweets, response });
        }
      );
    });
  }

  subscribeHomeTimeline() {
    const eventEmitter = new EventEmitter();
    this.client.stream('user', {}, function(stream) {
      stream.on('data', (data) => {
        if (data.friends) {
        } else if (data.event) {
        } else if (data.delete) {
        } else if (data.created_at) {
          eventEmitter.emit('tweet', data);
        }
      });

      stream.on('error', function(error) {
        throw error;
      });
    });
    return eventEmitter;
  }

  static get() {
    if (!client) {
      client = new TwitterClient(remote.getGlobal('twitterSignature'));
    }
    return client;
  }
}

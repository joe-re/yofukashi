/* @flow */

import React, { PropTypes } from 'react';
import Moment from 'moment';

export default class Tweet extends React.Component {
  getHumanReadableTime(tweetTime: string): string {
    return Moment(new Date(tweetTime)).format('YYYY-MM-DD hh:mm:ss');
  }

  getImages(tweet: any): ?ReactElement {
    if (!(tweet.extended_entities && tweet.extended_entities.media)) {
      return;
    }
    return this.props.tweet.extended_entities.media.filter((media) => {
      return media.type === 'photo';
    }).map((media) => <img className="posted-image" src={media.media_url_https} />);
  }

  render(): ReactElement {
    const { tweet } = this.props;

    return (
      <div className="tweet">
        <div className="tweet-avator">
          <img src={tweet.user.profile_image_url} height="48" width="48" />
        </div>
        <div className="tweet-content">
          <div className="tweet-names">
            <span className="tweet-display-name">
              {tweet.user.name}
            </span>
            <span className="tweet-screen-name">
              @{tweet.user.screen_name}
            </span>
            <span className="tweet-posted-time">
              {this.getHumanReadableTime(tweet.created_at)}
            </span>
          </div>
          <div className="tweet-text">
            {tweet.text}
          </div>
          <div className="tweet-posted-images-area">
            {this.getImages(tweet)}
          </div>
        </div>
      </div>
    );
  }
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
};

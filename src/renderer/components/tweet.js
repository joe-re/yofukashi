/* @flow */

import React, { PropTypes } from 'react';
import Moment from 'moment';
import PostedImage from './posted_image';
import Open from 'open';

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
    }).map((media, index) => <PostedImage media={media} key={index} />);
  }

  getTweetText(tweet: any): Array<ReactElement> {
    let charIndex = 0;
    if (tweet.entities.urls.length === 0) {
      return <span>{tweet.text}</span>;
    }

    const reactElements: Array<ReactElement> = [];
    tweet.entities.urls.forEach((url) => {
      reactElements.push(<span>{tweet.text.slice(charIndex, url.indices[0])}</span>);
      const open = (e) => {
        Open(url.url);
        e.preventDefault();
      };
      reactElements.push(
        <span className="tweet-link-text" onClick={open}>
          {tweet.text.slice(url.indices[0], url.indices[1])}
        </span>
      );
      charIndex = url.indices[1];
    });
    return reactElements;
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
            {this.getTweetText(tweet)}
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

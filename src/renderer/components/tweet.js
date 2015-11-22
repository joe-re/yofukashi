/* @flow */

import React, { PropTypes } from 'react';

export default class Tweet extends React.Component {
  render(): ReactElement {
    const { tweet } = this.props;

    return (
      <div className="tweet">
        <div className="tweet-avator">
          <img src={tweet.user.profile_image_url} height="48" width="48" />
        </div>
        <div className="tweet-body">
          <div className="tweet-names">
            <span className="tweet-display-name">
              {tweet.user.name}
            </span>
            <span className="tweet-screen-name">
              @{tweet.user.screen_name}
            </span>
            <div className="tweet-text">
              {tweet.text}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
};

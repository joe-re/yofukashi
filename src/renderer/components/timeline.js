import React, { PropTypes } from 'react';

export default class Timeline extends React.Component {
  render() {
    const { timeline, getTimeline } = this.props;
    console.log(timeline);
    const textes = timeline.map((tweet) => {
      return (
        <div className="tweet" key={tweet.id}>
          <img src={tweet.user.profile_image_url} height="48" width="48" />
          <div className="tweet-names">
            <span className="tweet-display-name">
              {tweet.user.name}
            </span>
            <span className="tweet-screen-name">
              @{tweet.user.screen_name}
            </span>
          </div>
          <div className="tweetText">
            {tweet.text}
          </div>
        </div>
      );
    });
    return(
      <div>
        <button onClick={getTimeline}>GET!</button>
        {textes}
      </div>
    );
  }
}

Timeline.propTypes = {
  increment: PropTypes.func.isRequired,
  timeline: PropTypes.array.isRequired
};

/* @flow */

import React, { PropTypes } from 'react';
import Tweet from './tweet';

export default class Timeline extends React.Component {
  render(): ReactElement {
    const { timeline, getTimeline } = this.props;
    const tweets = timeline.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />);
    return(
      <div>
        <button onClick={getTimeline}>GET!</button>
        {tweets}
      </div>
    );
  }
}

Timeline.propTypes = {
  increment: PropTypes.func.isRequired,
  timeline: PropTypes.array.isRequired
};

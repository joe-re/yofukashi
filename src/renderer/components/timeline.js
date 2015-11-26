/* @flow */

import React, { PropTypes } from 'react';
import Tweet from './tweet';
import { List } from 'immutable';

export default class Timeline extends React.Component {
  componentDidMount() {
    const { onGetTimeline } = this.props;
    onGetTimeline();
  }

  render(): ReactElement {
    const { timeline, onGetTimeline } = this.props;
    const tweets = timeline.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />);
    return(
      <div>
        <button onClick={onGetTimeline}>Refresh</button>
        {tweets}
      </div>
    );
  }
}

Timeline.propTypes = {
  timeline: PropTypes.instanceOf(List).isRequired
};

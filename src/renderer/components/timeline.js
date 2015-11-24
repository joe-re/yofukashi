/* @flow */
import React, { PropTypes } from 'react';
import Tweet from './tweet';
import { List } from 'immutable';

export default class Timeline extends React.Component {
  componentDidMount() {
    const { getTimeline } = this.props;
    getTimeline();
  }

  render(): ReactElement {
    const { timeline, getTimeline } = this.props;
    const tweets = timeline.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />);
    return(
      <div>
        <button onClick={getTimeline}>Refresh</button>
        {tweets}
      </div>
    );
  }
}

Timeline.propTypes = {
  timeline: PropTypes.instanceOf(List).isRequired
};

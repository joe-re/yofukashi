/* @flow */

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TimelineActions from '../actions/timeline';
import { List } from 'immutable';
import Tweet from '../components/tweet';

class TimelineContainer extends React.Component {
  componentDidMount() {
    const { getTimeline } = this.props;
    getTimeline();
  }

  render() {
    const { timeline } = this.props;
    const tweets = timeline.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />);
    return(
      <div className="timeline">
        {tweets}
      </div>
    );
  }
}

TimelineContainer.propTypes = {
  timeline: PropTypes.instanceOf(List).isRequired,
  getTimeline: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    timeline: state.timeline
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TimelineActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TimelineContainer);

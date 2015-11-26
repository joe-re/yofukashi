import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Timeline from '../components/timeline';
import * as TimelineActions from '../actions/timeline';

class App extends React.Component {
  render() {
    const { timeline, getTimeline } = this.props;
    return (
      <Timeline timeline={timeline} onGetTimeline={getTimeline} />
    );
  }
}

function mapStateToProps(state) {
  return {
    timeline: state.timeline
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TimelineActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

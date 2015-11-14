import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Timeline from '../components/timeline';
import * as TimelineActions from '../actions/timeline';

function mapStateToProps(state) {
  return {
    counter: state.timeline
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TimelineActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);

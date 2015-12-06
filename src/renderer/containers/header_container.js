/* @flow */

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TimelineActions from '../actions/timeline';
import PostButton from '../components/post_button';

export default class HeaderContainer extends React.Component {
  render(): ReactElement {
    const { getTimeline } = this.props;
    return (
      <div className="header">
        <PostButton />
        <button className="btn-normal" onClick={getTimeline}>
          <i className="fa fa-refresh"></i> リロード
        </button>
      </div>
    );
  }
}

HeaderContainer.propTypes = {
  getTimeline: PropTypes.func.isRequired
};

function mapStateToProps(_state) {
  // this container doesn't apply state
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TimelineActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

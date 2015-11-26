/* @flow */

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TimelineActions from '../actions/timeline';

export default class HeaderContainer extends React.Component {
  render(): ReactElement {
    const { getTimeline } = this.props;
    return (
      <div className="header">
        <button className="btn-primary new-tweet-button">
          <i className="fa fa-pencil-square-o"></i> ツイート
        </button>

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

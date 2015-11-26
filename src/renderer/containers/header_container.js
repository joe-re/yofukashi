/* @flow */

import React, { PropTypes } from 'react';

export default class Header extends React.Component {
  render(): ReactElement {
    return (
      <div className="header">
        <button className="btn-primary">Tweet</button>
      </div>
    );
  }
}

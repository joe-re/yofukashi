import React, { PropTypes } from 'react';

export default class Timeline extends React.Component {
  render() {
    const { increment, counter } = this.props;
    return(
      <p>
        Clicked: {counter} times
        <button onClick={increment}>+</button>
      </p>
    );
  }
}

Timeline.propTypes = {
  increment: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

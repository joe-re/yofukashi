import React, { PropTypes } from 'react';

export default class Timeline extends React.Component {
  render() {
    const { timeline, getTimeline } = this.props;
    const textes = timeline.map((tweet) => <p>{tweet.text}</p>);
    return(
      <p>
        <button onClick={getTimeline}>GET!</button>
        {textes}
      </p>
    );
  }
}

Timeline.propTypes = {
  increment: PropTypes.func.isRequired,
  timeline: PropTypes.array.isRequired
};

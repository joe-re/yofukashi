/* @flow */
import React, { PropTypes } from 'react';

export default class PostedImage extends React.Component {
  render(): ReactElement {
    const { media } = this.props;

    return(
      <img className="posted-image" src={media.media_url_https} />
    );
  }
}

PostedImage.propTypes = {
  media: PropTypes.object.isRequired
};

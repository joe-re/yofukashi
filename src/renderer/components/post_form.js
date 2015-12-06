/* @flow */
import React, { PropTypes } from 'react';

export default class PostForm extends React.Component {
  render(): ReactElement {
    return(
      <div className="post-form">
        <textarea className="post-box" rows="5" placeholder="What are you doing?"></textarea>
        <button className="btn-primary" onClick={this.props.onCloseModal}>
          <i className="fa fa-pencil-square-o">Post</i>
        </button>
      </div>
    );
  }
}

PostForm.propTypes = {
  onCloseModal: PropTypes.func.isRequired
};

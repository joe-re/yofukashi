/* @flow */

import React from 'react';
import Modal from 'react-modal';

export default class PostButton extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render(): ReactElement {
    return(
      <div className="post-button">
        <button className="btn-primary new-tweet-button" onClick={this.openModal.bind(this)}>
          <i className="fa fa-pencil-square-o"></i> Post
        </button>

        <Modal
          closeTimeoutMS={150}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal.bind(this)}
        >
          <div className="posted-image-modal-innner">
            開いた
          </div>
        </Modal>
      </div>
    );
  }
}

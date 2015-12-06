/* @flow */

import React from 'react';
import Modal from 'react-modal';
import PostForm from './post_form';

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
    const modalStyle = {
      content: {
        padding: '0px'
      }
    };

    return(
      <div className="post-button">
        <button className="btn-primary" onClick={this.openModal.bind(this)}>
          <i className="fa fa-pencil-square-o">Post</i>
        </button>

        <Modal
          className="post-modal"
          closeTimeoutMS={150}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal.bind(this)}
          style={modalStyle}
        >
          <div className="post-modal-inner">
            <PostForm onCloseModal={this.closeModal.bind(this)} />
          </div>
        </Modal>
      </div>
    );
  }
}

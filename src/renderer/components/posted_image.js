/* @flow */
import React, { PropTypes } from 'react';
import Modal from 'react-modal';

export default class PostedImage extends React.Component {
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
    const { media } = this.props;

    return(
      <div className="posted-image">
        <img className="posted-image-preview" src={media.media_url_https} onClick={this.openModal.bind(this)} />
        <Modal
          closeTimeoutMS={150}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal.bind(this)}
        >
          <div className="posted-image-modal-innner">
            <img src={media.media_url_https}/>
          </div>
        </Modal>
      </div>
    );
  }
}

PostedImage.propTypes = {
  media: PropTypes.object.isRequired
};

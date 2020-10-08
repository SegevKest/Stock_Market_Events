import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


class InfoModal extends React.Component  {

  constructor(props){
    super(props);
  }


  render() {
    return (
      <Modal
      {...this.props}
      size="lg"
      bg ="dark"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Company name
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Detailed Information</h6>

      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
  }
}

export default InfoModal;

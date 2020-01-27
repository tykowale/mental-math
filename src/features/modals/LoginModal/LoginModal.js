import React from "react";
import { Button, Modal } from "semantic-ui-react";
import { connect } from "react-redux";

import { closeModal } from "../modalActions";

const LoginModal = ({ closeModal }) => {
  return (
    <Modal size="mini" open={true} onClose={closeModal}>
      <Modal.Header>Login</Modal.Header>
      <Modal.Description>Gonna put a login form here</Modal.Description>
      <Modal.Actions>
        <Button negative>Cancel</Button>
        <Button> Login </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default connect(null, { closeModal })(LoginModal);

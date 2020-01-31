import React from "react";
import { Button, Form, Modal, Segment } from "semantic-ui-react";
import { connect } from "react-redux";

import { closeModal } from "../modalActions";

const LoginModal = ({ closeModal }) => {
  return (
    <Modal size="mini" open={true} onClose={closeModal}>
      <Modal.Header>Login</Modal.Header>
      <Modal.Description>
        <Form size="large">
          <Segment>
            <Form.Input placeholder="Email" type="text" />
            <Form.Input placeholder="Password" type="password" />
          </Segment>
        </Form>
      </Modal.Description>
      <Modal.Actions>
        <Button negative onClick={closeModal}>
          Cancel
        </Button>
        <Button> Login </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default connect(null, { closeModal })(LoginModal);

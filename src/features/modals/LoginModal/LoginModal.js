import React from "react";
import { Button, Modal } from "semantic-ui-react";

const LoginModal = () => {
  return (
    <Modal size="mini" open={true}>
      <Modal.Header>Login</Modal.Header>
      <Modal.Description>Gonna put a login form here</Modal.Description>
      <Modal.Actions>
        <Button negative>Cancel</Button>
        <Button> Login </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default LoginModal;

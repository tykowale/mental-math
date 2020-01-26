import React from "react";
import { Modal } from "semantic-ui-react";

const LoginModal = () => {
  return (
    <Modal size="mini" open={true}>
      <Modal.Header>
        Login
      </Modal.Header>
      <Modal.Description>
        Gonna put a login form here
      </Modal.Description>
    </Modal>
  );
};

export default LoginModal;

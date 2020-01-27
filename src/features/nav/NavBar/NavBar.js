import React, { Component } from "react";
import { Button, Container, Menu } from "semantic-ui-react";

import { openModal } from "../../modals/modalActions";

class NavBar extends Component {
  handleSignIn = () => {
    // openModal here with LoginModal as the arg
  };
  render() {
    return (
      <Menu fixed="top">
        <Container>
          <Menu.Item header>Mental Math Helper</Menu.Item>
          <Menu.Item position="right">
            <Button basic content="Login" />
            <Button basic content="Sign Up" style={{ marginLeft: "0.5em" }} />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default NavBar;

import React, { Component } from "react";
import { Button, Container, Menu } from "semantic-ui-react";

class NavBar extends Component {
  render() {
    return (
      <Menu fixed="top">
        <Container>
          <Menu.Item header>
            Mental Math Helper
          </Menu.Item>
          <Menu.Item position="right">
            <Button basic content="Login" />
            <Button basic content="Sign Up" style={{marginLeft: "0.5em"}}/>
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
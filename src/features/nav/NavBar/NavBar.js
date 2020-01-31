import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Container, Menu } from "semantic-ui-react";

import { openModal } from "../../modals/modalActions";

class NavBar extends Component {
  handleSignIn = () => {
    console.log(this.props);
    this.props.openModal("LoginModal");
  };

  render() {
    return (
      <Menu fixed="top">
        <Container>
          <Menu.Item header>Mental Math Helper</Menu.Item>
          <Menu.Item position="right">
            <Button basic content="Login" onClick={this.handleSignIn} />
            <Button basic content="Sign Up" style={{ marginLeft: "0.5em" }} />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default connect(null, { openModal })(NavBar);

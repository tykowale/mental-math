import React, { Component } from "react";
import { Divider, Form, Grid, Header } from "semantic-ui-react";

class MainDashboard extends Component {
  state = {
    num1: 123,
    num2: 456,
    value: "",
    correct: false,
    checked: false,
  };

  handleChange = (e, { value }) => {
    this.setState({ value: value });
  };

  checkInput = () => {
    const { num1, num2, value } = this.state;
    this.setState({
      checked: true,
      correct: num1 + num2 === parseInt(value),
    });

    console.log(num1 + num2 === parseInt(value));
  };

  render() {
    const { checked, correct, num1, num2, value } = this.state;

    return (
      <Grid centered>
        <Grid.Column width={6}>

          <Header as="h1">{num1}</Header>
          <Header as="h2">+</Header>
          <Header as="h1">{num2}</Header>

          <Divider horizontal> Equals </Divider>

          <Form onSubmit={this.checkInput}>
            <Form.Group>
              <Form.Input
                placeholder="Enter Amount"
                type="text"
                value={value}
                onChange={this.handleChange}
              />
              <Form.Button type="Submit">Check</Form.Button>
            </Form.Group>
          </Form>
          {checked && (
            <h1> {correct ? "correct" : "wrong"}</h1>
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default MainDashboard;
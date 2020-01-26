import React, { Component } from "react";
import { Divider, Form, Grid, Header } from "semantic-ui-react";

class MainDashboard extends Component {
  state = {
    num1: 123,
    num2: 456,
    value: "",
    correct: false,
    checked: false,
    actualAnswer: "",
    streak: 0,
  };

  getRandomNumber = () => {
    return Math.floor(Math.random() * 1000) + 10;
  };

  handleChange = (e, { value }) => {
    this.setState({ value: value });
  };

  updateStreak = (correct) => {
    const { streak } = this.state;
    if (correct) {
      this.setState({ streak: streak + 1 });
    } else {
      this.setState({ streak: 0 });
    }
  };

  checkInput = () => {
    const { num1, num2, value } = this.state;
    const inputAnswer = parseInt(value);
    const actualAnswer = num1 + num2;

    this.setState({
      num1: this.getRandomNumber(),
      num2: this.getRandomNumber(),
      checked: true,
      correct: actualAnswer === inputAnswer,
      actualAnswer: actualAnswer,
      value: ""
    });

    this.updateStreak(actualAnswer === inputAnswer);
  };

  render() {
    const { actualAnswer, checked, correct, num1, num2, value, streak } = this.state;

    return (
      <Grid centered>
        <Grid.Column width={6}>
          <Header as="h1"> Current Streak - {streak} </Header>

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
            <h1> {correct ? "correct" : "wrong actual answer is - " + actualAnswer}</h1>
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default MainDashboard;
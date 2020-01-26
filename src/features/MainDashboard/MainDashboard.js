import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Counter from "../Counter/Counter";
import MathProblem from "../MathProblem/MathProblem";
import MathForm from "../MathProblem/MathForm";
import Answer from "../Answer/Answer";

class MainDashboard extends Component {
  state = {
    num1: 0,
    num2: 0,
    value: "",
    correct: false,
    checked: false,
    answer: "",
    streak: 0,
  };

  componentDidMount() {
    this.setState({
      num1: this.getRandomNumber(),
      num2: this.getRandomNumber(),
    });
  }

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
    const answer = num1 + num2;

    this.setState({
      num1: this.getRandomNumber(),
      num2: this.getRandomNumber(),
      checked: true,
      correct: answer === inputAnswer,
      answer: answer,
      value: "",
    });

    this.updateStreak(answer === inputAnswer);
  };

  render() {
    const { answer, checked, correct, num1, num2, value, streak } = this.state;

    return (
      <Grid centered>
        <Grid.Column width={6}>
          <MathProblem num1={num1} num2={num2} />
          <MathForm
            checkInput={this.checkInput}
            handleChange={this.handleChange}
            value={value}
          />
          <Answer
            checked={checked}
            correct={correct}
            answer={answer}
          />
          <Counter streak={streak} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default MainDashboard;
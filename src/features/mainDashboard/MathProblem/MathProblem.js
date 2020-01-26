import React from "react";
import { Divider } from "semantic-ui-react";

const MathProblem = ({num1, num2}) => {
  return (
    <div>
      <h1>{num1}</h1>
      <h2>+</h2>
      <h1>{num2}</h1>
      <Divider horizontal> Equals </Divider>
    </div>
  );
};

export default MathProblem;

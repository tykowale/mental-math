import React from "react";

const Answer = ({ checked, correct, answer }) => {
  return (
    <>
      {checked && (
        <h1> {
          correct ?
            "Correct!" :
            "Wrong! Answer is: " + answer
        } </h1>
      )}
    </>
  );
};

export default Answer;

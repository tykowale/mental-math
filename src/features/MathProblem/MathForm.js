import React from "react";
import { Form } from "semantic-ui-react";

const MathForm = ({ checkInput, handleChange, value }) => {
  return (
    <Form onSubmit={checkInput}>
      <Form.Group>
        <Form.Input
          placeholder="Enter Amount"
          type="text"
          value={value}
          onChange={handleChange}
        />
        <Form.Button type="Submit">Check</Form.Button>
      </Form.Group>
    </Form>
  );
};

export default MathForm;

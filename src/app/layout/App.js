import React from "react";
import "./App.css";
import MainDashboard from "../../features/mainDashboard/MainDashboard";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <>
      <Container className="main">
        <h1> Mental Math</h1>
        <MainDashboard />
      </Container>
    </>
  );
}

export default App;

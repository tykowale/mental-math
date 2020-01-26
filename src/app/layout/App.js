import React from "react";
import "./App.css";
import MainDashboard from "../../features/mainDashboard/MainDashboard";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Container className="main">
        <MainDashboard />
      </Container>
    </>
  );
}

export default App;

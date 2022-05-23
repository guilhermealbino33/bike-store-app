import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "../components";
import { HomePage, EmptyStatePage } from "../pages";
import { MyProvider } from "./provider";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/empty-state" exact element={<EmptyStatePage />} />
      </Routes>
    </Router>
  );
}


export default App;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Portfolio from "./Portfolio";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Portfolio />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

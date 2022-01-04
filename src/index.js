import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Calculator } from "./main/components/Calculator";

ReactDOM.render(
  <React.Fragment>
    <h2>Calculator</h2>
    <Calculator />
  </React.Fragment>,
  document.getElementById("root")
);



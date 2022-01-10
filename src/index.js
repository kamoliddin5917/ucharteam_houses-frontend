import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth } from "./context/Auth";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth>
        <App />
      </Auth>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

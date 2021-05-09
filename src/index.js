import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { IconContext } from "react-icons";

ReactDOM.render(
  <IconContext.Provider value={{ color: "black", className: "react-icon" }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IconContext.Provider>,
  document.getElementById("root")
);

serviceWorkerRegistration.unregister();

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App.js";
import reportWebVitals from "./reportWebVitals.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <body>
        <App />
      </body>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

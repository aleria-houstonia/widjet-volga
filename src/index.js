import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const root = ReactDOM.createRoot(
  document.getElementById("glasses-quiz-widget")
);
root.render(
  <App
    url={document
      .getElementById("glasses-quiz-widget")
      .getAttribute("data-source")}
  />
);

const devMode = process.env.NODE_ENV === "development";
if (devMode && module && module.hot) {
  module.hot.accept();
}

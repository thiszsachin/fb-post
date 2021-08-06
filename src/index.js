import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GiphyContext from "./components/giphyContext/GiphyContext";

ReactDOM.render(
  <GiphyContext>
    <App />
  </GiphyContext>,
  document.getElementById("root")
);

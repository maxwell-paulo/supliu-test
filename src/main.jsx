import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root");
const client = ReactDOM.createRoot(root);
client.render(
  <StrictMode>
    <App />
  </StrictMode>
);

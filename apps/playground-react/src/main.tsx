import React from "react";
import ReactDOM from "react-dom/client";
import "@slim-ds/tokens/dist/tokens.css";

import { defineCustomElements } from "@slim-ds/react";
import { App } from "./App";
import "./styles.css";

defineCustomElements();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


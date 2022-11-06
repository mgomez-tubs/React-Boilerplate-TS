import React from "react";
import App from "./App";
import "./sass/style.scss";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("react-root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

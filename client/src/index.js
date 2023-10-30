import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemProvider } from "./componet/context/ThemeContextt.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemProvider>
);

reportWebVitals();

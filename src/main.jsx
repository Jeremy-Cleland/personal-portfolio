import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/globals.css";
import { PortfolioProvider } from "./context/PortfolioContext.jsx";
import { SingleProjectProvider } from "./context/SingleProjectContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PortfolioProvider>
      <SingleProjectProvider>
        <App />
      </SingleProjectProvider>
    </PortfolioProvider>
  </React.StrictMode>
);

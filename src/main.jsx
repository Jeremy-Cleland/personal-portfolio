import React from "react";
import ReactDOM from "react-dom/client";
import TagManager from "react-gtm-module";
import App from "./App.jsx";
import "./styles/globals.css";
import { PortfolioProvider } from "./context/PortfolioContext.jsx";

const tagManagerArgs = {
  gtmId: "GTM-N438XXM",
};

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
  </React.StrictMode>
);


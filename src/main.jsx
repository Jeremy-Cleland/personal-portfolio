import React from "react";
import ReactDOM from "react-dom/client";
import TagManager from "react-gtm-module";
import App from "./App.jsx";
import { BlogProvider } from "./context/BlogContext.jsx";
import { PortfolioProvider } from "./context/PortfolioContext.jsx";
import "./styles/globals.css";

const tagManagerArgs = {
  gtmId: "GTM-N438XXM",
};

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PortfolioProvider>
      <BlogProvider>
        <App />
      </BlogProvider>
    </PortfolioProvider>
  </React.StrictMode>
);


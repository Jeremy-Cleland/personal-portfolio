import React from "react";
import ReactDOM from "react-dom/client";
import TagManager from '@sooro-io/react-gtm-module'
import App from "./App.jsx";
import { BlogProvider } from "./context/BlogContext.jsx";
import { PortfolioProvider } from "./context/PortfolioContext.jsx";
import "./styles/globals.css";
import { reportWebVitals } from "./utils/webVitals.js";

const tagManagerArgs = {
  gtmId: "G-R38H459W09", 
};

TagManager.initialize(tagManagerArgs)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PortfolioProvider>
      <BlogProvider>
        <App />
      </BlogProvider>
    </PortfolioProvider>
  </React.StrictMode>
);

// Initialize Web Vitals reporting
reportWebVitals({
  reportToConsole: process.env.NODE_ENV !== 'production',
  reportToAnalytics: true
});


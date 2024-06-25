import ReactDOM from "react-dom/client";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/main.css";
import "@fontsource/mulish/400.css";
import React from "react";
import Bugsnag from "@bugsnag/js";
import BugsnagPluginReact from "@bugsnag/plugin-react";
import BugsnagPerformance from "@bugsnag/browser-performance";

Bugsnag.start({
  apiKey: "d7e956af2ab8e4c969b0f01d18af3361",
  plugins: [new BugsnagPluginReact()],
});
BugsnagPerformance.start({ apiKey: "d7e956af2ab8e4c969b0f01d18af3361" });
const ErrorBoundary = Bugsnag.getPlugin("react").createErrorBoundary(React);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ErrorBoundary>
);



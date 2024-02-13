import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/main.css";
import "@fontsource/mulish/400.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);

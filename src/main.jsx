import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./views/Home";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);

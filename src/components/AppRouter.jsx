import React from "react";
import { Route, Routes } from "react-router-dom";
import Ohter from "./Ohter";
import Err404 from "./Err404";
import Home from "../views/Home/Home";
import Navbar from "./Navbar";

export default function AppRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/other2" element={<Ohter />} />
        <Route path="*" element={<Err404 />} />
      </Routes>
    </>
  );
}

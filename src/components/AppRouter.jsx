import React from "react";
import { Route, Routes } from "react-router-dom";
import Carrousel from "./Carrousel";
import Ohter from "./Ohter";
import Err404 from "./Err404"
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" exact element={<Carrousel/>} />
      <Route path="/other" element={<Ohter/>} />
      <Route path="/other" element={<Ohter/>} />
      <Route path="*" element={<Err404/>} />
    </Routes>
  );
}

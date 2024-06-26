import { Route, Routes } from "react-router-dom";
import Ohter from "./Ohter";
import Err404 from "./Err404";
import Home from "../views/Home/Home";
import Navbar from "./navbar/Navbar";
import Photography from "../views/Photography/Photography";

export default function AppRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/fd" exact element={<Home />} />
        <Route path="/other2" element={<Ohter />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="*" element={<Err404 />} />
      </Routes>
    </>
  );
}

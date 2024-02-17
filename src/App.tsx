import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Calculator from "./Pages/Calculator";

function App() {
  return (
    <Routes>
      <Route path={`/`} element={<Home />} />
      <Route path={`/calculator`} element={<Calculator />} />
    </Routes>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home/Home";
import Generos from "./pages/Generos/Generos.js";
import Genero from "./pages/Genero/Genero.js";
import Especies from "./pages/Especies/Especies";
import Especie from "./pages/Especie/Especie";

const App = () => (
  <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/generos" element={<Generos />} />
      <Route path="/especies" element={<Especies />} />
      <Route path="/especie/:nombre" element={<Especie />} />
      <Route path="/genero/:genero" element={<Genero />} />
    </Routes>
  </>
);
export default App;

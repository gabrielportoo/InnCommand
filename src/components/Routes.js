import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import HomePage from "./HomePage";
import Reserva from "./Reserva"; // Página de Reservas
import Lazer from "./NavbarComponents/Lazer";
import Gallery from "./NavbarComponents/Gallery";
import TermosCondicoes from "./ServicesAndCondition/TermosECondicoes";
import Footer from "./Footer";

function AppRoutes() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />
        {/* Reservas */}
        <Route path="/reservar" element={<Reserva />} />
        {/* Lazer */}
        <Route path="/lazer" element={<Lazer />} />
        {/* Galeria */}
        <Route path="/galeria" element={<Gallery />} />
        {/* Termos e Condições */}
        <Route path="/termos-e-condicoes" element={<TermosCondicoes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRoutes;

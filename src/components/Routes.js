import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import NavigationBar from "./NavigationBar";
import HomePage from "./HomePage";
import Reserva from "./Reserva"; // Página de Reservas
import Lazer from "./NavbarComponents/Lazer";
import Gallery from "./NavbarComponents/Gallery";
import TermosCondicoes from "./ServicesAndCondition/TermosECondicoes";
import Rooms from "./NavbarComponents/Rooms";
import Fitness from "./NavbarComponents/Fitness";
import Footer from "./Footer";
import Events from "./NavbarComponents/Events";
import Contacts from "./NavbarComponents/Contacts";

function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
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
        {/* Quartos */}
        <Route path="/quartos" element={<Rooms />} />
        {/* Fitness */}
        <Route path="/fitness" element={<Fitness />} />
        {/* Events */}
        <Route path="/events" element={<Events />} />
        {/* Contacts */}
        <Route path="/contacts" element={<Contacts />} />
        {/* Termos e Condições */}
        <Route path="/termos-e-condicoes" element={<TermosCondicoes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRoutes;

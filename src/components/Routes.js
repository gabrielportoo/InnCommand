import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import HomePage from "./HomePage"; // Página principal com todo o conteúdo anterior
import Reserva from "./Reserva"; // Página de Reservas
import Rooms from "./NavbarComponents/Rooms";
import Fitness from "./NavbarComponents/Fitness";
import Footer from "./Footer";
import Events from "./NavbarComponents/Events";
import Contacts from "./NavbarComponents/Contacts";

function AppRoutes() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />
        {/* Reservas */}
        <Route path="/reservar" element={<Reserva />} />
        {/* Quartos */}
        <Route path="/quartos" element={<Rooms />} />
        {/* Fitness */}
        <Route path="/fitness" element={<Fitness />} />
        {/* Events */}
        <Route path="/events" element={<Events />} />
        {/* Contacts */}
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRoutes;

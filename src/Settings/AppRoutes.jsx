import React from "react";
import AboutUs from "../Views/AboutUsP"
import MainFenix from "../Components/MainFenix";
import Services from "../Views/ServicesP";
import MoreContacts from "../Views/MoreContacts";
import Index from "../Views/Index";
import Header from "../Components/Header";
import { Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Servicios" element={<Services />} />
        <Route path="/Quienes" element={<AboutUs />} />
        <Route path="/Inicio" element={<MainFenix />} />
        <Route path="/Quienes" element={<AboutUs />} />
        <Route path="/Servicios" element={<Services />} />
        <Route path="/Sedes" element={<MoreContacts />} />
        <Route path="/MoreContacts" element={<MoreContacts />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;

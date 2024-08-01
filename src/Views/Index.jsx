import React from "react";
import Header from "../Components/Header";
import MainFenix from "../Components/MainFenix";
import Servicios from "../Components/Services";
import AboutUs from "../Components/AboutUs";
import Clients from "../Components/Clients";
import FooterFenix from "../Components/FooterFenix";
import { Box } from "@mui/material";
import backgroundImage from "../assets/fonSer.jpg";


const Index = () => {
  return (
    <Box sx={{ position: "relative" }}>
     
    
      <MainFenix />
      <Servicios />
      <AboutUs />
      <Clients />
      <FooterFenix />
    </Box>
  );
};

export default Index;

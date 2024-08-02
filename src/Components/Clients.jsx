import React from "react";
// import Carrusel from "../CommonComponents/Carrusel";
import { Box, Card, Grid, Typography } from "@mui/material";

import CarruselFenix from "../CommonComponents/carruselFenix";
import aesa from "../assets/Clients/aesa.jpg";
import hempel from "../assets/Clients/hempel.png";
import pecom from "../assets/Clients/pecom.jpg";
import ypf from "../assets/Clients/ypf.png";


const images = [aesa, hempel, pecom, ypf];

const Clientes = () => {
  return (
    <Box
      id="Clientes"
      sx={{
        position: "relative",
        width: "100%",
        color: "#500558",
        p: 3,
       
      }}
    >
      <Box>
        <Typography align="center" variant="h3" mb={4} mt={4}>
          Nuestro clientes
        </Typography>
        
      </Box>
      <CarruselFenix images={images} />
    </Box>
  );
};

export default Clientes;

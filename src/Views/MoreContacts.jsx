import React from 'react'
import mapa from "../assets/mapaArgentina.png"
import { Typography, Box } from '@mui/material'
import { FaLocationDot } from "react-icons/fa6";

const MoreContacts = () => {
  return (
    <div>
      <Typography>Nuestras sedes</Typography>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <img src={mapa} alt="mapaSedes" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%", 
          left: "10%",
        }}
      >
        <FaLocationDot color="red" size={40} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "30%",
        }}
      >
        <FaLocationDot color="red" size={40} />
      </Box>
    </div>
  );
}

export default MoreContacts

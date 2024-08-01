import { Box, Typography } from "@mui/material";
import React from "react";

const Icons = ({ Icono, tipoS, descripcion }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "5px solid #A1A311",
        }}
      >
        {Icono}
      </Box>
      <Typography align="center" sx={{ fontWeight: "bold" }}>
        {tipoS}
      </Typography>
      <Typography align="center">{descripcion}</Typography>
    </Box>
  );
};

export default Icons;

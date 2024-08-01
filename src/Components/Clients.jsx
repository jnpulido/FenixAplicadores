import React from "react";
// import Carrusel from "../CommonComponents/Carrusel";
import { Box, Card, Grid, Typography } from "@mui/material";
import hemplel from "../assets/hempel.png"; 


const Clientes = () => {
  return (
    <Box
      id="Clientes"
      sx={{
        position: "relative",
        width: "100%",
        color: "#500558",
        p: 3,
        // backgroundColor: "rgba(255, 255, 255, 0.8)", // Fondo semi-transparente para el contenido
      }}
    >
      <Box>
        <Typography align="center" variant="h3" mb={4} mt={4}>
          Nuestro clientes
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card>
              <img src={hemplel} alt="logocliente" />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card>
              <img src={hemplel} alt="logocliente" />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card>
              <img src={hemplel} alt="logocliente" />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card>
              <img src={hemplel} alt="logocliente" />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card>
              <img src={hemplel} alt="logocliente" />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Clientes;

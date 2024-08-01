import React from "react";
import Fondo from "../assets/fondo.png";
import logo from "../assets/logo.png";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MainFenix = () => {
  return (
    <Box>
      <Box
        id="Inicio"
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <img
          src={Fondo}
          alt="fondomain"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "30%",
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              width: "350px",
              height: "auto",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "10%",
          }}
        >
          <Typography color={"white"} align="center" fontSize={30}>
            Nos enorgullece ofrecer una gama completa de servicios que incluyen
            arenado, granallado, pintura interior y exterior, revestimientos
            industriales, tratamiento anticorrosivo y pruebas no destructivas y
            destructivas.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "10%",
          }}
        >
          <Button variant="outlined" component={Link} to="/MoreContacts">
            Contactanos
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MainFenix;



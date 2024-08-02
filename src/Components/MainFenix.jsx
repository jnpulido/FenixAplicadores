import React from "react";
import Fondo from "../assets/fondo.png";
import logo from "../assets/logo.png";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import CarruselFenix from "../CommonComponents/carruselFenix";
import arenado from "../assets/Services/Arenado.jpg";
import pintura from "../assets/Services/pinturasIyE.jpg";
import revestimiento from "../assets/Services/revestimiento.jpg";
import anticorrosivo from "../assets/Services/anticorrosivo.jpg";
import pruebas from "../assets/Services/pruebaDestruccion.jpg";

const images = [arenado, pintura, revestimiento, anticorrosivo, pruebas];

const MainFenix = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
            height: isMobile ? "20%" : "30%",
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              width: isMobile ? "200px" : "350px",
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
            height: isMobile ? "15%" : "20%",
            padding: isMobile ? "0 10px" : "0",
          }}
        >
          <Typography
            variant={isMobile ? "body1" : "h5"}
            color="white"
            align="center"
          >
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
            height: isMobile ? "10%" : "20%",
          }}
        >
          <Button
            variant="outlined"
            startIcon={<FaPhone />}
            component={Link}
            to="/MoreContacts"
          >
            Contactanos
          </Button>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        >
          <CarruselFenix images={images} />
        </Box>
      </Box>
    </Box>
  );
};

export default MainFenix;

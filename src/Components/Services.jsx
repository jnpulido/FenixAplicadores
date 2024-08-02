import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { SiWeightsandbiases } from "react-icons/si";
import TempleteServices from "../CommonComponents/TempleteServices";
import { Link } from "react-router-dom";
import { GrPaint } from "react-icons/gr";
import { FaIndustry } from "react-icons/fa6";
import { GiExtraTime } from "react-icons/gi";
import theme from "../Settings/theme";
import backgroundImage from "../assets/fonSer.jpg"; 

const Services = () => {
  return (
    <Box
      id="Servicios"
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.1,
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          color: "#500558",
          p: 3,
        }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Typography align="center" variant="h3" mb={4} mt={4}>
              Servicios
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <TempleteServices
              Icono={<SiWeightsandbiases color="#500558" size={30} />}
              tipoS="Arenado y Granallado"
              descripcion="Tecnología de vanguardia para preparar superficies, garantizando una base sólida para aplicaciones posteriores"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <TempleteServices
              Icono={<GrPaint color="#500558" size={30} />}
              tipoS="Pintura interior y exterior"
              descripcion="Equipados para proporcionar servicios de pintura interior y exterior de la más alta calidad."
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <TempleteServices
              Icono={<FaIndustry color="#500558" size={30} />}
              tipoS="Revestimiento industrial"
              descripcion="Variedad de revestimientos diseñados para proteger contra corrosión, abrasión y factores ambientales."
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <TempleteServices
              Icono={<GiExtraTime color="#500558" size={30} />}
              tipoS="Tratamiento anticorrosivo"
              descripcion="Soluciones personalizadas de tratamiento anticorrosivo para la integridad estructural."
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <TempleteServices
              Icono={<SiWeightsandbiases color="#500558" size={30} />}
              tipoS="Pruebas no destructivas"
              descripcion="Evaluaciones de la integridad, seguridad de estructuras, detección precisa de defectos y problemas potenciales."
            />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center" }}
          mb={4}
          mt={4}
        >
          <Button variant="contained" component={Link} to="/Servicios">
            Ver más...
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;

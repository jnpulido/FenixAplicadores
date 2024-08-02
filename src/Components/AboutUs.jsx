import React from "react";
import imgQuienes from "../assets/quienesSomos.jpg";
import { Box, Button, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../Settings/theme";

const AboutUs = () => {

  return (
    <Box
      id="Quienes"
      display="flex"
      justifyContent="center"
      alignContent="center"
    >
      <Grid
        container
        sx={{ background: theme.palette.background.default, p: 2 }}
      >
        <Grid item xs={12}>
          <Typography align="center" variant="h3">
            Quiénes somos
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={8}
          lg={8}
          xl={8}
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          sx={{ mt: 2 }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "45%",
            }}
          >
            <img
              src={imgQuienes}
              alt="logo"
              style={{
                borderRadius: "4%",
                overflow: "hidden",
                width: "70%",
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={4} px={4} sx={{ mt: 2 }}>
          <Typography>
            Desde nuestros inicios en 2013, nos hemos comprometido a construir
            un entorno de trabajo inclusivo y equitativo, donde cada individuo
            es valorado y respetado. Siendo fénix aplicadores una compañía donde
            se caracteriza por: Calidad y compromiso. Experiencia y
            confiabilidad. Tecnología de vanguardia. Personal capacitado.
            Adaptabilidad y flexibilidad. Transformación. Resiliencia.
          </Typography>
          <Grid
            item
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" component={Link} to="/Quienes">
              Ver más...
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;

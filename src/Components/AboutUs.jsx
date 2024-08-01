import React from "react";
import imgQuienes from "../assets/quienesSomos.jpg";
import { Box, Button, Typography, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const chandleChangePage = () => {
    navigate("/Quienes");
    console.log("debe navegar ael detalle de quienes somos");
  };
  return (
    <Box id="Quienes">
      

      <Grid container sx={{ background: "#D9D9D9" }} mt={-10}>
        <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
          {/* <img src={imgQuienes} /> */}
          <Box
            component="img"
            src={imgQuienes}
            sx={{
              borderRadius: "4%",
              overflow: "hidden",
            }}
          ></Box>
        </Grid>

        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <Typography>
            Creemos firmemente que nuestro mayor activo es nuestro equipo. Desde
            nuestros inicios en 2013, nos hemos comprometido a construir un
            entorno de trabajo inclusivo y equitativo, donde cada individuo es
            valorado y respetado. Siendo fénix aplicadores una compañía donde se
            caracteriza por: Calidad y compromiso. Experiencia y confiabilidad.
            Tecnología de vanguardia. Personal capacitado. Adaptabilidad y
            flexibilidad. Transformación. Resiliencia.
          </Typography>
          <Grid
            item
            style={{ display: "flex", justifyContent: "center", mt: 4 }}
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

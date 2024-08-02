import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import img1 from "../assets/quienesSomos.jpg"
import fondo from "../assets/fonSer.jpg"
import theme from "../Settings/theme";
import SectionServices from "../CommonComponents/SectionServices";
import arenado from "../assets/Services/Arenado.jpg"
import pintura from "../assets/Services/pinturasIyE.jpg"
import revestimiento from "../assets/Services/revestimiento.jpg"
import anticorrosivo from "../assets/Services/anticorrosivo.jpg"
import pruebas from "../assets/Services/pruebaDestruccion.jpg"
import FooterFenix from "../Components/FooterFenix";

const ServiciosP = () => {
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
        mt: 10,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${fondo})`,
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
          // p: 3,
        }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={6}>
            <Typography align="center" variant="h3" mb={4} mt={4}>
              Servicios
            </Typography>
            <Typography align="center" variant="body" mb={4} mt={4}>
              Creemos firmemente que nuestro mayor activo es nuestro equipo.
              Desde nuestros inicios en 2013, nos hemos comprometido a construir
              un entorno de trabajo inclusivo y equitativo, donde cada individuo
              es valorado y respetado. Siendo fénix aplicadores una compañía
              donde se caracteriza por: Calidad y compromiso. Experiencia y
              confiabilidad. Tecnología de vanguardia. Personal capacitado.
              Adaptabilidad y flexibilidad. Transformación. Resiliencia.
            </Typography>
          </Grid>
          <Grid item xs={6} justifyContent="center" alignContent="center">
            <Box>
              <img src={img1} alt="img de servicios inicial" width="300px" />
            </Box>
          </Grid>

          <SectionServices
            tService=" Granallado y Arenado"
            image={arenado}
            description=" Creemos firmemente que nuestro mayor activo es nuestro equipo.
                  Desde nuestros inicios en 2013, nos hemos comprometido a
                  construir un entorno de trabajo inclusivo y equitativo, donde
                  cada individuo es valorado y respetado. Siendo fénix
                  aplicadores una compañía donde se caracteriza por: Calidad y
                  compromiso. Experiencia y confiabilidad. Tecnología de
                  vanguardia. Personal capacitado. Adaptabilidad y flexibilidad.
                  Transformación. Resiliencia."
          />
          <SectionServices
            tService=" Pintura interiro y exterior"
            image={pintura}
            description=" Creemos firmemente que nuestro mayor activo es nuestro equipo.
                  Desde nuestros inicios en 2013, nos hemos comprometido a
                  construir un entorno de trabajo inclusivo y equitativo, donde
                  cada individuo es valorado y respetado. Siendo fénix
                  aplicadores una compañía donde se caracteriza por: Calidad y
                  compromiso. Experiencia y confiabilidad. Tecnología de
                  vanguardia. Personal capacitado. Adaptabilidad y flexibilidad.
                  Transformación. Resiliencia."
          />
          <SectionServices
            tService="Revestimiento industrial"
            image={revestimiento}
            description=" Creemos firmemente que nuestro mayor activo es nuestro equipo.
                  Desde nuestros inicios en 2013, nos hemos comprometido a
                  construir un entorno de trabajo inclusivo y equitativo, donde
                  cada individuo es valorado y respetado. Siendo fénix
                  aplicadores una compañía donde se caracteriza por: Calidad y
                  compromiso. Experiencia y confiabilidad. Tecnología de
                  vanguardia. Personal capacitado. Adaptabilidad y flexibilidad.
                  Transformación. Resiliencia."
          />
          <SectionServices
            tService="Tratamiento anticorrosivo"
            image={anticorrosivo}
            description=" Creemos firmemente que nuestro mayor activo es nuestro equipo.
                  Desde nuestros inicios en 2013, nos hemos comprometido a
                  construir un entorno de trabajo inclusivo y equitativo, donde
                  cada individuo es valorado y respetado. Siendo fénix
                  aplicadores una compañía donde se caracteriza por: Calidad y
                  compromiso. Experiencia y confiabilidad. Tecnología de
                  vanguardia. Personal capacitado. Adaptabilidad y flexibilidad.
                  Transformación. Resiliencia."
          />
          <SectionServices
            tService="pruebas de destrucción"
            image={pruebas}
            description=" Creemos firmemente que nuestro mayor activo es nuestro equipo.
                  Desde nuestros inicios en 2013, nos hemos comprometido a
                  construir un entorno de trabajo inclusivo y equitativo, donde
                  cada individuo es valorado y respetado. Siendo fénix
                  aplicadores una compañía donde se caracteriza por: Calidad y
                  compromiso. Experiencia y confiabilidad. Tecnología de
                  vanguardia. Personal capacitado. Adaptabilidad y flexibilidad.
                  Transformación. Resiliencia."
          />
        </Grid>
        <FooterFenix />
      </Box>
    </Box>
  );
};

export default ServiciosP;

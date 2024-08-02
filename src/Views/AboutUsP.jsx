import React from "react";
import { Box, Grid, Typography, Button, Card } from "@mui/material";
import QuienesCard from "../CommonComponents/QuienesCard";
import { TbTargetArrow } from "react-icons/tb";
import theme from "../Settings/theme";
import TempleteServices from "../CommonComponents/TempleteServices";
import { PiCalendarStarFill } from "react-icons/pi";
import { GrWebcam } from "react-icons/gr";
import { FaUserCheck } from "react-icons/fa6";
import { RiUserVoiceFill } from "react-icons/ri";
import Politics from "../CommonComponents/Politics";

const AboutUsP = () => {
  return (
    <Box>
      <Grid container gap={4} justifyContent="center" alignContent="center">
        <Grid item>
          <QuienesCard
            icon={<TbTargetArrow />}
            tittle="Misión"
            description="La misión de Fenix ​​Aplicadores es proporcionar soluciones
            especializadas en arenado, granallado, pintura interior y exterior,
            revestimientos industriales, tratamiento anticorrosivo y pruebas no
            destructivas y destructivas, cumpliendo con los más altos estándares
            de calidad con satisfacción y garantía."
          />
        </Grid>
        <Grid item>
          <QuienesCard
            icon={<TbTargetArrow />}
            tittle="Visión"
            description="Nuestra visión en Fénix ​​Aplicadores es ser reconocidos como
             líderes en el sector de aplicaciones industriales, destacándose por la 
             excelencia en nuestros servicios, la innovación constante y el compromiso."
          />
        </Grid>
        <Grid item>
          <QuienesCard
            icon={<TbTargetArrow />}
            tittle="Valores"
            description="En Fénix ​​Aplicadores nos regimos por la integridad, la calidad,
             la seguridad, la responsabilidad y la sostenibilidad. Estos principios 
             fundamentales nos guían en cada proyecto que emprendemos, asegurando la 
             satisfacción de nuestros clientes por medio de la durabilidad de nuestros 
             trabajos."
          />
        </Grid>
        <Grid item>
          <QuienesCard
            icon={<TbTargetArrow />}
            tittle="Filosofía"
            description="Nos basamos en la igualdad de oportunidades y la convicción 
            de que cada miembro de nuestro equipo aporta un valor único. Promovemos 
            una cultura de respeto, colaboración y crecimiento, donde todos tienen 
            la oportunidad de desarrollar sus habilidades y alcanzar su máximo potencial."
          />
        </Grid>
        <Grid item>
          <QuienesCard
            icon={<TbTargetArrow />}
            tittle="Diversidad"
            description="Entendemos que la diversidad en nuestro personal no solo 
            enriquece nuestra cultura organizacional, sino que también impulsa la 
            innovación y el éxito empresarial. Valoramos y celebramos las diferencias 
            en experiencia, perspectivas y habilidades, fomentando un entorno donde 
            todas las voces son escuchadas y apreciadas."
          />
        </Grid>
        <Grid item>
          <QuienesCard
            icon={<TbTargetArrow />}
            tittle="Compromiso"
            description="nos comprometemos a la excelencia en todo lo que hacemos. 
            Desde el inicio hasta la finalización de cada proyecto, nos esforzamos 
            por mantener los más altos estándares de calidad, seguridad y 
            profesionalismo en cada interacción y tarea realizada."
          />
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignContent="center"
        sx={{
          background: theme.palette.background.default,
          width: "100%",
          height: "50%",
          mt: 15,
        }}
      >
        <Grid item xs={12}>
          <Typography align="center" variant="h2" mb={4} mt={4}>
            ¿Porqué Fénix Aplicadores?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <TempleteServices
            Icono={<PiCalendarStarFill color="#500558" size={30} />}
            tipoS="Experiencia y Confiabilidad"
            descripcion="Líderes en la industria participando en proyectos de gran envergadura en sectores como la petroquímica, minería, industria del acero y muchas más"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <TempleteServices
            Icono={<GrWebcam color="#500558" size={30} />}
            tipoS="Tecnología de vanguardia"
            descripcion="Utilizamos los sistemas de pintura más modernos y eficientes del mercado, garantizando una protección duradera contra la corrosión."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <TempleteServices
            Icono={<FaUserCheck color="#500558" size={30} />}
            tipoS="Personal Capacitado"
            descripcion="Nuestro equipo de expertos cuenta con una amplia experiencia en proyectos industriales, asegurando la calidad y seguridad en cada aplicación."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <TempleteServices
            Icono={<RiUserVoiceFill color="#500558" size={30} />}
            tipoS="Adaptabilidad y Flexibilidad"
            descripcion="Entendemos que cada cliente tiene necesidades únicas. Ofrecemos soluciones personalizadas y tiempos de entrega ajustados a tus requerimie"
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 10 }}>
          <Button
            variant="contained"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Únete a nosotros
          </Button>
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 15 }}>
        <Grid item xs={12}>
          <Typography variant="h2" align="center">
            Politicas de calidad Fenix Aplicadores
          </Typography>
          <Card sx={{ py: 20 }}>
            <Typography variant="body1" align="center">
              En Fenix Aplicadores S.R.L, nos comprometemos a brindar soluciones
              especializadas de calidad en arenado, granallado, pintura interior
              y exterior, revestimientos industriales, tratamiento
              anticorrosivo, así como pruebas no destructivas y destructivas.
              Reconocemos la importancia de la integridad estructural, la
              durabilidad y la estética en todos los proyectos que emprendemos,
              y nos enorgullece respaldar nuestro trabajo con la siguiente
              garantía:
            </Typography>
            <Politics
              Icono={
                <RiUserVoiceFill
                  color={theme.palette.primary.contrastText}
                  size={40}
                />
              }
              tittle={"Calidad superior"}
              description="Nuestro equipo altamente capacitado y experimentado utiliza
               técnicas avanzadas y equipos de última generación para garantizar 
               resultados de calidad excepcional en cada proyecto. Nos comprometemos
               a cumplir y superar los estándares más exigentes de la industria en 
               cada paso del proceso."
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUsP;

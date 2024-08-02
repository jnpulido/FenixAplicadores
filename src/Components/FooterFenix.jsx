import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import fenixFooter from "../assets/fenixFooter.png";
import { Link } from "react-router-dom";
import mapa from "../assets/mapa.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import theme from "../Settings/theme";
const FooterFenix = () => {
  return (
    <Box
      id="Quienes"
      sx={{
        display: "flex",
        position: "relative",
        background: theme.palette.background.default,
        pt: 4,
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          sm={4}
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <img
            src={fenixFooter}
            alt="logoFenix"
            style={{
              width: "30%",
              height: "auto",
              marginBottom: "16px",
              position: "relative",
            }}
          />
          <Box sx={{ display: "flex", gap: 2 }}>
            <a
              href="https://www.facebook.com/share/mLmiLk7VE9xJWAvw/?mibextid=qi2Omg"
              target="_blank"
            >
              <FaFacebookSquare size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/fenix_aplicadores/"
              target="_blank"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/fenixaplicadores?igsh=MTlyMWQ4Nmc0OWgzOQ=="
              target="_blank"
              color="inherit"
            >
              <FaSquareInstagram size={20} />
            </a>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              position: "relative",
              mb: 2,
              direction: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            >
              <FaPhone size={20} />
            </Box>
            <Typography variant="body" sx={{ ml: 4 }}>
              +54 2121212122
            </Typography>
          </Box>
          <Box sx={{ position: "relative", mb: 2 }}>
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            >
              <FaPhone size={20} />
            </Box>
            <Typography variant="body" sx={{ ml: 4 }}>
              +54 2121212122
            </Typography>
          </Box>
          <Box sx={{ position: "relative", mb: 2 }}>
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            >
              <MdEmail size={20} />
            </Box>
            <Typography variant="body" sx={{ ml: 4 }}>
              nereComercial@fenixaplicadores.com.ar
            </Typography>
          </Box>
          <Box sx={{ position: "relative", mb: 2 }}>
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            >
              <MdEmail size={20} />
            </Box>
            <Typography variant="body" sx={{ ml: 4 }}>
              servicios@fenixaplicadores.com.ar
            </Typography>
          </Box>
          <Box sx={{ position: "relative", mb: 1 }}>
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            >
              <FaLocationDot size={20} />
            </Box>
            <Typography variant="body" sx={{ ml: 4 }}>
              Centenario, Neuquen
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box sx={{ textAlign: "center", position: "relative" }}>
            <a
              href="https://www.google.com/maps/place/Centenario,+Neuqu%C3%A9n/@-38.8494995,-68.1743083,13.59z/data=!4m6!3m5!1s0x960a4ac05769b5ab:0x559ffc8e037164bf!8m2!3d-38.827752!4d-68.1442932!16s%2Fm%2F0bwlqvg?entry=ttu"
              target="_blank"
            >
              <img
                src={mapa}
                alt="mapa"
                style={{ width: "30%", height: "auto" }}
              />
            </a>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          display="inline-block"
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              mb: 0,
              position: "relative",
              py: 1,
            }}
          >
            <Typography
              align="center"
              color={theme.palette.primary.contrastText}
            >
              Derecho reservados
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FooterFenix;

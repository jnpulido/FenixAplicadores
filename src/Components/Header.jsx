import React from "react";
import { Link } from "react-scroll";
import { Link as Navigate } from "react-router-dom";
import { Grid, Typography, Box, Button } from "@mui/material";
import logo from "../assets/logo.png";
import { IoHome } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiUserStarFill } from "react-icons/ri";
import { FaUsersCog } from "react-icons/fa";
import theme from "../Settings/theme";

const Header = () => {
  const page = [
    {
      label: "Inicio",
      link: "Inicio",
      icono: <IoHome />,
    },
    {
      label: "Servicios",
      link: "Servicios",
      icono: <MdMiscellaneousServices size={15} />,
    },
    {
      label: "Quiénes somos",
      link: "Quienes",
      icono: <RiUserStarFill size={15} />,
    },
    {
      label: "Clientes",
      link: "Clientes",
      icono: <FaUsersCog />,
    },
  ];

  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        p: 1,
        zIndex: 1100,
        display: "flex",
      }}
    >
      <Grid container alignItems="center" spacing={4}>
        <Grid item>
          <Navigate to="/">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "100px", height: "40px" }}
            />
          </Navigate>
        </Grid>
        <Grid item xs>
          <Grid
            container
            spacing={2}
            justifyContent="flex-end"
            alignItems="center"
          >
            {page.map((item, index) => (
              <Grid item key={index}>
                <Button
                  sx={{
                    color: theme.palette.primary.contrastText,
                    "&:hover": {
                      backgroundColor: "#A1A311",
                    },
                  }}
                >
                  {
                    
                  }
                  <Link to={item.link} smooth={true} duration={500}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item>{item.icono}</Grid>
                      <Grid item>
                        <Typography>{item.label}</Typography>{" "}
                      </Grid>
                    </Grid>
                  </Link>
                </Button>
              </Grid>
            ))}
            <Grid item>
              <Button
                variant="contained"
                sx={{
                  width: "200px",
                  height: "50px",
                  background: theme.palette.secondary.main,
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.hovers,
                  },
                }}
              >
                Iniciar sesión
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;

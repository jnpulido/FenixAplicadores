import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as Navigate } from "react-router-dom";
import {
  Grid,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { IoHome } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiUserStarFill } from "react-icons/ri";
import { FaUsersCog } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/logo.png";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const pages = [
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
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{ background: theme.palette.primary.main }}
      p={2}
    >
      <Grid item>
        <Navigate to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "100px", height: "40px" }}
          />
        </Navigate>
      </Grid>
      <Grid item justifyContent="flex-end" alignContent="flex-end">
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="white"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <RxHamburgerMenu color={theme.palette.primary.contrastText} />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
            >
              <List>
                {pages.map((item, index) => (
                  <ListItem button key={index}>
                    <ScrollLink to={item.link} smooth={true} duration={500}>
                      <ListItemText
                        primary={item.label}
                        color={theme.palette.primary.contrastText}
                      />
                    </ScrollLink>
                  </ListItem>
                ))}
                <ListItem button component={Navigate} to="/login">
                  <ListItemText primary="Iniciar sesión" />
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <Grid
            container
            spacing={2}
            justifyContent="flex-end"
            alignItems="center"
          >
            {pages.map((item, index) => (
              <Grid item key={index}>
                <Button
                  sx={{
                    color: theme.palette.primary.contrastText,
                    "&:hover": {
                      backgroundColor: "#A1A311",
                    },
                  }}
                >
                  <ScrollLink to={item.link} smooth={true} duration={500}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item>{item.icono}</Grid>
                      <Grid item>
                        <Typography>{item.label}</Typography>
                      </Grid>
                    </Grid>
                  </ScrollLink>
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
                component={Navigate}
                to="/login"
              >
                Iniciar sesión
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Header;

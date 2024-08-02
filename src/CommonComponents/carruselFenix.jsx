import React, { useState } from "react";
import { Box, IconButton, Grid, useTheme, useMediaQuery } from "@mui/material";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CarruselFenix = ({ images }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const isMd = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLg = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isXl = useMediaQuery(theme.breakpoints.up("lg"));

  let itemsPerPage;
  if (isXs) itemsPerPage = 1;
  else if (isSm) itemsPerPage = 1;
  else if (isMd) itemsPerPage = 2;
  else if (isLg) itemsPerPage = 3;
  else if (isXl) itemsPerPage = 4;

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + itemsPerPage) % images.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - itemsPerPage + images.length) % images.length);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(128, 128, 128, 0.3)",
      }}
    >
      <IconButton onClick={handlePrev} aria-label="previous">
        <IoIosArrowBack />
      </IconButton>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        {images.slice(current, current + itemsPerPage).map((image, index) => (
          <Grid item key={index}>
            <Box
              sx={{
                width: isXs ? 150 : isSm ? 200 : 300,
                height: isXs ? 100 : isSm ? 150 : 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
              }}
            >
              <img
                src={image}
                alt={`carousel-${current + index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
      <IconButton onClick={handleNext} aria-label="next">
        <IoIosArrowForward />
      </IconButton>
    </Box>
  );
};


export default CarruselFenix;

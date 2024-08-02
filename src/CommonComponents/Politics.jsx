import { Box, Typography } from "@mui/material";
import React from "react";
import theme from "../Settings/theme";

const Politics = ({ Icono, tittle, description }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: {
            xs: "100px",
            sm: "150px",
          },
          height: {
            xs: "100px",
            sm: "150px",
          },
          borderRadius: "50%",
          border: `5px solid ${theme.palette.primary.main}`,
          background: theme.palette.primary.main,
          zIndex: 10,
        }}
      >
        {Icono}
      </Box>
      <Box
        sx={{
          background: theme.palette.secondary.main,
          position: "absolute",
          width: {
            xs: "90%",
          },
          height: {
            xs: "200px",
            sm: "180px",
          },
          borderTopRightRadius: "16px",
          borderBottomRightRadius: "16px",
          borderTopLeftRadius: "70px",
        }}
      >
        <Typography
          align="left"
          variant="h5"
          sx={{ fontWeight: "bold", ml:{xs:15, sm:20}  }}
        >
          {tittle}
        </Typography>
              <Typography align="left" sx={{ ml: { xs: 15, sm: 20 } }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default Politics;

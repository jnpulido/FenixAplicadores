import React from "react";
import { Grid, Box, Typography, Card, CardContent } from "@mui/material";
import theme from "../Settings/theme";

const SectionServices = ({ tService, image, description }) => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          background: theme.palette.background.default,
          p: 2,
          boxSizing: "border-box",
        }}
      >
        <Typography align="right" variant="h3">
          {tService}
        </Typography>
        <Box sx={{ position: "relative", my: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "left" }}>
            <img
              src={image}
              alt="img de servicios inicial"
              style={{ width: "40%", height: "auto" }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              maxWidth: 600,
              mx: "auto",
              "&:hover > .hoverCard": {
                display: "block",
              },
            }}
          >
            <Card sx={{ width: "100%", height:"80%" }}>
              <CardContent>{tService}</CardContent>
            </Card>
            <Card
              className="hoverCard"
              sx={{
                width: "100%",
                display: "none",
              }}
            >
              <CardContent>{description}</CardContent>
            </Card>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SectionServices;

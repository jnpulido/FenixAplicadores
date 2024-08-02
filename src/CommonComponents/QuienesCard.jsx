import React from "react";
import { Card, CardContent, Typography, Icon, Box } from "@mui/material";
import { styled } from "@mui/system";
import fondoCard from "../assets/fonCard.jpg";

const HoverCard = styled(Card)(({ theme }) => ({
  width: "300px",
  height: "300px",
  backgroundImage: `url(${fondoCard})`,
  borderRadius: 16,
  position: "relative",
  overflow: "hidden",
  "&:hover .hover-content": {
    transform: "translateY(0)",
  },
  "&:hover .icon-title": {
    transform: "translateY(-50px)",
  },
}));

const HoverContent = styled("div")(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  color: "#fff",
  padding: theme.spacing(2),
  transform: "translateY(100%)",
  transition: "transform 0.3s ease-in-out",
}));

const IconTitle = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  transition: "transform 0.3s ",
}));

const QuienesCard = ({ icon, tittle, description }) => (
  <Box sx={{ mt: 10 }}>
    <HoverCard>
      <CardContent>
        <IconTitle className="icon-title">
          {icon}
          <Typography variant="h5">{tittle}</Typography>
        </IconTitle>
        <HoverContent className="hover-content">
          <Typography variant="body2">{description}</Typography>
        </HoverContent>
      </CardContent>
    </HoverCard>
  </Box>
);

export default QuienesCard;

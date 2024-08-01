import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ede7f6",
      main: "#500558",
      dark: "#311b92",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#b39ddb",
      main: "#A1A311",
      hovers: "#C2C41B",
      dark: "#4527a0",
      contrastText: "#000000",
    },
    success: {
      light: "#e8f5e9",
      main: "#4caf50",
      dark: "#388e3c",
      contrastText: "#ffffff",
    },
    error: {
      light: "#ffebee",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#212121",
      secondary: "#000000",
      white: "#ffffff",
      disabled: "#BDBDBD",
    },
    background: {
      default: "#ffffff",
      paper: "#F5F5F5",
    },
  },
});

export default theme;

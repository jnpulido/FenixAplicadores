import "./App.css";
import Index from "./Views/Index";
import { ThemeProvider } from "@mui/material";
import theme from "./Settings/theme";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Settings/AppRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
         <AppRoutes/>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

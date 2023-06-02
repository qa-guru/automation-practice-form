import React from "react";
import PracticeForm from "../pages/PracticeForm";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "../theme";
import Footer from "../widgets/Footer";

const App: React.FC = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PracticeForm />
        <Footer />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;

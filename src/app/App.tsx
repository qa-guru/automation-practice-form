import React from "react";
import PracticeForm from "../pages/PracticeForm";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "../theme";

const App: React.FC = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PracticeForm />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;

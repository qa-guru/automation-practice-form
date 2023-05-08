import { createTheme } from "@mui/material";
import "./fonts.css";

declare module "@mui/material/styles" {
  interface Palette {
    primaryDark: Palette["primary"];
  }
  interface PaletteOptions {
    primaryDark: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2CCCA6",
    },
    secondary: {
      main: "#DFD5EC",
    },
    primaryDark: {
      main: "#263238",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    body1: {
      fontWeight: 400,
    },
    fontFamily: "'Montserrat', sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 690,
      md: 900,
      lg: 1380,
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 28,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          position: "absolute",
          bottom: "-1.3rem",
          fontSize: "0.7rem",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        html: {
          width: "100%",
          height: "100%",
        },
        body: {
          width: "100%",
          height: "100%",
        },
      },
    },
  },
});

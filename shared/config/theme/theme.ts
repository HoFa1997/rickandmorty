import { ThemeOptions } from "@mui/material";
const theme = (prefersDarkMode): ThemeOptions => {
  return {
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
      background: {},
    },
    components: {
      MuiTypography: {},
    },
  };
};

export default theme;

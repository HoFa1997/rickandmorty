import { ThemeOptions } from "@mui/material";
const darkTheme = (prefersDarkMode): ThemeOptions => {
  return {
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
    },
  };
};

export default darkTheme;

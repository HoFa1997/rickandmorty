import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTheme, ThemeProvider } from "@mui/material";
import darkTheme from "@/config/theme/darkTheme";
import lightTheme from "@/config/theme/lightTheme";
import { useState } from "react";
import GlobalStyleCustom from "@/config/theme/globalStyle";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? createTheme(lightTheme) : createTheme(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyleCustom />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;

import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import theme from "@/config/theme/theme";
import GlobalStyleCustom from "@/config/theme/globalStyle";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const _theme = createTheme(theme(prefersDarkMode));

  return (
    <ThemeProvider theme={_theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyleCustom />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;

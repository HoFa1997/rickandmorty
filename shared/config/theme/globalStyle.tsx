import { GlobalStyles } from "@mui/material";
import { FunctionComponent } from "react";

interface GlobalStyleCustomProps {}

const GlobalStyleCustom: FunctionComponent<GlobalStyleCustomProps> = () => {
  return (
    <GlobalStyles
      styles={(theme) => ({
        h1: { color: theme.palette.primary.main },
        h2: { color: "green" },
        body: {
          fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
        },
        a: {
          color: "inherit",
          textDecoration: "none",
        },
        "&& *": {
          boxSizing: `border-box`,
          padding: 0,
          margin: 0,
          transition: `all 0.2s`,
          "p::selection": {
            color: `rgb(255, 152, 0)`,
            background: `rgb(32, 35, 41)`,
          },
          "a:hover": {
            color: `rgb(255, 152, 0)`,
          },
        },
      })}
    />
  );
};

export default GlobalStyleCustom;

import { Box, styled, Typography, TypographyProps } from "@mui/material";
import { BoxProps } from "@mui/system";
import { FunctionComponent } from "react";

interface HeaderHomePageProps {}

const MainTypography = styled(Typography)<TypographyProps>({
  color: "rgb(32, 35, 41)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  fontSize: "4rem",
  fontFamily:
    "-apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji','Segoe UI Symbol'",
  fontWeight: 900,
});

const HeaderContainer = styled(Box)<BoxProps>({
  backgroundImage: `url("/rickandmortyheader.svg")`,
  backgroundRepeat: `no-repeat`,
  backgroundPosition: `bottom`,
  height: `400px`,
  width: `100%`,
  textAlign: `center`,
});

const HeaderHomePage: FunctionComponent<HeaderHomePageProps> = () => {
  return (
    <HeaderContainer>
      <MainTypography>Rick and Morty by HoFa & Shayan</MainTypography>
    </HeaderContainer>
  );
};

export default HeaderHomePage;

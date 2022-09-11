import { Box, styled, Typography, TypographyProps } from "@mui/material";

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

const BannerText = (props) => {
  return (
    <MainTypography>{ props.children }</MainTypography>
  )
}

export default BannerText
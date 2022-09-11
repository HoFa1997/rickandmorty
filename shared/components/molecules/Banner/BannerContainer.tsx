import { styled, Box, BoxProps } from "@mui/material";

const HeaderContainer = styled(Box)<BoxProps>({
    backgroundImage: `url("/rickandmortyheader.svg")`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `bottom`,
    height: `400px`,
    width: `100%`,
    textAlign: `center`,
  });

const BannerContainer = ({ children }) => {
  return (
    <HeaderContainer>
        {children}
    </HeaderContainer>
  )
}

export default BannerContainer
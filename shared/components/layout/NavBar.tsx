import Image from "next/image";
import { FunctionComponent } from "react";
import logo from "../../../public/rickandmortylogo.png";
import {
  AppBar,
  Box,
  Button,
  ButtonProps,
  styled,
  Toolbar,
} from "@mui/material";

interface NavBarProps {}

const BtnAboutUs = styled(Button)<ButtonProps>({
  border: `2px solid rgb(255, 152, 0)`,
  color: `black`,
  ":hover": {
    color: "white",
    border: "2px solid rgb(255, 152, 0)",
    background: "rgb(255, 152, 0)",
  },
});

const BtnOther = styled(Button)<ButtonProps>({
  color: `black`,
  background: "transparent",
  ":hover": {
    color: "rgb(255, 152, 0)",
    background: "transparent",
  },
});

const NavBar: FunctionComponent<NavBarProps> = () => {
  return (
    <>
      <AppBar elevation={0} color="transparent" position="static">
        <Toolbar disableGutters sx={{ paddingX: 2 }}>
          <Box>
            <Image
              src={logo.src}
              height={50}
              width={50}
              alt="rickandmortylogo"
            />
          </Box>
          <Box flexGrow={1} textAlign={"right"}>
            <BtnOther>Character</BtnOther>
            <BtnOther>Location</BtnOther>
            <BtnOther>Episode</BtnOther>
            <BtnAboutUs variant="outlined">About US</BtnAboutUs>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;

import { FunctionComponent } from "react";
import logo from "../../../public/rickandmortylogo.png";
import HeaderNavigation from '../molecules/Navigation/Header/HeaderNavigation'
import {
  AppBar,
  Box,
  Toolbar,
} from "@mui/material";
import HeaderLogo from "../atoms/Logos/Header/HeaderLogo";

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
  return (
    <>
      <AppBar elevation={0} color="transparent" position="static">
        <Toolbar disableGutters sx={{ paddingX: 2 }}>
          <HeaderLogo
            src={logo.src}
            height={50}
            width={50}
            alt="rickandmortylogo"
          />
          <HeaderNavigation />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;

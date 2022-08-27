import Image from "next/image";
import { FunctionComponent, JSXElementConstructor } from "react";
import style from "../../../styles/Navbar.module.scss";
import logo from "../../../public/rickandmortylogo.png";

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
  return (
    <>
      <div className={style.Container}>
        <div className={style.buttonContainer}>
          <button className={style.textButton}>Character</button>
          <button className={style.textButton}>Location</button>
          <button className={style.textButton}>Episode</button>
          <button className={style.borderButton}>About Me</button>
        </div>
        <div className={style.logoContainer}>
          <Image src={logo.src} height={50} width={50} alt="rickandmortylogo" />
        </div>
      </div>
    </>
  );
};

export default NavBar;

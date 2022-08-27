import type { NextPage } from "next";
import style from "../styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../shared/components/layout/NavBar";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <div className={style.MainDiv}>
        <p>Welcome to Rick And Morty</p>
      </div>
    </>
  );
};

export default Home;

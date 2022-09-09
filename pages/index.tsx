import Image from "next/image";
import Link from "next/link";
import {Card, styled, Typography} from "@mui/material";
import type { NextPage } from "next";
import style from "../styles/Home.module.scss";
import { useCharacterHomeApi } from "@/api/api";
import Layout from "@/components/layout/Layout";
import { TypographyProps } from "@mui/system";

const MainTypography = styled(Typography)<TypographyProps>({
  color: 'rgb(32, 35, 41)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  fontSize: '5.625rem',
  fontFamily: "-apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji','Segoe UI Symbol'",
  fontWeight: 800
})

const Home: NextPage = () => {
  const { status, data, error } = useCharacterHomeApi();

  if (status === "loading") return <>Loading...</>;
  return (
    <>
      <Layout>
        <div className={style.MainDiv}>
          <div className={style.navbarContent}>
            <MainTypography>
              Rick and Morty by HoFa
            </MainTypography>
          </div>
          <div className={style.homeBg}>
            <div className={style.homeContent}>
              {data.map((char) => {
                return (
                  <>
                    <div className={style.card}>
                      <Image
                        className={style.imgContainer}
                        src={char.image}
                        alt={char.name}
                        height={220}
                        width={220}
                      />
                      <div className={style.text}>
                        {/* Character name and status */}
                        <div>
                          <Link href={"/"}>
                            <a className={style.charName}>{char.name}</a>
                          </Link>
                          <div className={style.status}>
                            <span
                              className={
                                char.status === "Dead"
                                  ? style.circleDead
                                  : style.circleAlive
                              }
                            />
                            <span>{char.status}</span>
                            <span> - </span>
                            <span>{char.species}</span>
                          </div>
                        </div>
                        {/* Character last know location */}
                        <div>
                          <p>Last known location:</p>
                          <Link href={`/`}>
                            <a>{char.location.name}</a>
                          </Link>
                        </div>
                        {/* Character first seen */}
                        <div>
                          <p>Character type:</p>
                          <a>
                            {char.species} {char.type}
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;

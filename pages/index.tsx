import type { NextPage } from "next";
import style from "../styles/Home.module.scss";
import NavBar from "../shared/components/layout/NavBar";
import { useCharacterHomeApi } from "@/api/api";
import Image from "next/image";

const Home: NextPage = () => {
  const { status, data, error } = useCharacterHomeApi();

  if (status === "loading") {
    return (
      <>
        <div className={style.homeContent}>
          <div className={style.loading}>name</div>
          <div className={style.loading}>name</div>
          <div className={style.loading}>name</div>
          <div className={style.loading}>name</div>
          <div className={style.loading}>name</div>
          <div className={style.loading}>name</div>
        </div>
      </>
    );
  }
  return (
    <>
      <NavBar />
      <div className={style.MainDiv}>
        <div className={style.navbarContent}>
          <p>Rick and Morty by HoFa</p>
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
                        <h2>{char.name}</h2>
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
                        <h3>{char.status}</h3>
                      </div>
                      {/* Character first seen */}
                      <div>
                        <p>First seen in:</p>
                        <h3>{char.origin.name}</h3>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

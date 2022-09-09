import type { NextPage } from "next";
import { useCharacterHomeApi } from "@/api/api";
import Layout from "@/components/layout/Layout";
import { Box, Container, Grid, Paper, useTheme } from "@mui/material";
import CharacterCard from "@/components/homePage/charItem";
import HeaderHomePage from "@/components/homePage/header";

const Home: NextPage = () => {
  const theme = useTheme();
  const { status, data, error } = useCharacterHomeApi();

  if (status === "loading") return <>Loading...</>;

  return (
    <>
      <Layout>
        <Container>
          <HeaderHomePage />
          <Grid container columnSpacing={5} rowSpacing={3} textAlign="left">
            {data.map((char) => {
              return (
                <Grid key={char.id} item lg={6} md={6} sm={11} xs={11}>
                  <CharacterCard
                    charName={char.name}
                    charStatus={char.status}
                    charSpecies={char.species}
                    charLocationName={char.location.name}
                    charType={char.species}
                    image={char.image}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

export default Home;

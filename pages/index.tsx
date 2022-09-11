import type { NextPage } from "next";
import { useCharacterHomeApi } from "@/api/api";
import Template from "@/components/templates/Template";
import { Box, Container, Grid, Paper, useTheme } from "@mui/material";
import CharactersCard from "@/components/organisms/Cards/Characters/CharactersCard";
import MainBanner from "@/components/organisms/Banners/Main/MainBanner";

const Home: NextPage = () => {
  const theme = useTheme();
  const { status, data, error } = useCharacterHomeApi();

  if (status === "loading") return <>Loading...</>;

  return (
    <Template>
        <>
          <MainBanner />
          <Box bgcolor="#202329" padding='5rem 0'>
            <Container>
                <Grid container columnSpacing={5} rowSpacing={3} textAlign="left">
                  {data.map((char) => {
                    return (
                      <Grid key={char.id} item lg={6} md={6} sm={11} xs={11} margin="auto">
                        <CharactersCard
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
          </Box>
        </>
      </Template>
  );
};

export default Home;

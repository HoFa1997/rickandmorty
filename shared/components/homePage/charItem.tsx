import { Card, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import { FunctionComponent } from "react";
import CircleIcon from "@mui/icons-material/Circle";

interface CharacterCardProps {
  charName: string;
  charStatus: string;
  charSpecies: string;
  charLocationName: string;
  charType: string;
  image: string;
}

const CharacterCard: FunctionComponent<CharacterCardProps> = ({
  charName,
  charStatus,
  charSpecies,
  charLocationName,
  charType,
  image,
}) => {
  return (
    <Card sx={{ backgroundColor: "#3C3E44", borderRadius: "10px" }}>
      <Grid container columns={4}>
        <Grid
          sx={{ position: "relative", height: { xs: 350, sm: 230 } }}
          item
          md={1.5}
          xs={4}
        >
          <Image layout="fill" objectFit="cover" src={image} alt={charName} />
        </Grid>
        <Grid item xs={4} md={2.5}>
          <Box padding=".6rem">
            <Grid item>
              <Typography
                sx={{
                  fontWeight: "800",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  ":hover": { color: "#FF9800" },
                }}
              >
                {charName}
              </Typography>
              <Typography sx={{ fontWeight: "700", fontSize: ".9rem" }}>
                {charStatus === "Alive" ? (
                  <CircleIcon
                    sx={{
                      fontSize: ".8rem",
                      color: "green",
                      margin: "0 .3rem",
                    }}
                  />
                ) : (
                  <CircleIcon
                    sx={{ fontSize: ".8rem", color: "red", margin: "0 .3rem" }}
                  />
                )}
                {`${charStatus} - ${charSpecies}`}
              </Typography>
            </Grid>
            <Grid item xs padding=".9rem 0">
              <Typography
                sx={{ fontWeight: "700", fontSize: ".8rem", color: "#9E9E9E" }}
              >
                Last known location:
              </Typography>
              <Typography
                sx={{ cursor: "pointer", ":hover": { color: "#FF9800" } }}
              >
                {charLocationName}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography
                color="textSecondary"
                sx={{ fontWeight: "700", fontSize: ".8rem", color: "#9E9E9E" }}
              >
                Character type:
              </Typography>
              <Typography
                sx={{ cursor: "pointer", ":hover": { color: "#FF9800" } }}
              >
                {charType}
              </Typography>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CharacterCard;

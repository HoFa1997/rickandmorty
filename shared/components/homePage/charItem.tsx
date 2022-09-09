import { Card, Grid, Typography } from "@mui/material";
import { positions } from "@mui/system";
import Image from "next/image";
import { FunctionComponent } from "react";

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
    <Card>
      <Grid sx={{ height: 220, width: 600 }} container columns={4}>
        <Grid sx={{ position: "relative" }} item xs={1.5}>
          <Image layout="fill" objectFit="cover" src={image} alt={charName} />
        </Grid>
        <Grid item xs={2.5}>
          <Grid item xs>
            <Typography variant="h6">{charName}</Typography>
            <Typography variant="h6">{`${charStatus} - ${charSpecies}`}</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h6">Last known location:</Typography>
            <Typography variant="h6">{charLocationName}</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h6">Character type:</Typography>
            <Typography variant="h6">{charType}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CharacterCard;

import React from "react";
import CharacterCard from "./CharacterCard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const CharacterList = props => {
  const {
    characters,
    game,
    saveCard,
  } = props;
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      margin: 80,
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  }));

  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2} className={classes.root}>
        {characters.map((character, index) => {
          return (
            <Grid item xs={2} item key={index} className={classes.paper}>
              <CharacterCard
                character={character}
                game={game}
                saveCard={saveCard}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default CharacterList;

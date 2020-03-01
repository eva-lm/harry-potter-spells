import React from "react";
import CharacterCard from "./CharacterCard";
import CharactersDuplicates from "./CharacterDuplicates";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Cat } from "react-kawaii";

const CharacterList = props => {
  const {
    characters,
    game,
    saveCard,
    charactersDuplicates,
    duplicateCard
  } = props;
  //console.log("props List -->", props);
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
    // <Grid container direction="row" justify="space-between" alignItems="center">
    <div>
      <Cat size={250} mood="blissful" color="#404A5C" />
      <Cat size={250} mood="sad" color="#404A5C" />
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

      <Grid container spacing={2} className={classes.root}>
        {charactersDuplicates.map((character, index) => {
          return (
            <Grid item xs={2} item key={index} className={classes.paper}>
              <CharactersDuplicates
                character={character}
                game={game}
                duplicateCard={duplicateCard}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default CharacterList;

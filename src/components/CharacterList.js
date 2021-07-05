import React from "react";
import CharacterCard from "./CharacterCard";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";

const CharacterList = props => {
  const {
    characters,
    game,
    saveCard,
  } = props;
  const useStyles = makeStyles(theme => ({
    root: {
     //flexGrow: 1,
     justifyContent: "center"
    },
    paper: {
      margin: 40,
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  }));

  const classes = useStyles();
  return (
    <Box>
      <Grid container className={classes.root}>
        {characters.map((character, index) => {
          return (
            <div key={index} className={classes.paper}>
              <CharacterCard
                character={character}
                game={game}
                saveCard={saveCard}
              />
            </div>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CharacterList;

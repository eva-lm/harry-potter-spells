import React from "react";
import SpellCard from "./SpellCard";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";

const SpellList = props => {
  const { spells, handleFavorite } = props;

  const useStyles = makeStyles(theme => ({
    content: {
      justifyContent: "center",
    },
  }));
  const classes = useStyles();

  return (
    <Box style={{ with: "100%", margin: "30px" }}>
      <Grid container className={classes.content}>
        {spells.map((spell, index) => {
          return (
              <SpellCard key={index} spell={spell} handleFavorite={handleFavorite} />
          );
        })}
      </Grid>
    </Box>
  );
};

export default SpellList;

import React from "react";
import SpellCard from "./SpellCard";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SpellList = props => {
  const { spells, handleFavorite } = props;

  const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      backgroundColor: theme.palette.background.paper
    },
    list: {
      width: "20%"
    }
  }));
  const classes = useStyles();

  return (
    <ul>
      <List className={classes.root}>
        {spells.map((spell, index) => {
          return (
            <ListItem className={classes.list} key={index}>
              <SpellCard spell={spell} handleFavorite={handleFavorite} />
            </ListItem>
          );
        })}
      </List>
    </ul>
  );
};

export default SpellList;

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
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    }
  }));
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      <List>
        {spells.map((spell, index) => {
          return (
            <ListItem className="spell__item" key={index}>
              <SpellCard spell={spell} handleFavorite={handleFavorite} />
            </ListItem>
          );
        })}
      </List>
    </ul>
  );
};

export default SpellList;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import "../stylesheets/polygon.css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";

const CharacterDuplicates = props => {
  const { character, duplicateCard } = props;
  //console.log("props Card --->", game.name);

  const useStyles = makeStyles(theme => ({
    card: {
      width: 250,
      marginTop: 40
    },
    media: {
      height: 250
    }
  }));

  const getDuplicateCard = function() {
    duplicateCard(character.name);
  };

  const classes = useStyles();
  return (
    <Card className={classes.card} onClick={getDuplicateCard}>
      <CardMedia
        className={classes.media}
        image={character.image}
        alt={character.name}
        title="Character photo"
      />
    </Card>
  );
};

export default CharacterDuplicates;

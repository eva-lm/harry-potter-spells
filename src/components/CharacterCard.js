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

const CharacterCard = props => {
  const { character, game, saveCard } = props;
  //console.log("props Card --->", game.name);

  const useStyles = makeStyles(theme => ({
    card: {
      width: 250,
      marginTop: 40
    },
    media: {
      height: 250
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    }
  }));
  const getCard = function() {
    saveCard(character.name);
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.card} onClick={getCard}>
        <CardMedia
          className={classes.media}
          image={character.image}
          alt={character.name}
          title="Character photo"
        />
        <CardHeader title={character.name} subheader={character.house} />
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <p>{character.dateOfBirth}</p>
          <p>
            {character.ancestry.charAt(0).toUpperCase() +
              character.ancestry.slice(1)}
          </p>

          <p>
            {character.species.charAt(0).toUpperCase() +
              character.species.slice(1)}
          </p>
          {character.wand.length && (
            <ul>
              <p>Wand:</p>
              <li>
                {character.wand.wood.charAt(0).toUpperCase() +
                  character.wand.wood.slice(1)}
              </li>
              <li>
                {character.wand.core.charAt(0).toUpperCase() +
                  character.wand.core.slice(1)}
              </li>
              <li>
                {character.wand.length == 0
                  ? ""
                  : character.wand.length + " cm"}
              </li>
            </ul>
          )}
          <p>
            {character.patronus == 0
              ? ""
              : "Patronus: " +
                character.patronus.charAt(0).toUpperCase() +
                character.patronus.slice(1)}
          </p>
          <p>
            {character.eyeColour == 0
              ? ""
              : "Eyes: " +
                character.eyeColour.charAt(0).toUpperCase() +
                character.eyeColour.slice(1)}
          </p>
          <p>
            {character.hairColour == 0
              ? ""
              : "Hair: " +
                character.hairColour.charAt(0).toUpperCase() +
                character.hairColour.slice(1)}
          </p>
        </Collapse>
      </Card>
    </React.Fragment>
  );
};

export default CharacterCard;

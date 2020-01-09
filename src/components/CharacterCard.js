import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../stylesheets/polygon.css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";

const CharacterCard = props => {
  const { character, game, saveCard } = props;
  console.log("props Card --->", props);

  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 145,
      height: "150px",
      margin: "20px"
    },
    media: {
      height: "100px"
    }
  }));
  const getCard = function() {
    saveCard(character.name);
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <div
        className={game.isFaceUp === true ? "frogUp" : "frog"}
        onClick={getCard}
      >
        {game.isFaceUp === true ? (
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={character.image}
              alt={character.name}
              title="Character photo"
            />
            <CardHeader title={character.name} subheader={character.house} />
            <p>{character.dateOfBirth}</p>
            <p>
              {character.ancestry.charAt(0).toUpperCase() +
                character.ancestry.slice(1)}
            </p>

            <p>
              {character.species.charAt(0).toUpperCase() +
                character.species.slice(1)}
            </p>
            <ul>
              Wand:
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
          </Card>
        ) : (
          <div className="hidden"></div>
        )}
      </div>
    </React.Fragment>
  );
};

export default CharacterCard;

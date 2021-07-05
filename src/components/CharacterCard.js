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
import "../stylesheets/game.css"

const CharacterCard = props => {
  const { character, saveCard } = props;

  const useStyles = makeStyles(theme => ({
    card: {
      width: 250,
      margin: 20
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
          <div className="character-info">
          {character.dateOfBirth === undefined
          ? ""
          :
          <p>{character.dateOfBirth}</p>
          }
          {character.ancestry === undefined
          ? ""
          :
          <p>
            {character.ancestry.charAt(0).toUpperCase() +
              character.ancestry.slice(1)}
          </p>
          }
          {character.species === undefined
          ? ""
          :
          <p>
            {character.species.charAt(0).toUpperCase() +
              character.species.slice(1)}
          </p>
          }
          {character.wand.length && (
            <ul style={{listStyle: "none", padding: "0" }}>
              <p>Wand:</p>
              {character.wand.wood === undefined
              ? ""
              :
              <li>
                {character.wand.wood.charAt(0).toUpperCase() +
                  character.wand.wood.slice(1)}
              </li>
              }
              {character.wand.core === undefined
              ? ""
              :
              <li>
                {character.wand.core.charAt(0).toUpperCase() +
                  character.wand.core.slice(1)}
              </li>
            }
                {character.wand.length === 0
                  ? ""
                  : 
                  <li>
                    {character.wand.length + " cm"}
                  </li>
                  }
            </ul>
          )}
            {character.patronus === undefined
              ? ""
              :
              <p>
              {"Patronus: " +
                character.patronus.charAt(0).toUpperCase() +
                character.patronus.slice(1)}
            </p>
            }
            {character.eyeColour === undefined
              ? ""
              :
              <p>
                {"Eyes: " +
                character.eyeColour.charAt(0).toUpperCase() +
                character.eyeColour.slice(1)}
              </p>
            } 
            {character.hairColour === undefined
              ? ""
              :
              <p>
                {"Hair: " +
                character.hairColour.charAt(0).toUpperCase() +
                character.hairColour.slice(1)}
              </p>
            }
          </div>
        </Collapse>
      </Card>
    </React.Fragment>
  );
};

export default CharacterCard;

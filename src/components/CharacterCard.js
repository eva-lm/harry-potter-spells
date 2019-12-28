import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { red } from "@material-ui/core/colors";
//import polygon from "../stylesheets/polygon.css";

const CharacterCard = props => {
  const { character } = props;
  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
      shapeOutside: polygon(
        "32px 126px, 163px 32px, 293px 127px, 244px 282px, 82px 281px"
      )
      // position: "relative",
      // background: "transparent",
      // width: 150,
      // borderWidth: "120px 58px 0",
      // borderStyle: "solid",
      // borderColor: red,
      // marginTop: "150px",
      // before: {
      //   top: "-230px",
      //   left: "-58px",
      //   borderWidth: "0 133px 110px",
      //   borderStyle: "solid"
      // }
    },

    // card:before: {

    // },

    media: {
      height: "100px",
      paddingTop: "56.25%" // 16:9
    }

    // expand: {
    //   transform: 'rotate(0deg)',
    //   marginLeft: 'auto',
    //   transition: theme.transitions.create('transform', {
    //     duration: theme.transitions.duration.shortest,
    //   }),
    // },
    // expandOpen: {
    //   transform: 'rotate(180deg)',
    // },
    // avatar: {
    //   backgroundColor: red[500],
    // },
  }));
  const classes = useStyles();
  return (
    // <div className="polygon">
    <Card className={classes.card}>
      <CardHeader title={character.name} subheader={character.house} />
      <CardMedia
        className={classes.media}
        image={character.image}
        alt={character.name}
        title="Character photo"
      />
      <p>{character.dateOfBirth}</p>
      <p>
        {character.ancestry.charAt(0).toUpperCase() +
          character.ancestry.slice(1)}
      </p>

      <p>
        {character.species.charAt(0).toUpperCase() + character.species.slice(1)}
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
          {character.wand.length == 0 ? "" : character.wand.length + " cm"}
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
    // </div>
  );
};

export default CharacterCard;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { purple } from "@material-ui/core/colors";
import glassesImage from "../images/glasses-harry-white.png";

const SpellCard = props => {
  const { spell, handleFavorite } = props;
  const useStyles = makeStyles({
    card: {
      minWidth: 300
    },
    text: {
      fontSize: 14
    },
    avatar: {
      backgroundColor: purple[900]
    },
    image: {
      width: 30
    }
  });

  const clickButton = () => {
    handleFavorite(spell._id);
  };

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <input
        onClick={clickButton}
        type="button"
        value="&hearts;"
        name="favorite"
        id="favorite"
      ></input>
      <CardHeader
        avatar={
          <Avatar aria-label="spell" className={classes.avatar}>
            <img className={classes.image} src={glassesImage} alt="glasses" />
          </Avatar>
        }
        title={spell.spell}
      />
      <CardContent>
        <Typography
          className={classes.text}
          color="textSecondary"
          variant="h5"
          component="p"
        >
          {spell.type}
        </Typography>

        <Typography
          className={classes.text}
          variant="body2"
          component="p"
          color="textSecondary"
        >
          {spell.effect}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SpellCard;

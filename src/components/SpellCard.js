import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { purple } from "@material-ui/core/colors";
import glassesImage from "../images/glasses-harry-white.png";
import FavoriteIcon from "@material-ui/icons/Favorite";

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
    },
    favorite: {
      color: purple[100]
    }
  });

  const clickButton = () => {
    handleFavorite(spell._id);
  };

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <FavoriteIcon
        className={classes.favorite}
        onClick={clickButton}
        type="button"
        value={spell._id}
        name="favorite"
        id="favorite"
      ></FavoriteIcon>
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

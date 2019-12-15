import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { purple, red, yellow } from "@material-ui/core/colors";
import glassesImage from "../images/glasses-harry.png";
import CardActions from "@material-ui/core/CardActions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";

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
      backgroundColor: yellow[300]
    },
    image: {
      width: 30
    },
    favorite: {
      color: red[600]
    }
  });

  const clickButton = () => {
    handleFavorite(spell);
  };

  const classes = useStyles();
  return (
    <Card className={classes.card}>
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
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={clickButton} className={classes.favorite} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default SpellCard;

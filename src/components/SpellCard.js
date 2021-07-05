import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { red, yellow } from "@material-ui/core/colors";
import glassesImage from "../images/glasses-harry.png";
import CardActions from "@material-ui/core/CardActions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";

const SpellCard = props => {
  const { spell, handleFavorite } = props;

  const useStyles = makeStyles({
    card: {
      width: 330,
      margin: 20
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
    },
    disable: {
      color: "gray"
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
        title={spell.hechizo}
      />
      <CardContent>
        <Typography className={classes.text} variant="body2" component="p">
          {spell.uso}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <div>
            <FavoriteIcon onClick={clickButton} className={ spell.favorite === true ? classes.favorite : classes.disable } />
          </div>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default SpellCard;

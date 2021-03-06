import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { yellow } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";

const FavoriteButton = props => {
  const useStyles = makeStyles(theme => ({
    root: {
      width: "200px",
      height: "40px",
      marginLeft: "50px"
    },
    favorite: {
      color: yellow[300],
      marginRight: "8px"
    }
  }));
  const classes = useStyles();
  return (
    <div>
      <Button variant="contained" color="secondary" className={classes.root}>
        <FavoriteIcon className={classes.favorite} />
        favorites
      </Button>
    </div>
  );
};

export default FavoriteButton;

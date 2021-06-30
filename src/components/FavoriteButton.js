import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { yellow } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
//import FavoriteSpellList from "./FavoriteSpellList";

const FavoriteButton = props => {
  const useStyles = makeStyles(theme => ({
    root: {
      width: "120px",
      height: "40px",
      marginLeft: "50px"
    },
    favorite: {
      color: yellow[300],
      marginRight: "2px"
    }
  }));
  // const hoveredStyle = {
  //   cursor: "crosshair"
  // };
  const classes = useStyles();
  return (
    <div>
      <Button
        tooltip="Go to favorites"
        // hoveredStyle={hoveredStyle}
        variant="contained"
        color="secondary"
        className={classes.root}
      >
        <FavoriteIcon className={classes.favorite} />
        favorites
      </Button>
    </div>
  );
};

export default FavoriteButton;

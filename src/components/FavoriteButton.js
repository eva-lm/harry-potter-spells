import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { yellow } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import a from "../images/a.png";
//import FavoriteSpellList from "./FavoriteSpellList";

const FavoriteButton = props => {
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      justifyContent: "center",
      marginTop: 30,
      paddingTop: 30,
      paddingBottom: 30,
      backgroundColor: "#cfcfcf",
     // backgroundImage: `url(${a})`,
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundSize: "cover"
    },
    button: {
      width: "250px",
      height: "45px"
    },
    icon: {
      color: yellow[300],
      marginRight: "2px",
    },
  }));
  // const hoveredStyle = {
  //   cursor: "crosshair"
  // };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        tooltip="Go to favorites"
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        <FavoriteIcon className={classes.icon} />
        favorites
      </Button>
    </div>
  );
};

export default FavoriteButton;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      justifyContent: "center",
      padding: "50px"
      //   position: "fixed",
      //   top: 50 + "%",
      //   left: 50 + "%",
      //   zIndex: 1
    }
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress variant="indeterminate"></CircularProgress>
    </div>
  );
};

export default Spinner;

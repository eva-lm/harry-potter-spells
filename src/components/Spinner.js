import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center"
    }
  }));
  const classes = useStyles();

  return (
    <CircularProgress
      className={classes.root}
      variant="indeterminate"
    ></CircularProgress>
  );
};

export default Spinner;

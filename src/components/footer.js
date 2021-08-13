import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


export const Footer = () => {


    const useStyles = makeStyles({
        footer: {
            position: "fixed",
            zIndex: "1", 
            bottom: "0", 
            width: "100%", 
            backgroundColor: "#e0e0e0",
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }
        })
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
        <Typography className={classes.text} variant="body2" component="p">
          Eva LM &copy;2021
          </Typography>
        </footer>
    )
}
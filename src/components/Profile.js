import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";


export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

  const useStyles = makeStyles({
    content: {
      justifyContent: "center",
    },
    text: {
      fontSize: 16,
      textAlign: "center",
    },
    title: {
      fontSize: 28,
      textAlign: "center",
      marginBottom: 30,
    }
  })
  const classes = useStyles();

    if (isLoading) {
        return <div>
            Loading...
        </div>
    }
    return (
        isAuthenticated && (
            <Box style={{ with: "100%", margin: "30px", marginTop: "150px" }}>
                <Box className={classes.content}>
                <Typography className={classes.title} variant="h2" color="primary">
                {user.name}
                </Typography>
                <Typography className={classes.text} variant="body2" component="p">
                {user.family_name}</Typography>
                <Typography className={classes.text} variant="body2" component="p">
                Email: {user.email} 
                </Typography>
                <Typography className={classes.text} variant="body2" component="p"
                >
                Nick: {user.nickname}
                </Typography>
                <Typography className={classes.text} variant="body2" component="p">
                {user.phone_number}
                </Typography>
                <Typography className={classes.text} variant="body2" component="p">
                {user.website}
                </Typography>
                </Box>
            </Box>
        )
    )
}
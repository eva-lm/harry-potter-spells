import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import spellBook from "../images/spell.png";
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Container from '@material-ui/core/Container';
import jum from "../images/desaprobacion.png";



const FavoriteSpellList = props => {
  const { favorites, handleFavorite } = props;
  const [item, setItem] = useState([])

//   useEffect(() => {
//     const data = localStorage.getItem("fav")
//     if(data) {
//       setItem(JSON.parse(data))
//     }
//   }, [])

//   useEffect(() => {
//     localStorage.setItem("fav", JSON.stringify(favorites))
//   }, )
// console.log("data", item)
function useStickyState(key) {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    console.log("value",stickyValue)

    return stickyValue !== null
      ? JSON.parse(stickyValue) : ""
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(favorites));
  }, [key, value]);
  return [value, setValue];
}
  useStickyState(favorites);


  const useStyles = makeStyles({
    content: {
      justifyContent: "center",
    },
    card: {
      width: 330,
      margin: 20
    },
    avatar: {
      backgroundColor: "#ae99f4"
    },
    text: {
      fontSize: 16
    },
    title: {
      fontSize: 28,
      textAlign: "center",
      marginBottom: 30,
    },
    favorite: {
      color: red[600]
    },
    image: {
      width: "85%",
    },
    dobby: {
      maxWidth: "80%",
      margin: "20px 0"
    },    
    info: {
      marginTop: 30,
      padding: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  })
  const classes = useStyles();

  
  return (
    <Box style={{ with: "100%", margin: "30px 30px 60px 30px" }}>
       <div>
         {favorites.length >= 1 ?
        (
          <Box className={classes.content}>
          <Typography className={classes.title} variant="h2" color="primary">
          Mis hechizos favoritos
          </Typography>
          <Grid container className={classes.content}>
          {favorites.map((item, index) => {
          return (
            <Card key={index} className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="spell" className={classes.avatar}>
                    <img className={classes.image} src={spellBook} alt="glasses" />
                  </Avatar>
                }
                title={item.hechizo}
              />
              <CardContent>
                <Typography className={classes.text} variant="body2" component="p">
                {item.uso}
                </Typography>
              </CardContent>      
              <CardActions disableSpacing>
                <IconButton onClick={() => {
                  handleFavorite(item)
                }} value={item} aria-label="add to favorites">
                    <FavoriteIcon className={classes.favorite} />
                </IconButton>
              </CardActions>
            </Card>
          );
        })}
        </Grid>
        </Box>)
        : 
        (
          <Container className={classes.info} >
            <Typography className={classes.text} variant="body2" component="p">
              Todavía no tienes hechizos favoritos... ¡Estudia un poco!
            </Typography>
            <img className={classes.dobby} src={jum} alt="dobby" />
          </Container>
          )
        }
      </div> 
    </Box>
  );
};

export default FavoriteSpellList;

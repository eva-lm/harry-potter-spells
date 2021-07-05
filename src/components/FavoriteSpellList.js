import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { red, yellow } from "@material-ui/core/colors";
import glassesImage from "../images/glasses-harry.png";
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Container from '@material-ui/core/Container';
import jum from "../images/desaprobacion.png"


const FavoriteSpellList = props => {
  const { handleFavorite } = props;


  // if (typeof(Storage) !== "undefined") {
  //   console.log("LocalStorage disponible")
  // } else {
  //   console.log("LocalStorage no soportado en este navegador")
  // }
  // //GUARDAR
  // localStorage.setItem('fav', JSON.stringify(favorites))
  // //CONSEGUIR ELEMENTO
  // let fav = JSON.parse(localStorage.getItem("fav"));
  //Eliminar un elemento del localStorage haremos:
    //localStorage.removeItem("titulo");
  //Eliminar todas las variables guardadas en el localStorage haremos:
    //localStorage.clear();


  // const savedItems = JSON.parse(localStorage.getItem('fav'))
  // const [fav, setFav] = useState(savedItems || []);
  
  // useEffect(() => {
  //   const fav = JSON.parse(localStorage.getItem('fav', favorites));
  //   if (fav) {


  //     setFav(fav)
  //     console.log("heheheehhehee", fav)
  //   }
    
  //   // 
  // }, [favorites]);

  console.log("PRPS FAV", props)

  const useStyles = makeStyles({
    content: {
      justifyContent: "center"
    },
    card: {
      width: 330,
      margin: 20
    },
    avatar: {
      backgroundColor: yellow[300]
    },
    text: {
      fontSize: 16
    },
    favorite: {
      color: red[600]
    },
    image: {
      width: "80%",
      margin: 10
    },
    dobby: {
      maxWidth: 500,
    },    
    info: {
      width: "60%",
      padding: 20,
      textAlign: "center",
    }
  })
  const classes = useStyles();
  return (
    <Box style={{ with: "100%", margin: "30px" }}>
       <Grid container className={classes.content}>
         {props.favorites.length >= 1 ?
        (props.favorites.map((item, index) => {
          return (
            <div>
            <Card className={classes.card} key={index}>
              <CardHeader
                avatar={
                  <Avatar aria-label="spell" className={classes.avatar}>
                    <img className={classes.image} src={glassesImage} alt="glasses" />
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
            </div>
          );
        }))
        : 
        (
          <Container className={classes.info} >
            <p style={{ fontSize: "22px"}}>You don't have favorites yet ... Study the spells well!</p>
            <img className={classes.dobby} src={jum} alt="dobby" />
          </Container>
          )
        }
      </Grid> 
    </Box>
  );
};

export default FavoriteSpellList;

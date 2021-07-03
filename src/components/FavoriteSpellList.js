import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { yellow } from "@material-ui/core/colors";
import glassesImage from "../images/glasses-harry.png";

import jum from "../images/desaprobacion.png"


const FavoriteSpellList = props => {
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


  console.log("fav-->",props )

  const useStyles = makeStyles({
    card: {
      width: "90%",
      padding: 20,
      textAlign: "center"
    },
    avatar: {
      backgroundColor: yellow[300]
    },
    text: {
      fontSize: 14
    },
    image: {
      width: "80%",
      margin: 10
    }
  })
  const classes = useStyles();
  return (
    <div style={{ display: "flex", justifyContent: "center", with: "100%", margin: "30px" }}>
       <ul>
         {props.favorites.length >= 1 ?
        (props.favorites.map((item, index) => {
          return (
            <Card style={{ margin: "20px" }} key={index}>
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
            </Card>
          );
        }))
        : 
      (<Card className={classes.card} >
          <p style={{ fontSize: "18px" }}>You don't have favorites yet ... Study the spells well!</p>
          <img className={classes.image} src={jum} alt="dobby" />
        </Card>) }
      </ul> 
    </div>
  );
};

export default FavoriteSpellList;

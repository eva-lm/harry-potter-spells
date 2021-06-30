import React, { useEffect, useState } from "react";


const FavoriteSpellList = props => {
  const { fav } = props;
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


  return (
    <div>
       <ul>
        {props.favorites.map((item, index) => {
          return (
            <li key={index}>
              <p>{item.hechizo}</p>
              <p>{item.uso}</p>
            </li>
          );
        })}
      </ul> 
    </div>
  );
};

export default FavoriteSpellList;

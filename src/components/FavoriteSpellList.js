import React from "react";
import { Link, Route, Switch } from "react-router-dom";

const FavoriteSpellList = props => {
  const { favorites } = props;
  //console.log("props favortes", props);

  return (
    <div>
      <p>HOKICAASDADfsdjvgfkñ-diiii</p>
      <Link to="/spells">Back</Link>
      <ul>
        {favorites.map((item, index) => {
          return (
            <li key={index}>
              <p>{item.spell}</p>
              <p>{item.type}</p>
              <p>{item.effect}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FavoriteSpellList;

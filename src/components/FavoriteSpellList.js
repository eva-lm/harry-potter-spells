import React from "react";

const FavoriteSpellList = props => {
  const { favorites } = props;
  //console.log("props favortes", props);

  return (
    <div>
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

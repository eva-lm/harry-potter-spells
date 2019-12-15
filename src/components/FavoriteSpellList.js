import React from "react";

const FavoriteSpellList = props => {
  const { favorites } = props;

  return (
    <div>
      <ul>
        {favorites.map((item, index) => {
          return (
            <li>
              {item.spell}
              {item.type}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FavoriteSpellList;

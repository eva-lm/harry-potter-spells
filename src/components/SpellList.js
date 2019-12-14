import React from "react";
import SpellCard from "./SpellCard";

const SpellList = props => {
  const { spells, handleFavorite } = props;

  return (
    <ul className="spell__list">
      {spells.map((spell, index) => {
        return (
          <li className="spell__item" key={index}>
            <SpellCard spell={spell} handleFavorite={handleFavorite} />
          </li>
        );
      })}
    </ul>
  );
};

export default SpellList;

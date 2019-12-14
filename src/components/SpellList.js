import React from "react";
import SpellCard from "./SpellCard";

const SpellList = props => {
  console.log(props);
  const { spells } = props;

  return (
    <ul className="spell__list">
      {spells.map((spell, index) => {
        return (
          <li className="spell__item" key={index}>
            <SpellCard spell={spell} />
          </li>
        );
      })}
    </ul>
  );
};

export default SpellList;

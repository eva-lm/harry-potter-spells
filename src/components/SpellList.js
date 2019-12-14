import React from "react";
import SpellCard from "./SpellCard";

const SpellList = props => {
  console.log(props);
  const { spells } = props;

  return (
    <React.Fragment>
      <SpellCard />
      <ul className="spell__list">
        {spells.map((spell, index) => {
          return (
            <li className="spell__item" key={index}>
              <h3 className="spell__title">{spell.spell}</h3>
              <p className="spell__type">Type: {spell.type}</p>
              <p>Effect: {spell.effect}</p>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default SpellList;

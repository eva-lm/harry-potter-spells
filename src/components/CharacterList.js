import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = props => {
  const { characters } = props;
  console.log("soy las proppps", characters);
  return (
    <ul>
      {characters.map((character, index) => {
        return (
          <li key={index}>
            <CharacterCard character={character} />
          </li>
        );
      })}
    </ul>
  );
};

export default CharacterList;

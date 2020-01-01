import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = props => {
  const { characters, isFaceUp, changeFace } = props;
  return (
    <ul>
      {characters.map((character, index) => {
        return (
          <li key={index}>
            <CharacterCard
              index={index}
              character={character}
              isFaceUp={isFaceUp}
              changeFace={changeFace}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CharacterList;

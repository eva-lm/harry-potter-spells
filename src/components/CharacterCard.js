import React from "react";

const CharacterCard = props => {
  const { character } = props;

  return (
    <div>
      <h2>{character.name}</h2>
      <h3>{character.house}</h3>
      <img src={character.image} alt={character.name} />
      <p>{character.dateOfBirth}</p>
      <p>
        {character.ancestry.charAt(0).toUpperCase() +
          character.ancestry.slice(1)}
      </p>

      <p>
        {character.species.charAt(0).toUpperCase() + character.species.slice(1)}
      </p>
      <ul>
        Wand:
        <li>
          {character.wand.wood.charAt(0).toUpperCase() +
            character.wand.wood.slice(1)}
        </li>
        <li>
          {character.wand.core.charAt(0).toUpperCase() +
            character.wand.core.slice(1)}
        </li>
        <li>
          {character.wand.length == 0 ? "" : character.wand.length + " cm"}
        </li>
      </ul>
      <p>
        {character.patronus == 0
          ? ""
          : "Patronus: " +
            character.patronus.charAt(0).toUpperCase() +
            character.patronus.slice(1)}
      </p>
      <p>
        {character.eyeColour == 0
          ? ""
          : "Eyes: " +
            character.eyeColour.charAt(0).toUpperCase() +
            character.eyeColour.slice(1)}
      </p>
      <p>
        {character.hairColour == 0
          ? ""
          : "Hair: " +
            character.hairColour.charAt(0).toUpperCase() +
            character.hairColour.slice(1)}
      </p>
    </div>
  );
};

export default CharacterCard;

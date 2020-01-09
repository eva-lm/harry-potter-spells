import React from "react";
import CharacterCard from "./CharacterCard";
import Grid from "@material-ui/core/Grid";
import { Cat } from "react-kawaii";

const CharacterList = props => {
  const { characters, game, saveCard } = props;
  console.log("props List -->", props);
  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Cat size={250} mood="blissful" color="#404A5C" />
      <Cat size={250} mood="sad" color="#404A5C" />

      {characters.map((character, index) => {
        return (
          <div key={index}>
            <CharacterCard
              character={character}
              game={game}
              saveCard={saveCard}
            />
          </div>
        );
      })}
    </Grid>
  );
};

export default CharacterList;

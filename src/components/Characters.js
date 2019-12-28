import React from "react";
import getCharactersFromServer from "../services/dataCharacters";
import CharacterList from "./CharacterList";

class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    getCharactersFromServer().then(data => {
      const pjs = data;
      this.setState({
        characters: pjs
      });
    });
  }

  render() {
    const { characters } = this.state;
    console.log("soy el estado de la nacion", this.state);
    return (
      <div>
        <CharacterList characters={characters} />
      </div>
    );
  }
}

export default Characters;

import React from "react";
import getCharactersFromServer from "../services/dataCharacters";
import CharacterList from "./CharacterList";
import { Link } from "react-router-dom";

class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      isFaceUp: false
    };
    this.changeFace = this.changeFace.bind(this);
  }

  componentDidMount() {
    getCharactersFromServer().then(data => {
      const pjs = data;
      this.setState({
        characters: pjs
      });
    });
  }

  changeFace(index) {
    const characterIndex = index;
    console.log("no se lo que hago", characterIndex);
    if (this.state.isFaceUp === false) {
      this.setState({
        isFaceUp: true
      });
    } else {
      this.setState({
        isFaceUp: false
      });
    }
  }
  render() {
    const { characters, isFaceUp } = this.state;
    console.log("soy el estado de la nacion", this.state);
    return (
      <div>
        <Link to="/.">Back</Link>
        <CharacterList
          characters={characters}
          isFaceUp={isFaceUp}
          changeFace={this.changeFace}
        />
      </div>
    );
  }
}

export default Characters;

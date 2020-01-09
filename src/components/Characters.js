import React from "react";
import getCharactersFromServer from "../services/dataCharacters";
import CharacterList from "./CharacterList";
import { Link } from "react-router-dom";

class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      game: []
    };
    this.saveCard = this.saveCard.bind(this);
    //this.changeFace = this.changeFace.bind(this);
  }

  componentDidMount() {
    getCharactersFromServer().then(data => {
      const pjs = data;
      this.setState({
        characters: pjs
      });
    });
  }

  saveCard(name) {
    const characterName = name;
    this.setState({
      game: [...this.state.game, { name: characterName, isFaceUp: true }]
    });
    //this.changeFace(name);
  }

  // changeFace(name) {
  //   this.state.selected.forEach(select => {
  //     if (select) {
  //       this.state.isFaceUp === false
  //         ? this.setState({
  //             isFaceUp: true
  //           })
  //         : this.setState({
  //             isFaceUp: false
  //           });
  //     }
  //   });
  // }

  render() {
    const { characters, game } = this.state;
    console.log("soy el estado de la nacion", this.state.game);
    return (
      <div>
        <Link to="/.">Back</Link>
        <CharacterList
          characters={characters}
          game={game}
          saveCard={this.saveCard}
        />
      </div>
    );
  }
}

export default Characters;

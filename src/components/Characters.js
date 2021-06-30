import React from "react";
import getCharactersFromServer from "../services/dataCharacters";
import CharacterList from "./CharacterList";
import { Link } from "react-router-dom";

class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      charactersDuplicates: [],
      partOne: [],
      partTwo: [],
      match: [],
      isFaceUp: false
    };

    this.saveCard = this.saveCard.bind(this);
    this.duplicateCard = this.duplicateCard.bind(this);
  }

  componentDidMount() {
    getCharactersFromServer().then(data => {
      const pjs = data;
      this.setState({
        characters: pjs,
        charactersDuplicates: pjs
      });
    });
  }

  saveCard(name) {
    const characterName = name;
    this.setState(prevState => {
      return {
        partOne: prevState.partOne.find(i => i === characterName)
          ? prevState.partOne.filter(i => i !== characterName)
          : prevState.partOne.concat(characterName)
      };
    });
    this.comparedCards();
  }
  duplicateCard(name) {
    const characterDuplicateName = name;
    this.setState(prevState => {
      return {
        partTwo: prevState.partTwo.find(i => i === characterDuplicateName)
          ? prevState.partTwo.filter(i => i !== characterDuplicateName)
          : prevState.partTwo.concat(characterDuplicateName)
      };
    });

    this.comparedCards();
  }
  comparedCards() {
    const filterCard = this.state.partOne.filter(i =>
      this.state.partTwo.includes(i)
    );
    this.setState({
      match: filterCard
    })
    console.log("filtrando", filterCard);
  }

  render() {
    const { characters, partOne, partTwo, charactersDuplicates } = this.state;

    console.log("CHARACTER STATE", this.state.partOne);
    console.log("CHARACTER STATE1", this.state.partTwo);

    return (
      <div>
        <Link to="/.">Back</Link>
        <CharacterList
          characters={characters}
          saveCard={this.saveCard}
          charactersDuplicates={charactersDuplicates}
          duplicateCard={this.duplicateCard}
        />
      </div>
    );
  }
}

export default Characters;

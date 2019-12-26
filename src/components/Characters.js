import React from "react";
import getCharactersFromServer from "../services/dataCharacters";

class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    getCharactersFromServer().then(data => {
      console.log("personajeees", data);
    });
  }

  render() {
    return (
      <div>
        <p>soy los characteeersssss</p>
      </div>
    );
  }
}

export default Characters;
